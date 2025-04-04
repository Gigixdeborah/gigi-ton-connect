// pages/index.tsx
import dynamic from 'next/dynamic';
import { EthereumWalletConnect } from '../components/EthereumWalletConnect';
import { SolanaWalletConnect } from '../components/SolanaWalletConnect';

// Dynamically import TonConnectButton with SSR disabled
const TonConnectButton = dynamic(
  () => import('@tonconnect/ui-react').then(mod => mod.TonConnectButton),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Connect Your Wallet</h1>

      <div className="mb-4">
        <TonConnectButton />
      </div>

      <div className="mb-4">
        <EthereumWalletConnect />
      </div>

      <div className="mb-4">
        <SolanaWalletConnect />
      </div>

      <p className="text-sm text-gray-400 mt-6">Powered by GigiP2Bot</p>
    </div>
  );
}
