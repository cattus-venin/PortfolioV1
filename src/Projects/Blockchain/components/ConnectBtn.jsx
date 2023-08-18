import { useState, useEffect } from 'react'

import { connectWallet, getWalletStatus } from '../utils/walletFunctions'
import { getBalance} from '../utils/bankFunctions'

export const ConnectBtn = ({ setStatus, setConnected, setWallet }) => {
  const [walletAddress, setWalletAddress] = useState('')
  const [balanceSGD, setBalanceSGD] = useState(0)

  const handleConnect = async () => {
    const walletResponse = await connectWallet()
    setStatus(walletResponse.status)
    setConnected(walletResponse.connected)
    setWalletAddress(walletResponse.address)
    setWallet(walletResponse.address)
  }

  useEffect(() => {
    const checkWalletStatus = async () => {
      const walletResponse = await getWalletStatus()
      setStatus(walletResponse.status)
      setConnected(walletResponse.connected)
      setWalletAddress(walletResponse.address)
      setWallet(walletResponse.address)
    }

    const walletListener = () => {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
          checkWalletStatus()
        })
      }
    }

  const checkBalance = async () => {
    const balance = await getBalance()
    setBalanceSGD(balance.SGD)
  }

    checkWalletStatus()
    walletListener()
    checkBalance()
  }, [setConnected, setStatus, setWallet])

  return (
    <>
    <div className="connect-btn">
      <button className="text-gray-500 border hover:text-white hover:bg-green-300 px-2 py-2 rounded-md text-xl font-medium font-poppins hover:bg-gradient-to-r to-emerald-300 from-purple-400"
      variant="primary" onClick={handleConnect}>
        {walletAddress.length === 0
          ? 'Connect Wallet'
          : 'Account: ' +
            String(walletAddress).substring(0, 6) +
            '...' +
            String(walletAddress).substring(38)}
      </button >
      <div className="flex flex-col justify-center items-center">
        <h1 className="block pt-5 text-gray-600 text-xl font-bold font-poppins">
          Total Account Balance
        </h1>
        <h1 className="block text-gray-500 text-2xl font-bold font-poppins pt-2">
          ~ $ {parseFloat(balanceSGD).toFixed(2)}
        </h1>
        </div>
    </div>
    </>
  )
}

export default ConnectBtn
