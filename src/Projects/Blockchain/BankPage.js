import { useState } from 'react'

import NavBar from './components/NavBar.js'
import ConnectBtn from './components/ConnectBtn.jsx'
import StatusBox from './components/StatusBox.jsx'
import BankInfo from './components/BankInfo.jsx'
import Footer from './components/Footer.jsx'
import { Outlet, BrowserRouter, Route,Routes, useLocation, useHistory, Link } from "react-router-dom";

const alchemyKey = "https://eth-sepolia.g.alchemy.com/v2/aaNh-nwrnFeGsDoWwOWYyMf1Rs5oxb7O"
const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(alchemyKey)

function BankPage() {
  const [status, setStatus] = useState('')
  const [connected, setConnected] = useState()
  const [wallet, setWallet] = useState()

  return (
      <>
      <main class="pt-8 bg-white dark:bg-gray-900">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <div class="mx-auto w-full max-w-2xl format format-sm sm:format-base">
        <Link to="/Project">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </Link>
        </div>
      </div>
      </main>
      <NavBar/>
      <div className="flex flex-col justify-center items-center">
      <ConnectBtn
        setStatus={setStatus}
        setConnected={setConnected}
        setWallet={setWallet}
      />
      <StatusBox status={status} />
      {connected && <BankInfo onAccoutChange={wallet} />}
      <Footer />
      </div>
      </>
  )
}

export default BankPage
