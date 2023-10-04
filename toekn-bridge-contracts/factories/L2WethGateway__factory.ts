/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { L2WethGateway, L2WethGatewayInterface } from '../L2WethGateway'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_l2ToL1Id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalInitiated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611560806100206000396000f3fe6080604052600436106100ab5760003560e01c806395fcea781161006457806395fcea781461018d578063a0c76a96146101a2578063a7e28d48146101c2578063d2ce7d65146101e2578063f887ea40146101f5578063f8c8765e1461021557600080fd5b8063015234ab146100b7578063146bf4b1146100e0578063247b2768146101185780632db09c1c146101385780632e567b36146101585780637b3a3c8b1461016d57600080fd5b366100b257005b600080fd5b3480156100c357600080fd5b506100cd60025481565b6040519081526020015b60405180910390f35b3480156100ec57600080fd5b50600354610100906001600160a01b031681565b6040516001600160a01b0390911681526020016100d7565b34801561012457600080fd5b50600454610100906001600160a01b031681565b34801561014457600080fd5b50600054610100906001600160a01b031681565b61016b610166366004610fd6565b610235565b005b61018061017b36600461105a565b610490565b6040516100d7919061111c565b34801561019957600080fd5b5061016b6104ac565b3480156101ae57600080fd5b506101806101bd3660046111d8565b610524565b3480156101ce57600080fd5b506101006101dd366004611256565b61058f565b6101806101f0366004611273565b6105c0565b34801561020157600080fd5b50600154610100906001600160a01b031681565b34801561022157600080fd5b5061016b6102303660046112f8565b61080c565b600054610253906001600160a01b031661111161111160901b010190565b6001600160a01b0316336001600160a01b0316146102b35760405162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b60448201526064015b60405180910390fd5b6000806102c084846108d4565b9150915080516000146102de57506040805160208101909152600081525b60006102e98961058f565b90506001600160a01b0381163b61031d57600061030a8a838b8b8b896108ee565b9050801561031b5750505050610488565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b179052905160009182916001600160a01b0385169161036091611354565b600060405180830381855afa9150503d806000811461039b576040519150601f19603f3d011682016040523d82523d6000602084013e6103a0565b606091505b509150915060008215806103b5575060208251105b156103c2575060016103f1565b60006103cf83600c61091a565b90508c6001600160a01b0316816001600160a01b0316146103ef57600191505b505b801561041f576104138c308d8c60405180602001604052806000815250610982565b50505050505050610488565b50505061042d818888610a02565b866001600160a01b0316886001600160a01b03168a6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb28960405161047c91815260200190565b60405180910390a45050505b505050505050565b60606104a286868660008088886105c0565b9695505050505050565b60006104d67fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050336001600160a01b038216146105215760405162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b60448201526064016102aa565b50565b6060632e567b3660e01b8686868661053e60025488610a71565b604051602401610552959493929190611370565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152905095945050505050565b6003546000906001600160a01b038381169116146105af57506000919050565b50506004546001600160a01b031690565b606034156105fb5760405162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b60448201526064016102aa565b6001546000906060906001600160a01b031633036106275761061d8585610a9d565b9092509050610664565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b8051156106a95760405162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b60448201526064016102aa565b6000806106b58c61058f565b90506001600160a01b0381163b6107035760405162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b60448201526064016102aa565b8b6001600160a01b0316816001600160a01b031663c2eeeebd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561074b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076f91906113ab565b6001600160a01b0316146107bd5760405162461bcd60e51b81526020600482015260156024820152742727aa2fa2ac2822a1aa22a22fa618afaa27a5a2a760591b60448201526064016102aa565b6107c881858c610ab9565b99506107d78c858d8d87610982565b915050806040516020016107ed91815260200190565b6040516020818303038152906040529350505050979650505050505050565b6108168484610b27565b6001600160a01b03821661085d5760405162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b60448201526064016102aa565b6001600160a01b0381166108a45760405162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b60448201526064016102aa565b600380546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790555050565b6060806108e3838501856113c8565b909590945092505050565b600061090c8730878660405180602001604052806000815250610982565b506001979650505050505050565b6000610927826014611441565b8351101561096c5760405162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b60448201526064016102aa565b5081810160200151600160601b90045b92915050565b600254600090816109a0878661099b8b838b848b610524565b610b78565b604080516001600160a01b038b81168252602082018690529181018890529192508291818916918a16907f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d739060600160405180910390a4979650505050505050565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610a3d57600080fd5b505af1158015610a51573d6000803e3d6000fd5b50610a6c935050506001600160a01b03851690508383610bb0565b505050565b60608282604051602001610a86929190611454565b604051602081830303815290604052905092915050565b60006060610aad8385018561146d565b915091505b9250929050565b6040516374f4f54760e01b81526001600160a01b03838116600483015260248201839052600091908516906374f4f54790604401600060405180830381600087803b158015610b0757600080fd5b505af1158015610b1b573d6000803e3d6000fd5b50939695505050505050565b610b318282610c02565b6001600160a01b038116610b745760405162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b60448201526064016102aa565b5050565b6002805460009182610b89836114b2565b9091555050600054610ba890849086906001600160a01b031685610cc4565b949350505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a6c908490610d8b565b6001600160a01b038216610c4e5760405162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b60448201526064016102aa565b6000546001600160a01b031615610c965760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b60448201526064016102aa565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6040516349460b4d60e11b8152600090819060649063928c169a908890610cf190889088906004016114cb565b60206040518083038185885af1158015610d0f573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610d3491906114ef565b905080846001600160a01b0316866001600160a01b03167f2b986d32a0536b7e19baa48ab949fec7b903b7fad7730820b20632d100cc3a6886604051610d7a919061111c565b60405180910390a495945050505050565b6000610de0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e5d9092919063ffffffff16565b805190915015610a6c5780806020019051810190610dfe9190611508565b610a6c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102aa565b6060610ba8848460008585600080866001600160a01b03168587604051610e849190611354565b60006040518083038185875af1925050503d8060008114610ec1576040519150601f19603f3d011682016040523d82523d6000602084013e610ec6565b606091505b5091509150610ed787838387610ee2565b979650505050505050565b60608315610f51578251600003610f4a576001600160a01b0385163b610f4a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102aa565b5081610ba8565b610ba88383815115610f665781518083602001fd5b8060405162461bcd60e51b81526004016102aa919061111c565b6001600160a01b038116811461052157600080fd5b60008083601f840112610fa757600080fd5b5081356001600160401b03811115610fbe57600080fd5b602083019150836020828501011115610ab257600080fd5b60008060008060008060a08789031215610fef57600080fd5b8635610ffa81610f80565b9550602087013561100a81610f80565b9450604087013561101a81610f80565b93506060870135925060808701356001600160401b0381111561103c57600080fd5b61104889828a01610f95565b979a9699509497509295939492505050565b60008060008060006080868803121561107257600080fd5b853561107d81610f80565b9450602086013561108d81610f80565b93506040860135925060608601356001600160401b038111156110af57600080fd5b6110bb88828901610f95565b969995985093965092949392505050565b60005b838110156110e75781810151838201526020016110cf565b50506000910152565b600081518084526111088160208601602086016110cc565b601f01601f19169290920160200192915050565b60208152600061112f60208301846110f0565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261115d57600080fd5b81356001600160401b038082111561117757611177611136565b604051601f8301601f19908116603f0116810190828211818310171561119f5761119f611136565b816040528381528660208588010111156111b857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a086880312156111f057600080fd5b85356111fb81610f80565b9450602086013561120b81610f80565b9350604086013561121b81610f80565b92506060860135915060808601356001600160401b0381111561123d57600080fd5b6112498882890161114c565b9150509295509295909350565b60006020828403121561126857600080fd5b813561112f81610f80565b600080600080600080600060c0888a03121561128e57600080fd5b873561129981610f80565b965060208801356112a981610f80565b955060408801359450606088013593506080880135925060a08801356001600160401b038111156112d957600080fd5b6112e58a828b01610f95565b989b979a50959850939692959293505050565b6000806000806080858703121561130e57600080fd5b843561131981610f80565b9350602085013561132981610f80565b9250604085013561133981610f80565b9150606085013561134981610f80565b939692955090935050565b600082516113668184602087016110cc565b9190910192915050565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a060808201819052600090610ed7908301846110f0565b6000602082840312156113bd57600080fd5b815161112f81610f80565b600080604083850312156113db57600080fd5b82356001600160401b03808211156113f257600080fd5b6113fe8683870161114c565b9350602085013591508082111561141457600080fd5b506114218582860161114c565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561097c5761097c61142b565b828152604060208201526000610ba860408301846110f0565b6000806040838503121561148057600080fd5b823561148b81610f80565b915060208301356001600160401b038111156114a657600080fd5b6114218582860161114c565b6000600182016114c4576114c461142b565b5060010190565b6001600160a01b0383168152604060208201819052600090610ba8908301846110f0565b60006020828403121561150157600080fd5b5051919050565b60006020828403121561151a57600080fd5b8151801515811461112f57600080fdfea26469706673582212205e1dae83f6cef8e78cedd6e928484c5948186b9b3c24d3f2ad98f8b91d5e368a64736f6c63430008110033'

export class L2WethGateway__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0])
    } else {
      super(...args)
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2WethGateway> {
    return super.deploy(overrides || {}) as Promise<L2WethGateway>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2WethGateway {
    return super.attach(address) as L2WethGateway
  }
  connect(signer: Signer): L2WethGateway__factory {
    return super.connect(signer) as L2WethGateway__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2WethGatewayInterface {
    return new utils.Interface(_abi) as L2WethGatewayInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2WethGateway {
    return new Contract(address, _abi, signerOrProvider) as L2WethGateway
  }
}