import { ethers, Wallet } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'

import fs from 'fs'
import { L3Config } from './l3ConfigType'
import { TOKEN_BRIDGE_CREATOR_Arb_Sepolia } from './createTokenBridge'
import L1AtomicTokenBridgeCreator from '@arbitrum/token-bridge-contracts/build/contracts/contracts/tokenbridge/ethereum/L1AtomicTokenBridgeCreator.sol/L1AtomicTokenBridgeCreator.json'
import { arbOwnerPublicActions } from '@arbitrum/orbit-sdk/dist/decorators/arbOwnerPublicActions'
import { createPublicClient, defineChain, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sanitizePrivateKey } from '@arbitrum/orbit-sdk/utils'

function createPublicClientFromChainInfo({
  id,
  name,
  rpcUrl,
}: {
  id: number
  name: string
  rpcUrl: string
}) {
  const chain = defineChain({
    id: id,
    network: name,
    name: name,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: [rpcUrl],
      },
      public: {
        http: [rpcUrl],
      },
    },
    testnet: true,
  })
  return createPublicClient({ chain, transport: http() })
}

export const getSigner = (provider: JsonRpcProvider, key?: string) => {
  if (!key && !provider)
    throw new Error('Provide at least one of key or provider.')
  if (key) return new Wallet(key).connect(provider)
  else return provider.getSigner(0)
}

export async function transferOwner(
  privateKey: string,
  l2Provider: ethers.providers.JsonRpcProvider,
  childChainRpc: string
) {
  //Generating l2 and l3 deployer signers from privatekey and providers
  const deployer = privateKeyToAccount(sanitizePrivateKey(privateKey))

  //fetching chain id of parent chain
  const l2ChainId = (await l2Provider.getNetwork()).chainId

  let TOKEN_BRIDGE_CREATOR
  if (l2ChainId === 421614) {
    TOKEN_BRIDGE_CREATOR = TOKEN_BRIDGE_CREATOR_Arb_Sepolia
  } else {
    throw new Error(
      'The Base Chain you have provided is not supported, please put RPC for Arb Sepolia'
    )
  }
  const l2NetworkInfo = await l2Provider.getNetwork()
  const orbitChainPublicClient = createPublicClientFromChainInfo({
    id: l2NetworkInfo.chainId,
    name: l2NetworkInfo.name,
    rpcUrl: childChainRpc,
  }).extend(arbOwnerPublicActions)
  // Read the JSON configuration
  const configRaw = fs.readFileSync(
    './config/orbitSetupScriptConfig.json',
    'utf-8'
  )
  const config: L3Config = JSON.parse(configRaw)

  const L1AtomicTokenBridgeCreator__factory = new ethers.Contract(
    TOKEN_BRIDGE_CREATOR,
    L1AtomicTokenBridgeCreator.abi,
    l2Provider
  )
  const l1TokenBridgeCreator =
    L1AtomicTokenBridgeCreator__factory.connect(l2Provider)

  //fetching L3 upgrade executor address
  const executorContractAddress = (
    await l1TokenBridgeCreator.inboxToL2Deployment(config.inbox)
  ).upgradeExecutor

  console.log('Adding Upgrade Executor contract to the chain owners')
  const transactionRequest1 =
    await orbitChainPublicClient.arbOwnerPrepareTransactionRequest({
      functionName: 'addChainOwner',
      args: [executorContractAddress],
      upgradeExecutor: false,
      account: deployer.address,
    })

  // submit tx to add chain owner
  await orbitChainPublicClient.sendRawTransaction({
    serializedTransaction: await deployer.signTransaction(transactionRequest1),
  })

  const isOwner = await orbitChainPublicClient.arbOwnerReadContract({
    functionName: 'isChainOwner',
    args: [executorContractAddress],
  })

  // assert account is now owner
  if (isOwner) {
    console.log('Executor has been added to chain owners')
  }
  // Removing deployer as chain owner
  const transactionRequest2 =
    await orbitChainPublicClient.arbOwnerPrepareTransactionRequest({
      functionName: 'removeChainOwner',
      args: [deployer.address],
      upgradeExecutor: executorContractAddress,
      account: deployer.address,
    })

  // submit tx to remove chain owner
  await orbitChainPublicClient.sendRawTransaction({
    serializedTransaction: await deployer.signTransaction(transactionRequest2),
  })

  const isOwner2 = await orbitChainPublicClient.arbOwnerReadContract({
    functionName: 'isChainOwner',
    args: [deployer.address],
  })
  if (!isOwner2) {
    console.log('Executor has been added to chain owners')
  }
}
