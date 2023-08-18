import { useState, useEffect } from 'react'
import { getBalance, getSavingsBalance, depositEth, withdrawEth, transferEth, InterestdepositEth } from '../utils/bankFunctions'
import { Outlet, BrowserRouter, Route,Routes, useLocation, useHistory, Link } from "react-router-dom";


export var totalamt;

const Savings = ({ onAccoutChange }) => {

  const [balanceSGD, setBalanceSGD] = useState(0)
  const [balanceETH, setBalanceETH] = useState(0)
  const [showDeposit, setShowDeposit] = useState(false)
  const [showWithdraw, setShowWithdraw] = useState(false)
  const [exhRate, setExhRate] = useState(0)
  const [inputSGD, setInputSGD] = useState(null)
  const [inputETH, setInputETH] = useState(null)
  const [response, setResponse] = useState(null)

  const handleShowDeposit = () => {
    setShowDeposit(true)
  }

  const handleShowWithdraw = () => {
    setShowWithdraw(true)
  }

  const handleClose = () => {
    setShowDeposit(false)
    setShowWithdraw(false)
    setInputSGD(null)
    setInputETH(null)
    setResponse(null)
  }

  const checkBalance = async () => {
    const SavingsBal = await getBalance()
    setBalanceETH(0)
    setBalanceSGD(0)
    setExhRate(SavingsBal.exhRate)
  }

  const handleInoutSGD = (e) => {
    setInputSGD(e.target.value)
    setInputETH((e.target.value / exhRate).toFixed(18))
  }

  const handleDeposit = async () => {
    setResponse(null)
    const deposit = await InterestdepositEth(inputETH.toString())
    console.log(inputETH.toString());
    setInputETH(null)
    setInputSGD(null)
    setResponse(deposit.status)
  }

  const handleWithdraw = async () => {
    if (inputSGD > balanceSGD) {
      setResponse('Insufficient Balance')
    } else {
      setResponse(null)
      const withdraw = await withdrawEth(inputETH.toString())
      setInputETH(null)
      setInputSGD(null)
      setResponse(withdraw.status)
    }
  }

  const refresh = async () => {
    setTimeout(function(){
       window.location.reload();
    }, 2000);
  }

  useEffect(() => {
    setTimeout(function(){
      setResponse(null);
    }, 4000);
  }, [response])

  useEffect(() => {
    checkBalance()
  }, [onAccoutChange])


    return (
    <>
            {response && (
            <container class="fixed bottom-2 left-0 right-0 z-50">
                <div className="justify-content-center pt-5 pb-2 z-40 ">
                <div className="flex flex-col items-center">
                <div role="status">
                <div class="floating p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 " role="alert">
                      <span class="font-medium">
                      Info alert! {response} 
                        <button onClick={refresh}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </button>
                      </span>
                    </div>
                </div>
                </div>
                </div>
              </container>
            )}
      <div className="balance-card bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 flex flex-col items-center pb-10 hover:shadow-xl hover:shadow-purple-200/50 ">
      <h1 className="block text-yellow-700 text-xl font-bold mb-2 font-poppins">
          Savings Account
        </h1>
        <h1 className="block text-gray-700 text-l font-bold mb-2 mt-2 font-poppins">
          Account Balance
        </h1>
        <h3 className="block text-yellow-400 text-l font-bold mb-2 font-poppins">
          ~ 3% APY
        </h3>
        <h3 className="balance-sgd block text-xl text-gray-700 font-bold mb-2 font-poppins">$ {parseFloat(balanceSGD).toFixed(2)} SGD</h3>
        <h3 className="balance-eth block text-xl text-green-700 font-bold mb-2 pb-2 font-poppins">{parseFloat(balanceETH).toFixed(4)} ETH</h3>
        {!showDeposit && !showWithdraw && (
        <>
        <div className="btn-grp flex items-center justify-between">
        <div class="flex mt-4 space-x-3 md:mt-6">
            <button
              className="deposit-btn inline-block bg-gray-800 text-white rounded-full px-3 py-2 hover:bg-gray-700 transition-colors duration-300 font-poppins"
              variant="success"
              onClick={handleShowDeposit}
            >
              Deposit
            </button>
            <button
              className="withdraw-btn inline-block bg-gray-400 text-white rounded-full px-3 py-2 hover:bg-gray-700 transition-colors duration-300 font-poppins"
              variant="warning"
              onClick={handleShowWithdraw}
            >
              Withdraw
            </button>
            </div>
          </div>

        </>
        )}
        {showDeposit || showWithdraw ? (
          <>
            <container>
              <div className="justify-content-center pt-5">
                    <input
                      className="shadow appearance-none border border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Amount in SGD"
                      type="number"
                      value={inputSGD > 0 ? inputSGD : ''}
                      onChange={handleInoutSGD}
                    />
              </div>
                  
              <div className="justify-content-center pt-8">
                    <input
                      className="shadow appearance-none border border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="ETH Equivalent"
                      type="number"
                      value={inputETH > 0 ? inputETH : ''}
                      readOnly
                    />
              </div>
            </container>
            <div className="flex items-center justify-between btn-grp inline-block align-baseline">
            <div className="flex mt-4 space-x-3 md:mt-6">
            <button
                className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300 font-poppins"
                variant="success"
                onClick={showDeposit ? handleDeposit : handleWithdraw}
              >
                {showDeposit ? 'Deposit' : 'Withdraw'}
              </button>
              <button
                className="withdraw-btn bg-gray-400 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300 inline-block align-baseline font-poppins"
                variant="info"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}

const Transfer = ({ onAccoutChange }) => {
      const [balanceSGD, setBalanceSGD] = useState(0)
      const [balanceETH, setBalanceETH] = useState(0)
      const [showDeposit, setShowDeposit] = useState(false)
      const [showWithdraw, setShowWithdraw] = useState(false)
      const [exhRate, setExhRate] = useState(0)
      const [inputADD, setInputADD] = useState(null)
      const [inputSGD, setInputSGD] = useState(null)
      const [inputETH, setInputETH] = useState(null)
      const [response, setResponse] = useState(null)

      const checkBalance = async () => {
        const balance = await getBalance()
        setBalanceETH(balance.eth)
        setBalanceSGD(balance.SGD)
        setExhRate(balance.exhRate)
      }

      const handleADDinput = (e) => {
        setInputADD(e.target.value)
      }

      const handleInoutSGD = (e) => {
        setInputSGD(e.target.value)
        setInputETH((e.target.value / exhRate).toFixed(18))
      }

      const handleTransfer = async () => {
        if (inputSGD > balanceSGD) {
          setResponse('Insufficient Balance')
          console.log("Insufficient Balance")
        } else {
          setResponse(null)
          console.log(inputADD)
          console.log(inputETH.toString())
          const transfer = await transferEth(inputADD,inputETH.toString())
          setInputETH(null)
          setInputSGD(null)
          setInputADD(null)
          setResponse(transfer.status)
        }
      }

      useEffect(() => {
        checkBalance()
      }, [onAccoutChange])

      useEffect(() => {
        setTimeout(function(){
           setResponse(null);
        }, 3000);
      }, [response])

    return (
        <>
        {response && (
            <container class="fixed bottom-2 left-0 right-0 z-50">
                <div className="justify-content-center pt-5 pb-2 z-40 ">
                <div className="flex flex-col items-center">
                <div role="status">
                <div class="floating p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 " role="alert">
                      <span class="font-medium">
                      Info alert! {response}
                      </span>
                    </div>
                </div>
                </div>
                </div>
                </container>
        )}
      <div className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 flex flex-col items-center hover:shadow-xl hover:shadow-green-200/50">
        <h1 className="block text-gray-700 text-xl font-bold mb-2 font-poppins">
          Transfer
        </h1>
            <container>
              <div className="justify-content-center pt-8">
                    <input
                      className="shadow appearance-none border border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Amount in SGD"
                      type="number"
                      value={inputSGD > 0 ? inputSGD : ''}
                      onChange={handleInoutSGD}
                    />
                  <div className="justify-content-center pt-8">
                        <input
                          className="shadow appearance-none border border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="ETH Equivalent"
                          type="number"
                          value={inputETH > 0 ? inputETH : ''}
                          readOnly
                        />
                  </div>
              </div>
              <div className="justify-content-center pt-8">
                    <input
                      className="shadow appearance-none border border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Recipient Address"
                      onChange={handleADDinput}
                    />
              </div>
            </container>
            <div className="flex items-center justify-between btn-grp inline-block align-baseline">
            <div className="flex mt-4 space-x-3 md:mt-6">
            <button
                className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300 font-poppins"
                variant="success"
                onClick={handleTransfer}
              >
              Transfer
              </button>
            </div>
            </div>
      </div>
    </>
    )
}
const Bank = ({ onAccoutChange }) => {
  const [balanceSGD, setBalanceSGD] = useState(0)
  const [balanceETH, setBalanceETH] = useState(0)
  const [showDeposit, setShowDeposit] = useState(false)
  const [showWithdraw, setShowWithdraw] = useState(false)
  const [exhRate, setExhRate] = useState(0)
  const [inputSGD, setInputSGD] = useState(null)
  const [inputETH, setInputETH] = useState(null)
  const [response, setResponse] = useState(null)

  const handleShowDeposit = () => {
    setShowDeposit(true)
  }

  const handleShowWithdraw = () => {
    setShowWithdraw(true)
  }

  const handleClose = () => {
    setShowDeposit(false)
    setShowWithdraw(false)
    setInputSGD(null)
    setInputETH(null)
    setResponse(null)
  }

  const checkBalance = async () => {
    const balance = await getBalance()
    setBalanceETH(balance.eth)
    setBalanceSGD(balance.SGD)
    setExhRate(balance.exhRate)
  }

  const handleInoutSGD = (e) => {
    setInputSGD(e.target.value)
    setInputETH((e.target.value / exhRate).toFixed(18))
  }

  const handleDeposit = async () => {
    setResponse(null)
    const deposit = await depositEth(inputETH.toString())
    setInputETH(null)
    setInputSGD(null)
    setResponse(deposit.status)
  }

  const handleWithdraw = async () => {
    if (inputSGD > balanceSGD) {
      setResponse('Insufficient Balance')
    } else {
      setResponse(null)
      const withdraw = await withdrawEth(inputETH.toString())
      setInputETH(null)
      setInputSGD(null)
      setResponse(withdraw.status)
    }
  }

  const refresh = async () => {
    setTimeout(function(){
       window.location.reload();
    }, 2000);
  }

  useEffect(() => {
    setTimeout(function(){
      setResponse(null);
    }, 4000);
  }, [response])

  useEffect(() => {
    checkBalance()
  }, [onAccoutChange])
  
  return (
    <>
            {response && (
            <container class="fixed bottom-2 left-0 right-0 z-50">
                <div className="justify-content-center pt-5 pb-2 z-40 ">
                <div className="flex flex-col items-center">
                <div role="status">
                <div class="floating p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 " role="alert">
                      <span class="font-medium">
                      Info alert! {response} 
                        <button onClick={refresh}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </button>
                      </span>
                    </div>
                </div>
                </div>
                </div>
              </container>
            )}
      <div className="balance-card bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 flex flex-col items-center pb-10 hover:shadow-xl hover:shadow-purple-200/50 ">
      <h1 className="block text-yellow-700 text-xl font-bold mb-2 font-poppins">
          Current Account
        </h1>
        <h1 className="block text-gray-700 text-l font-bold mb-2 mt-5 font-poppins">
          Account Balance
        </h1>
        <h3 className="balance-sgd block text-xl text-gray-700 font-bold mb-2 font-poppins">$ {parseFloat(balanceSGD).toFixed(2)} SGD</h3>
        <h3 className="balance-eth block text-xl text-green-700 font-bold mb-2 pb-5 font-poppins">{parseFloat(balanceETH).toFixed(4)} ETH</h3>
        {!showDeposit && !showWithdraw && (
        <>
        <div className="btn-grp flex items-center justify-between">
        <div class="flex mt-4 space-x-3 md:mt-6">
            <button
              className="deposit-btn inline-block bg-gray-800 text-white rounded-full px-3 py-2 hover:bg-gray-700 transition-colors duration-300 font-poppins"
              variant="success"
              onClick={handleShowDeposit}
            >
              Deposit
            </button>
            <button
              className="withdraw-btn inline-block bg-gray-400 text-white rounded-full px-3 py-2 hover:bg-gray-700 transition-colors duration-300 font-poppins"
              variant="warning"
              onClick={handleShowWithdraw}
            >
              Withdraw
            </button>
            </div>
          </div>

        </>
        )}
        {showDeposit || showWithdraw ? (
          <>
            <container>
              <div className="justify-content-center pt-8">
                    <input
                      className="shadow appearance-none border border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Amount in SGD"
                      type="number"
                      value={inputSGD > 0 ? inputSGD : ''}
                      onChange={handleInoutSGD}
                    />
              </div>
                  
              <div className="justify-content-center pt-8">
                    <input
                      className="shadow appearance-none border border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="ETH Equivalent"
                      type="number"
                      value={inputETH > 0 ? inputETH : ''}
                      readOnly
                    />
              </div>
            </container>
            <div className="flex items-center justify-between btn-grp inline-block align-baseline">
            <div className="flex mt-4 space-x-3 md:mt-6">
            <button
                className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300 font-poppins"
                variant="success"
                onClick={showDeposit ? handleDeposit : handleWithdraw}
              >
                {showDeposit ? 'Deposit' : 'Withdraw'}
              </button>
              <button
                className="withdraw-btn bg-gray-400 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300 inline-block align-baseline font-poppins"
                variant="info"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}


const BankInfo = () => {
    return (
        <>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Bank />
        <Savings />
        <Transfer />
        </div>
        </>
    )
}

export default BankInfo
