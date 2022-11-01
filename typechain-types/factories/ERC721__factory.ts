/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200254e3803806200254e83398181016040528101906200003791906200019f565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f90620002b9565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200024d565b62000224565b90508281526020810184848401111562000157576200015662000388565b5b6200016484828562000283565b509392505050565b600082601f83011262000184576200018362000383565b5b81516200019684826020860162000121565b91505092915050565b60008060408385031215620001b957620001b862000392565b5b600083015167ffffffffffffffff811115620001da57620001d96200038d565b5b620001e8858286016200016c565b925050602083015167ffffffffffffffff8111156200020c576200020b6200038d565b5b6200021a858286016200016c565b9150509250929050565b60006200023062000243565b90506200023e8282620002ef565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026b576200026a62000354565b5b620002768262000397565b9050602081019050919050565b60005b83811015620002a357808201518184015260208101905062000286565b83811115620002b3576000848401525b50505050565b60006002820490506001821680620002d257607f821691505b60208210811415620002e957620002e862000325565b5b50919050565b620002fa8262000397565b810181811067ffffffffffffffff821117156200031c576200031b62000354565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61219680620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e991906115fd565b6102bc565b6040516100fb919061191a565b60405180910390f35b61010c61039e565b6040516101199190611935565b60405180910390f35b61013c60048036038101906101379190611657565b610430565b60405161014991906118b3565b60405180910390f35b61016c600480360381019061016791906115bd565b610476565b005b610188600480360381019061018391906114a7565b61058e565b005b6101a4600480360381019061019f91906114a7565b6105ee565b005b6101c060048036038101906101bb9190611657565b61060e565b6040516101cd91906118b3565b60405180910390f35b6101f060048036038101906101eb919061143a565b6106c0565b6040516101fd9190611a77565b60405180910390f35b61020e610778565b60405161021b9190611935565b60405180910390f35b61023e6004803603810190610239919061157d565b61080a565b005b61025a600480360381019061025591906114fa565b610820565b005b61027660048036038101906102719190611657565b610882565b6040516102839190611935565b60405180910390f35b6102a660048036038101906102a19190611467565b6108ea565b6040516102b3919061191a565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061039757506103968261097e565b5b9050919050565b6060600080546103ad90611c9c565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611c9c565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109e8565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e990611a37565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610511610a33565b73ffffffffffffffffffffffffffffffffffffffff161480610540575061053f8161053a610a33565b6108ea565b5b61057f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610576906119f7565b60405180910390fd5b6105898383610a3b565b505050565b61059f610599610a33565b82610af4565b6105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d590611a57565b60405180910390fd5b6105e9838383610b89565b505050565b61060983838360405180602001604052806000815250610820565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ae90611a17565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610731576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610728906119d7565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461078790611c9c565b80601f01602080910402602001604051908101604052809291908181526020018280546107b390611c9c565b80156108005780601f106107d557610100808354040283529160200191610800565b820191906000526020600020905b8154815290600101906020018083116107e357829003601f168201915b5050505050905090565b61081c610815610a33565b8383610df0565b5050565b61083161082b610a33565b83610af4565b610870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086790611a57565b60405180910390fd5b61087c84848484610f5d565b50505050565b606061088d826109e8565b6000610897610fb9565b905060008151116108b757604051806020016040528060008152506108e2565b806108c184610fd0565b6040516020016108d292919061188f565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109f181611131565b610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2790611a17565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610aae8361060e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b008361060e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b425750610b4181856108ea565b5b80610b8057508373ffffffffffffffffffffffffffffffffffffffff16610b6884610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ba98261060e565b73ffffffffffffffffffffffffffffffffffffffff1614610bff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf690611977565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6690611997565b60405180910390fd5b610c7a83838361119d565b610c85600082610a3b565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cd59190611bb2565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d2c9190611b2b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610deb8383836111a2565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e56906119b7565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f50919061191a565b60405180910390a3505050565b610f68848484610b89565b610f74848484846111a7565b610fb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610faa90611957565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611018576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061112c565b600082905060005b6000821461104a57808061103390611cff565b915050600a826110439190611b81565b9150611020565b60008167ffffffffffffffff81111561106657611065611e35565b5b6040519080825280601f01601f1916602001820160405280156110985781602001600182028036833780820191505090505b5090505b60008514611125576001826110b19190611bb2565b9150600a856110c09190611d48565b60306110cc9190611b2b565b60f81b8183815181106110e2576110e1611e06565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561111e9190611b81565b945061109c565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006111c88473ffffffffffffffffffffffffffffffffffffffff1661133e565b15611331578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026111f1610a33565b8786866040518563ffffffff1660e01b815260040161121394939291906118ce565b602060405180830381600087803b15801561122d57600080fd5b505af192505050801561125e57506040513d601f19601f8201168201806040525081019061125b919061162a565b60015b6112e1573d806000811461128e576040519150601f19603f3d011682016040523d82523d6000602084013e611293565b606091505b506000815114156112d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d090611957565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611336565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061137461136f84611ab7565b611a92565b9050828152602081018484840111156113905761138f611e69565b5b61139b848285611c5a565b509392505050565b6000813590506113b281612104565b92915050565b6000813590506113c78161211b565b92915050565b6000813590506113dc81612132565b92915050565b6000815190506113f181612132565b92915050565b600082601f83011261140c5761140b611e64565b5b813561141c848260208601611361565b91505092915050565b60008135905061143481612149565b92915050565b6000602082840312156114505761144f611e73565b5b600061145e848285016113a3565b91505092915050565b6000806040838503121561147e5761147d611e73565b5b600061148c858286016113a3565b925050602061149d858286016113a3565b9150509250929050565b6000806000606084860312156114c0576114bf611e73565b5b60006114ce868287016113a3565b93505060206114df868287016113a3565b92505060406114f086828701611425565b9150509250925092565b6000806000806080858703121561151457611513611e73565b5b6000611522878288016113a3565b9450506020611533878288016113a3565b935050604061154487828801611425565b925050606085013567ffffffffffffffff81111561156557611564611e6e565b5b611571878288016113f7565b91505092959194509250565b6000806040838503121561159457611593611e73565b5b60006115a2858286016113a3565b92505060206115b3858286016113b8565b9150509250929050565b600080604083850312156115d4576115d3611e73565b5b60006115e2858286016113a3565b92505060206115f385828601611425565b9150509250929050565b60006020828403121561161357611612611e73565b5b6000611621848285016113cd565b91505092915050565b6000602082840312156116405761163f611e73565b5b600061164e848285016113e2565b91505092915050565b60006020828403121561166d5761166c611e73565b5b600061167b84828501611425565b91505092915050565b61168d81611be6565b82525050565b61169c81611bf8565b82525050565b60006116ad82611ae8565b6116b78185611afe565b93506116c7818560208601611c69565b6116d081611e78565b840191505092915050565b60006116e682611af3565b6116f08185611b0f565b9350611700818560208601611c69565b61170981611e78565b840191505092915050565b600061171f82611af3565b6117298185611b20565b9350611739818560208601611c69565b80840191505092915050565b6000611752603283611b0f565b915061175d82611e89565b604082019050919050565b6000611775602583611b0f565b915061178082611ed8565b604082019050919050565b6000611798602483611b0f565b91506117a382611f27565b604082019050919050565b60006117bb601983611b0f565b91506117c682611f76565b602082019050919050565b60006117de602983611b0f565b91506117e982611f9f565b604082019050919050565b6000611801603e83611b0f565b915061180c82611fee565b604082019050919050565b6000611824601883611b0f565b915061182f8261203d565b602082019050919050565b6000611847602183611b0f565b915061185282612066565b604082019050919050565b600061186a602e83611b0f565b9150611875826120b5565b604082019050919050565b61188981611c50565b82525050565b600061189b8285611714565b91506118a78284611714565b91508190509392505050565b60006020820190506118c86000830184611684565b92915050565b60006080820190506118e36000830187611684565b6118f06020830186611684565b6118fd6040830185611880565b818103606083015261190f81846116a2565b905095945050505050565b600060208201905061192f6000830184611693565b92915050565b6000602082019050818103600083015261194f81846116db565b905092915050565b6000602082019050818103600083015261197081611745565b9050919050565b6000602082019050818103600083015261199081611768565b9050919050565b600060208201905081810360008301526119b08161178b565b9050919050565b600060208201905081810360008301526119d0816117ae565b9050919050565b600060208201905081810360008301526119f0816117d1565b9050919050565b60006020820190508181036000830152611a10816117f4565b9050919050565b60006020820190508181036000830152611a3081611817565b9050919050565b60006020820190508181036000830152611a508161183a565b9050919050565b60006020820190508181036000830152611a708161185d565b9050919050565b6000602082019050611a8c6000830184611880565b92915050565b6000611a9c611aad565b9050611aa88282611cce565b919050565b6000604051905090565b600067ffffffffffffffff821115611ad257611ad1611e35565b5b611adb82611e78565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611b3682611c50565b9150611b4183611c50565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611b7657611b75611d79565b5b828201905092915050565b6000611b8c82611c50565b9150611b9783611c50565b925082611ba757611ba6611da8565b5b828204905092915050565b6000611bbd82611c50565b9150611bc883611c50565b925082821015611bdb57611bda611d79565b5b828203905092915050565b6000611bf182611c30565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611c87578082015181840152602081019050611c6c565b83811115611c96576000848401525b50505050565b60006002820490506001821680611cb457607f821691505b60208210811415611cc857611cc7611dd7565b5b50919050565b611cd782611e78565b810181811067ffffffffffffffff82111715611cf657611cf5611e35565b5b80604052505050565b6000611d0a82611c50565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611d3d57611d3c611d79565b5b600182019050919050565b6000611d5382611c50565b9150611d5e83611c50565b925082611d6e57611d6d611da8565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b61210d81611be6565b811461211857600080fd5b50565b61212481611bf8565b811461212f57600080fd5b50565b61213b81611c04565b811461214657600080fd5b50565b61215281611c50565b811461215d57600080fd5b5056fea264697066735822122063c919f24499fc5ce3bd20fc111b49aae6b610fe7a2ea011c5d7e2cf78fa736a64736f6c63430008070033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
