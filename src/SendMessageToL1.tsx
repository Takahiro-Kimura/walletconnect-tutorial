import * as ethers from "ethers";
import { Provider, utils, Wallet } from "zksync-ethers";

import {
  useWriteContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";

import { stringToHex } from "viem";

export const SendMessageToL1 = () => {

	const abi = [
		{
			type: "function",
			name: "sendToL1",
			stateMutability: "nonpayable",
			inputs: [{ name: "_message", type: "bytes" }],
			outputs: [{ type: "bytes32" }],
		},
	];

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = formData.get("message") as string;
    writeContract({
      abi,
      address: utils.L1_MESSENGER_ADDRESS as `0x${string}`,
      functionName: "sendToL1",
      args: [stringToHex(message)],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <center>
      <form onSubmit={submit} className="form-example">
        <center>
          <div className="form-example">
            <label htmlFor="message">Message: </label>
            <input
              name="message"
              placeholder="Some from L2 to L1 message"
              required
            />
          </div>
        </center>
        <div>
          <button disabled={isPending} type="submit">
            {isPending ? "Confirming..." : "Send a message to L1"}
          </button>
        </div>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </center>
  );
};
