import {
  useAccount,
  useBalance,
  useReadContract,
  useDisconnect,
  type BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther, formatUnits } from "viem";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import "./App.css";

import { SendMessageToL1 } from "./SendMessageToL1";

function App() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  // 残高取得
  const balance = useBalance({
    address: address,
  });

  // NonceHolder コントラクトを読み取る
  const abi = [
    {
      type: "function",
      name: "getMinNonce",
      stateMutability: "view",
      inputs: [{ name: "_address", type: "address" }],
      outputs: [{ type: "uint256" }],
    },
  ];

  const nonce = useReadContract({
    abi,
    address: "0x0000000000000000000000000000000000008003",
    functionName: "getMinNonce",
    args: [address],
  });

  // 指定量の ETH を送る
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    sendTransaction({ to, value: parseEther(value) });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  // wallet に接続されていない場合
  if (isConnecting) return <div>Connecting…</div>;
  if (isDisconnected) return <button onClick={() => open()}>Connect to a wallet</button>;

  // wallet に接続されている場合
  return (
    <>
      <div>address: {address}</div>
      <div>balance: {balance.isFetched ? formatUnits(balance.data!.value, balance.data!.decimals) : "???"}</div>
      <div>rawNonce: {nonce.isFetched ? Number(nonce.data) : "???"}</div>
      <hr />
      <center>
        <form onSubmit={submit} className="form-example">
          <center>
            <div className="form-example">
              <label htmlFor="address">Wallet Address: </label>
              <input name="address" placeholder="0xA0Cf…251e" required />
            </div>
            <div className="form-example">
              <label htmlFor="value">Value(ETH): </label>
              <input name="value" placeholder="0.05" required />
            </div>
          </center>
          <div>
            <button disabled={isPending} type="submit">
              {isPending ? "Confirming..." : "Send ETH"}
            </button>
          </div>
          {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
          {error && (
            <div>
              Error: {(error as BaseError).shortMessage || error.message}
            </div>
          )}
        </form>
      </center>
      <hr />
      <SendMessageToL1 />
      <hr />
      <button onClick={() => disconnect()}>Disconnect</button>
    </>
  );
}

export default App;
