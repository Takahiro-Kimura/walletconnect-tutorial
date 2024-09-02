import { useEffect, useState } from "react";
import { Provider } from "zksync-ethers";
import { useAccount } from "wagmi";
import { stringToHex } from "viem";
import { readContract, http, createConfig } from "@wagmi/core";
import { sepolia } from "wagmi/chains";

const l2Provider = new Provider("https://sepolia.era.zksync.dev");

async function getTransactionDetails(hash: string) {
  console.log(`Getting L2 tx details for transaction ${hash}`);
  const l2Receipt = await l2Provider.getTransactionReceipt(hash);
  console.log(`Receipt is: `, l2Receipt);
  return l2Receipt;
}

async function getL2LogProof(hash: string, index: number) {
  console.log(
    `Getting L2 message proof for transaction ${hash} and index ${index}`
  );
  const proof = await l2Provider.getLogProof(hash, index);
  console.log(`Proof is: `, proof);
  return proof;
}

const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

export const abi = [
  {
    type: "function",
    name: "proveL2MessageInclusion",
    stateMutability: "view",
    inputs: [
      {
        internalType: "uint256",
        name: "_batchNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "txNumberInBatch",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct L2Message",
        name: "_message",
        type: "tuple",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
  },
] as const;

export const VerifyMessage = () => {
  const { address } = useAccount();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    console.log(error);
  }, [error]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const txHash = formData.get("txHash") as string;
    const message = formData.get("message") as string;
    let l2Receipt;
    try {
      l2Receipt = await getTransactionDetails(txHash);
    } catch (e) {
      setError(e.message);
      return;
    }
    if (!l2Receipt) {
      setError(`No L2 transaction found for hash ${txHash}`);
      return;
    }

    let l2Proof;
    try {
      l2Proof = await getL2LogProof(txHash, l2Receipt.index);
    } catch (e) {
      setError(e.message);
      return;
    }
    if (!l2Proof) {
      setError(`No L2 proof found for hash ${txHash}`);
      return;
    }

    const zkAddress = await l2Provider.getMainContractAddress();
    const resultVerification = await readContract(config, {
      abi,
      address: zkAddress as `0x${string}`,
      functionName: "proveL2MessageInclusion",
      args: [
        l2Receipt.l1BatchNumber,
        l2Proof.id,
        {
          txNumberInBatch: l2Receipt.l1BatchTxIndex,
          sender: address,
          data: stringToHex(message),
        },
        l2Proof.proof,
      ],
      chainId: sepolia.id,
    });
    alert(`the result of the verification:  ${resultVerification}`);
    console.log(`Verification result: ${resultVerification}`);
  }

  return (
    <center>
      <form onSubmit={submit} className="form-example">
        <center>
          <div className="form-example">
            <label htmlFor="message">Tx Hash of the message: </label>
            <input name="txHash" placeholder="0x..." required />
          </div>
          <div className="form-example">
            <label htmlFor="message">Sent message: </label>
            <input
              name="message"
              placeholder="Some from L2 to L1 message"
              required
            />
          </div>
        </center>
        <div>
          <button type="submit">Verify the message</button>
        </div>
        {error && <div>Error: {error}</div>}
      </form>
    </center>
  );
};
