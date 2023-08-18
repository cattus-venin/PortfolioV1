import { useState, useEffect } from 'react'
import 'flowbite';
import { Outlet, BrowserRouter, Route,Routes, useLocation, useHistory, Link } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Donate() {
  const [status, setStatus] = useState('')
  const [connected, setConnected] = useState()
  const [wallet, setWallet] = useState()
  
  const firebaseConfig = {
      apiKey: "AIzaSyAfhe1tJu-zorzwW5vPFU1Hnh3XfK7dqfU",
      authDomain: "crowdfunding-6f827.firebaseapp.com",
      projectId: "crowdfunding-6f827",
      storageBucket: "crowdfunding-6f827.appspot.com",
      messagingSenderId: "502873999049",
      appId: "1:502873999049:web:0b8b44a4bf3746b773ef18",
      measurementId: "G-JB07488FT0"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [campaigns, setCampaigns] = useState([]);
  const campaignsCollectionRef = collection(db, "Campaigns");

  useEffect(() => {
    const getCampaigns = async () => {
      const data = await getDocs(campaignsCollectionRef);
      setCampaigns(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCampaigns();
  }, []);
  return (
      <>
      {campaigns.map((campaigns) => {
        return (
      <>
          <main className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4">
                  <img
                    className="w-full h-auto rounded-lg"
                    src={campaigns.Image}
                    alt="Campaign Image"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
                  <h2 className="text-2xl font-bold mb-4 font-poppins">{campaigns.Title}</h2>
                  <p className="text-gray-600 mb-4 font-poppins break-words">
                     {campaigns.Description}
                  </p>
                  <div class="flex justify-between mb-4 font-poppins pt-2">
                    <span class="font-bold font-poppins pt-1"><span className="text-2xl text-green-500"> 0.5 eth </span> Pledged of {campaigns.Goal} eth goal</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200 ">
                    <div class="font-poppins font-medium text-sm text-white bg-gradient-to-r to-emerald-300 from-purple-400 h-2.5 rounded-full text-center p-0.5 leading-none" style={{width: '50%'}}></div>
                  </div>
                  <p className="text-xl text-gray-500 pt-2 font-poppins">
                  <a className="text-3xl">{campaigns.Backers}</a>  backers
                  </p>
                  <p className="text-xl text-gray-500 font-poppins">
                  <a className="text-3xl">19 </a> days to go
                  </p>
                  <div className="pt-4">
                  <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-l font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
                  <span class="font-poppins relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   Back this Project
                  </span>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </main>

          <div className="py-20 max-w-6xl mx-auto p-4 md:p-8">
            <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-4 font-poppins pb-5 text-gray-500">Story</h2>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4">
                  <h2 className="text-xl font-bold mb-4 font-poppins">Defi will change how we do banking</h2>
                  <p className="text-gray-600 mb-4 font-poppins break-words font-poppins">
                    DeFi aims to make financial services faster, more reliable, and more accessible. When smart contracts are used to facilitate financial contracts, both human error and manual validation are eliminated from the processing and validation functions. These factors can make DeFi quicker and more reliable than traditional financial services methods, but these are not the only advantages to these types of transactions.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 px-20 lg:mt-0">
                <div class="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-col items-center pb-4">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e7e14833122279.56a08b263abe7.gif" alt=""/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Venin.Co</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Blockchain Asset Management Protocol</span>
                        <span class="text-sm text-gray-300 dark:text-gray-200">Ethereum . Optimism . BSC . Arbitrum</span>
                    </div>
                </div>

                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <h2 className="text-xl font-bold mb-4 font-poppins">Banking in the Metaverse</h2>
                  <p className="text-gray-600 mb-4 font-poppins break-words font-poppins">
                    Banks in the Metaverse will be able to offer services available in the real world which include withdrawals from ATMs, depositing money, and interacting with representatives for help and advice. Customers will be able to view their accounts in 3D, as if they were a compact report, and transfer their data back and forth.                    </p>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <h2 className="text-xl font-bold mb-4 font-poppins">Virtual lobbies</h2>
                  <p className="text-gray-600 mb-4 font-poppins break-words font-poppins">
                  One of the most obvious uses of the metaverse, as far as retail banks are concerned, is to create virtual branches where they can sell banking products to a new breed of digitally-native gen-z consumers, or provide customer service to their existing customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </>
        );
      })}
    </>
  );
};


export default Donate