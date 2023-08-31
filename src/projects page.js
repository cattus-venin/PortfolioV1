import { motion,AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from 'react';
/*
import LandingGIF from "./Assets/Portfolio Landing New Gif.gif"
import HASUSS from "./Assets/House_Affordability.png"
import Tripify from "./Assets/Tripify.png"
import WalletProof from "./Assets/WalletProof Logo.png"
import DefiBank from "./Assets/Defi Bank.png"
import CF from "./Assets/Crowdfunding SS.png"
import PBMi from "./Assets/PBM.png"
*/
import { MotionAnimate } from 'react-motion-animate'
import { Outlet, BrowserRouter, Route,Routes, useLocation, useHistory, Link } from "react-router-dom";
import 'flowbite';

function Project() {
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 class="text-2xl font-extrabold text-gray-800 dark:text-gray-400 md:text-4xl body-font font-poppins mt-20">My Projects</h1>
      <div className="max-w-7xl mx-auto p-4 md:p-8 mt-20">
      <h1 class="text-2xl font-extrabold dark:text-white font-poppins">Data Analytics<small class="ml-2 font-poppins text-gray-400"> Tableau | Python</small></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                src="https://ipfs.io/ipfs/QmUdntZvrP86WMVvaQcekT8FviKcpL3PLU4TV4gHNmfZMp?filename=House_Affordability.png"
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Housing Affordability for Single Graduates in Singapore
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
                As part of the SUSS Analytics and Visualisation Challenge 2022. I designed a poster
                to better understand Singapore's Housing Affordability and managed to get third placing for this challenge as a solo participant.
            </p>
            <Link to="/Project/SUSS">
            <a
              href="#"
              className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
            >
              View project
            </a>
            </Link>
          </motion.div>
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative h-48 md:h-64">
            <iframe width="80%" height="80%" src="https://lottie.host/?file=03de394a-e1a3-422c-9a2e-85532716f657/RuIRxBxdpW.json"></iframe>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
            This project is still in development..
            </h2>
            <p className="text-gray-700 mb-4 pb-10">
              This project is still in the works :) Do check out my other projects!
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
            >
              View project
            </a>
          </motion.div>
          </div>
          </div>
          <motion.div
            className="rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
         </motion.div>
      
      <div className="max-w-7xl mx-auto p-4 md:p-8 mt-20">
      <h1 class="text-2xl font-extrabold dark:text-white font-poppins">Blockchain<small class="ml-2 font-poppins text-gray-400"> Solidity | Javascript </small></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                src="https://ipfs.io/ipfs/QmeoV4b1Fnt61b1w9TwAmc4YZG8eYMCx1kS7iWvDJH3Viq?filename=Defi%20Bank.png"
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-5 mb-5 font-poppins">
              Defi Bank
            </h2>
            <p className="text-gray-700 mb-4 text-sm font-poppins">
              A Defi Bank vault concept built on the Goerli Testnet. A Blockchain Vault helps in aggregating funds without the need of
              a centralised authority/intermediaries, reducing transaction costs and optimizes returns.
            </p>
            <Link to="/Project/Bank" >
            <a
              href="#"
              className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
              >
              View project
            </a>
            </Link>
          </motion.div>
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                src="https://ipfs.io/ipfs/QmdxDfR3St8K6mzYhgDFUKqtMUNouchhwYwvVhUYhkkJYY?filename=Crowdfunding%20SS.png"
                alt="Project 2"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Crypto CrowdFunding
            </h2>
            <p className="text-gray-700 mb-4 text-sm font-poppins">
              A tokenised Crowd Funding web app built on the Sepolia testnet. Accepting funding on the blockchain can allow an organization to minimize reliance on intermediaries, reducing costs of receiving and deploying donated funds.
            </p>
            <Link to="/Project/CrowdFund" >
            <a
              href="#"
              className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
            >
              View project
            </a>
            </Link>
          </motion.div>
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                src="https://ipfs.io/ipfs/QmV193ipQhkNpGgE8psB2uFJjE2s63gXL8tKGvNjyLuDjd?filename=PBM.png"
                alt="Project 3"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              PBM case study
            </h2>
           <p className="text-gray-700 mb-4 text-sm font-poppins">
              After reading an article about the applications of a purpose-bound-money(PBM), developed by MAS. It got me intrigued to explore its use cases and understand its
              technicalities. Thus, i developed my own version of PBM that utilizes a vault disbursement method..
            </p>
            <Link to="/Project/PBM" >
            <a
            href="#"
            className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
            >
             View project
            </a>
            </Link>
          </motion.div>
          </div>
          </div>
          <motion.div
            className="rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
         </motion.div>

      <div className="max-w-7xl mx-auto p-4 md:p-8 mt-20">
      <h1 class="text-2xl font-extrabold dark:text-white font-poppins">Mobile Development<small class="ml-2 font-poppins text-gray-400"> Flutter | Java </small></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                src="https://ipfs.io/ipfs/QmXqMJx8x6Av3WowqUKCBpoT9W3y5PPPrCszD4KHCu4xV8?filename=Tripify.png"
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Tripify
            </h2>
            <p className="text-gray-700 mb-4 font-poppins text-sm">
            A planner app that will help make planning for trips stress free and organised.
            With the many features such as sharing trip plans, you can get everyone who is a part of trip involved and up to date with all the plans.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=sg.edu.np.mad.assignment"
              target="_blank"
              className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
            >
              View project
            </a>
          </motion.div>
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                src="https://ipfs.io/ipfs/QmfUVfNHr6PHmcPZo7zBM3xtAF2rr63PxHj1aBssA59Jik?filename=WalletProof%20Logo.png"
                alt="Project 1"
                className="rounded-lg"
                layout="fill"
                style={{ width: "80%", height: "100%" }}
                objectFit="contain"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              WalletProof
            </h2>
            <p className="text-gray-700 mb-4 font-poppins text-sm">
            WalletProof is a web3 air-gapped token-gate solution to the traditional ticketing process.
            Token-gating is a verification method whereby organisers can provide access to people with
            specific digital assets in their wallet.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
            >
              View project
            </a>
          </motion.div>
          </div>
          </div>
          <motion.div
            className="rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
         </motion.div>

      <div className="max-w-7xl mx-auto p-4 md:p-8 mt-20">
      <h1 class="text-2xl font-extrabold dark:text-white font-poppins">Machine Learning and AI<small class="ml-2 font-poppins text-gray-400"> Jupyter | Python </small></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
            <iframe width="80%" height="80%" src="https://lottie.host/?file=03de394a-e1a3-422c-9a2e-85532716f657/RuIRxBxdpW.json"></iframe>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">
              More Projects Coming soon..
            </h2>
            <p className="text-gray-700 mb-4">
              This project is still in the works :) Do check out my other projects!
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
            >
              View project
            </a>
          </motion.div>
          </div>
          </div>
          <motion.div
            className="rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
         </motion.div>

         <p className="text-gray-700 mb-4">
         This website is coded and designed by me. Built with React.
         </p>

      </div>
      </>
  );
}


export default Project;
