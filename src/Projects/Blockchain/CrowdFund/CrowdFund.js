import { useState, useEffect } from 'react'
import Donate from "./components/Donating-Crypto.png"
import 'flowbite';
import { Carousel } from 'flowbite';
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

function CrowdFund() {
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
    <div className="flex flex-col justify-center items-center pt-20 pb-10">
      <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
      <a class="absolute px-4 text-xl text-white items-center">
          <p class="font-poppins items-center text-2xl px-10">Have an Idea?</p>
          <div className="pt-10">
              <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-white-700 rounded-full group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-gray-800 dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
              <span class="font-poppins relative px-8 py-2 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Start CrowdFunding
              </span>
              </a>
          </div>
      </a>
    </div>
    <div className="pt-10">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold font-poppins">Featured Projects</h1>
        </div>
      </header>

      {campaigns.map((campaigns) => {
        return (

          <main className="py-8">
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
                      <Link to={{ pathname: "Donate", state: campaigns.Title}}>Donate Now</Link>
                  </span>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </main>

        );
      })}

      <footer className="py-4 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Crowdfunding Campaign. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default CrowdFund