/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L1GatewayRouter,
  L1GatewayRouterInterface,
} from '../L1GatewayRouter'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newDefaultGateway',
        type: 'address',
      },
    ],
    name: 'DefaultGatewayUpdated',
    type: 'event',
  },
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
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'GatewaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userFrom',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'TransferRouted',
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
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'WhitelistSourceUpdated',
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
    name: 'defaultGateway',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
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
    ],
    name: 'getGateway',
    outputs: [
      {
        internalType: 'address',
        name: 'gateway',
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
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
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
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_defaultGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_counterpartGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1TokenToGateway',
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
        name: '_token',
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
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
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
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_refundTo',
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
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransferCustomRefund',
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
    inputs: [],
    name: 'owner',
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
    inputs: [
      {
        internalType: 'address',
        name: 'newL1DefaultGateway',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setDefaultGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_creditBackAddress',
        type: 'address',
      },
    ],
    name: 'setGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_token',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_gateway',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setGateways',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'updateWhitelistSource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611dba806100206000396000f3fe6080604052600436106101355760003560e01c80638da5cb5b116100ab578063bda009fe1161006f578063bda009fe1461032d578063d2ce7d651461034d578063dd61456914610360578063ed08fdc614610373578063f887ea40146103a9578063fb0e722b146103c957600080fd5b80638da5cb5b1461029857806393e59dc1146102b857806395fcea78146102d8578063a0c76a96146102ed578063a7e28d481461030d57600080fd5b80632db09c1c116100fd5780632db09c1c146101ff5780632e567b361461021f57806347466f98146102325780634fb1a07b146102525780635625a95214610272578063658b53f41461028557600080fd5b806301ffc9a71461013a578063032958021461016f57806313af40351461019c5780631459457a146101be5780632d67b72d146101de575b600080fd5b34801561014657600080fd5b5061015a6101553660046114d3565b6103e9565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b5060045461018f906001600160a01b031681565b60405161016691906114fd565b3480156101a857600080fd5b506101bc6101b7366004611526565b610420565b005b3480156101ca57600080fd5b506101bc6101d9366004611543565b6104bb565b6101f16101ec3660046115b4565b610501565b604051908152602001610166565b34801561020b57600080fd5b5060015461018f906001600160a01b031681565b6101bc61022d366004611644565b61051b565b34801561023e57600080fd5b506101bc61024d366004611526565b61055a565b6102656102603660046116c8565b6105fa565b60405161016691906117af565b6101f16102803660046117c2565b6106fd565b6101f16102933660046118c0565b610740565b3480156102a457600080fd5b5060055461018f906001600160a01b031681565b3480156102c457600080fd5b5060005461018f906001600160a01b031681565b3480156102e457600080fd5b506101bc61077c565b3480156102f957600080fd5b50610265610308366004611965565b6107f4565b34801561031957600080fd5b5061018f610328366004611526565b610888565b34801561033957600080fd5b5061018f610348366004611526565b610921565b61026561035b366004611a26565b610981565b6101f161036e3660046117c2565b61099e565b34801561037f57600080fd5b5061018f61038e366004611526565b6003602052600090815260409020546001600160a01b031681565b3480156103b557600080fd5b5060025461018f906001600160a01b031681565b3480156103d557600080fd5b5060065461018f906001600160a01b031681565b60006001600160e01b03198216634fb1a07b60e01b148061041a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6005546001600160a01b031633146104535760405162461bcd60e51b815260040161044a90611aab565b60405180910390fd5b6001600160a01b0381166104995760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015260640161044a565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6104c7826000866109ad565b600580546001600160a01b039687166001600160a01b03199182161790915560008054821690556006805492909616911617909355505050565b6000610511868686868634610a1f565b9695505050505050565b60405162461bcd60e51b815260206004820152601460248201527327a7262cafa7aaaa2127aaa7222fa927aaaa22a960611b604482015260640161044a565b6000546001600160a01b031633146105a45760405162461bcd60e51b815260206004820152600d60248201526c1393d517d19493d357d31254d5609a1b604482015260640161044a565b600080546001600160a01b0319166001600160a01b0383161790556040517f37389c47920d5cc3229678a0205d0455002c07541a4139ebdce91ac227465777906105ef9083906114fd565b60405180910390a150565b606060006106078a610921565b90506000610616338686610c70565b9050886001600160a01b0316336001600160a01b03168c6001600160a01b03167f85291dff2161a93c2f12c819d31889c96c63042116f5bc5a205aa701c2c429f58560405161066591906114fd565b60405180910390a4604051634fb1a07b60e01b81526001600160a01b03831690634fb1a07b9034906106a7908f908f908f908f908f908f908b90600401611acf565b60006040518083038185885af11580156106c5573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f191682016040526106ee9190810190611b14565b9b9a5050505050505050505050565b6005546000906001600160a01b0316331461072a5760405162461bcd60e51b815260040161044a90611aab565b6107378585858534610c9f565b95945050505050565b6005546000906001600160a01b0316331461076d5760405162461bcd60e51b815260040161044a90611aab565b61051186868686863334610dfb565b60006107a67fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050336001600160a01b038216146107f15760405162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015260640161044a565b50565b6060600061080187610921565b604051635063b54b60e11b81529091506001600160a01b0382169063a0c76a9690610838908a908a908a908a908a90600401611b81565b600060405180830381865afa158015610855573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261087d9190810190611b14565b979650505050505050565b60008061089483610921565b90506001600160a01b0381166108ad5750600092915050565b6040516314fc51a960e31b81526001600160a01b0382169063a7e28d48906108d99086906004016114fd565b602060405180830381865afa1580156108f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091a9190611bbc565b9392505050565b6001600160a01b03808216600090815260036020526040902054168061094f57506004546001600160a01b03165b6001600160a01b0381166001148061096f57506001600160a01b0381163b155b1561097c57506000919050565b919050565b606061099288888888888888611204565b98975050505050505050565b60006107378585858533610501565b6001600160a01b038216156109f15760405162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015260640161044a565b6109fb83836112f6565b600480546001600160a01b0319166001600160a01b03929092169190911790555050565b600060b160ff16336001600160a01b0316638e5f5ad16040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a889190611bd9565b60ff1614610aca5760405162461bcd60e51b815260206004820152600f60248201526e1393d517d0549097d1539050931151608a1b604482015260640161044a565b6001600160a01b0387163b610b135760405162461bcd60e51b815260206004820152600f60248201526e1393d517d513d7d0d3d395149050d5608a1b604482015260640161044a565b6000610b1e33610921565b90506001600160a01b03811615801590610b4657506004546001600160a01b03828116911614155b15610bac57876001600160a01b0316816001600160a01b031614610bac5760405162461bcd60e51b815260206004820152601b60248201527f4e4f5f5550444154455f544f5f444946464552454e545f414444520000000000604482015260640161044a565b604080516001808252818301909252600091602080830190803683370190505090503381600081518110610be257610be2611bfc565b6001600160a01b0392909216602092830291909101909101526040805160018082528183019092526000918160200160208202803683370190505090508981600081518110610c3357610c33611bfc565b60200260200101906001600160a01b031690816001600160a01b031681525050610c6282828b8b8b8b8b610dfb565b9a9950505050505050505050565b6060838383604051602001610c8793929190611c12565b60405160208183030381529060405290509392505050565b600480546001600160a01b0319166001600160a01b0387161790556040516000907f3a8f8eb961383a94d41d193e16a3af73eaddfd5764a4c640257323a1603ac33190610ced9088906114fd565b60405180910390a160006001600160a01b03871615610d6b57866001600160a01b0316632db09c1c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d689190611bbc565b90505b600063f7c9362f60e01b82604051602401610d8691906114fd565b60408051601f19818403018152918152602080830180516001600160e01b03166001600160e01b03199095169490941790935260065460015482516060810184528a81529485018c90529184018a9052919350610992926001600160a01b0392831692919091169033908890600090876113b8565b60008651885114610e3d5760405162461bcd60e51b815260206004820152600c60248201526b0aea49e9c8ebe988a9c8ea8960a31b604482015260640161044a565b60005b885181101561116457878181518110610e5b57610e5b611bfc565b6020026020010151600360008b8481518110610e7957610e79611bfc565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550878181518110610ed757610ed7611bfc565b60200260200101516001600160a01b0316898281518110610efa57610efa611bfc565b60200260200101516001600160a01b03167f812ca95fe4492a9e2d1f2723c2c40c03a60a27b059581ae20ac4e4d73bfba35460405160405180910390a360006001600160a01b0316888281518110610f5457610f54611bfc565b60200260200101516001600160a01b031614158015610f9f575060016001600160a01b0316888281518110610f8b57610f8b611bfc565b60200260200101516001600160a01b031614155b156111525760006001600160a01b0316888281518110610fc157610fc1611bfc565b60200260200101516001600160a01b031663a7e28d488b8481518110610fe957610fe9611bfc565b60200260200101516040518263ffffffff1660e01b815260040161100d91906114fd565b602060405180830381865afa15801561102a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104e9190611bbc565b6001600160a01b0316036110a45760405162461bcd60e51b815260206004820152601c60248201527f544f4b454e5f4e4f545f48414e444c45445f42595f4741544557415900000000604482015260640161044a565b8781815181106110b6576110b6611bfc565b60200260200101516001600160a01b0316632db09c1c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111f9190611bbc565b88828151811061113157611131611bfc565b60200260200101906001600160a01b031690816001600160a01b0316815250505b8061115c81611c52565b915050610e40565b506000634201f98560e01b8989604051602401611182929190611cbd565b60408051601f19818403018152918152602080830180516001600160e01b03166001600160e01b03199095169490941790935260065460015482516060810184528a81529485018c90529184018a90529193506111f7926001600160a01b0392831692919091169087908790600090876113b8565b9998505050505050505050565b6060600061121189610921565b90506000611220338686610c70565b9050886001600160a01b0316336001600160a01b03168b6001600160a01b03167f85291dff2161a93c2f12c819d31889c96c63042116f5bc5a205aa701c2c429f58560405161126f91906114fd565b60405180910390a460405163d2ce7d6560e01b81526001600160a01b0383169063d2ce7d659034906112af908e908e908e908e908e908a90600401611ce2565b60006040518083038185885af11580156112cd573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f19168201604052610c629190810190611b14565b6001600160a01b0382166113425760405162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015260640161044a565b6001546001600160a01b03161561138a5760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015260640161044a565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b60006109928888888888886000015189602001518a604001518a6000610c628a8a8a8b8b8b8b8b8b8b6000806113f68c8c8c8c8c8c8c8c8c8c611453565b9050808b6001600160a01b03168a6001600160a01b03167fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b08660405161143c91906117af565b60405180910390a49b9a5050505050505050505050565b60008a6001600160a01b031663679b6ded888c89898e8e8b8b8b6040518a63ffffffff1660e01b8152600401611490989796959493929190611d1f565b60206040518083038185885af11580156114ae573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106ee9190611d6b565b6000602082840312156114e557600080fd5b81356001600160e01b03198116811461091a57600080fd5b6001600160a01b0391909116815260200190565b6001600160a01b03811681146107f157600080fd5b60006020828403121561153857600080fd5b813561091a81611511565b600080600080600060a0868803121561155b57600080fd5b853561156681611511565b9450602086013561157681611511565b9350604086013561158681611511565b9250606086013561159681611511565b915060808601356115a681611511565b809150509295509295909350565b600080600080600060a086880312156115cc57600080fd5b85356115d781611511565b945060208601359350604086013592506060860135915060808601356115a681611511565b60008083601f84011261160e57600080fd5b5081356001600160401b0381111561162557600080fd5b60208301915083602082850101111561163d57600080fd5b9250929050565b60008060008060008060a0878903121561165d57600080fd5b863561166881611511565b9550602087013561167881611511565b9450604087013561168881611511565b93506060870135925060808701356001600160401b038111156116aa57600080fd5b6116b689828a016115fc565b979a9699509497509295939492505050565b60008060008060008060008060e0898b0312156116e457600080fd5b88356116ef81611511565b975060208901356116ff81611511565b9650604089013561170f81611511565b9550606089013594506080890135935060a0890135925060c08901356001600160401b0381111561173f57600080fd5b61174b8b828c016115fc565b999c989b5096995094979396929594505050565b60005b8381101561177a578181015183820152602001611762565b50506000910152565b6000815180845261179b81602086016020860161175f565b601f01601f19169290920160200192915050565b60208152600061091a6020830184611783565b600080600080608085870312156117d857600080fd5b84356117e381611511565b966020860135965060408601359560600135945092505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561183b5761183b6117fd565b604052919050565b600082601f83011261185457600080fd5b813560206001600160401b0382111561186f5761186f6117fd565b8160051b61187e828201611813565b928352848101820192828101908785111561189857600080fd5b83870192505b8483101561087d5782356118b181611511565b8252918301919083019061189e565b600080600080600060a086880312156118d857600080fd5b85356001600160401b03808211156118ef57600080fd5b6118fb89838a01611843565b9650602088013591508082111561191157600080fd5b5061191e88828901611843565b959895975050505060408401359360608101359360809091013592509050565b60006001600160401b03821115611957576119576117fd565b50601f01601f191660200190565b600080600080600060a0868803121561197d57600080fd5b853561198881611511565b9450602086013561199881611511565b935060408601356119a881611511565b92506060860135915060808601356001600160401b038111156119ca57600080fd5b8601601f810188136119db57600080fd5b80356119ee6119e98261193e565b611813565b818152896020838501011115611a0357600080fd5b816020840160208301376000602083830101528093505050509295509295909350565b600080600080600080600060c0888a031215611a4157600080fd5b8735611a4c81611511565b96506020880135611a5c81611511565b955060408801359450606088013593506080880135925060a08801356001600160401b03811115611a8c57600080fd5b611a988a828b016115fc565b989b979a50959850939692959293505050565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b600060018060a01b03808a16835280891660208401528088166040840152508560608301528460808301528360a083015260e060c08301526111f760e0830184611783565b600060208284031215611b2657600080fd5b81516001600160401b03811115611b3c57600080fd5b8201601f81018413611b4d57600080fd5b8051611b5b6119e98261193e565b818152856020838501011115611b7057600080fd5b61073782602083016020860161175f565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a06080820181905260009061087d90830184611783565b600060208284031215611bce57600080fd5b815161091a81611511565b600060208284031215611beb57600080fd5b815160ff8116811461091a57600080fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03841681526040602082018190528101829052818360608301376000818301606090810191909152601f909201601f1916010192915050565b600060018201611c7257634e487b7160e01b600052601160045260246000fd5b5060010190565b600081518084526020808501945080840160005b83811015611cb25781516001600160a01b031687529582019590820190600101611c8d565b509495945050505050565b604081526000611cd06040830185611c79565b82810360208401526107378185611c79565b600060018060a01b03808916835280881660208401525085604083015284606083015283608083015260c060a083015261099260c0830184611783565b600061010060018060a01b03808c1684528a602085015289604085015280891660608501528088166080850152508560a08401528460c08401528060e08401526106ee81840185611783565b600060208284031215611d7d57600080fd5b505191905056fea264697066735822122052684c5a3ddc0d166e87af4a14c9e2e6e27dc9b65e6f4eea9a4c52056f08e2e264736f6c63430008110033'

export class L1GatewayRouter__factory extends ContractFactory {
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
  ): Promise<L1GatewayRouter> {
    return super.deploy(overrides || {}) as Promise<L1GatewayRouter>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayRouter {
    return super.attach(address) as L1GatewayRouter
  }
  connect(signer: Signer): L1GatewayRouter__factory {
    return super.connect(signer) as L1GatewayRouter__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1GatewayRouterInterface {
    return new utils.Interface(_abi) as L1GatewayRouterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayRouter {
    return new Contract(address, _abi, signerOrProvider) as L1GatewayRouter
  }
}