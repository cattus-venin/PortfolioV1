import { motion,AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from 'react';
import LandingGIF from "./Assets/Portfolio Landing New Gif.gif"
import { MotionAnimate } from 'react-motion-animate'
import { Outlet, Route, Routes, useLocation, useHistory, Link } from "react-router-dom";
import { HashRouter as BrowserRouter } from "react-router-dom";
import React from "react";
import Landing from "./Landing Page.js";
import Project from "./projects page.js";
import Experience from "./Experiences.js";
import ContactMe from "./Contact.js";
import SUSS from "./Projects/SUSS.js"
import BankPage from "./Projects/Blockchain/BankPage.js"
import PBM from "./Projects/PBM.js"
import CrowdFund from "./Projects/Blockchain/CrowdFund/CrowdFund.js"
import Donate from "./Projects/Blockchain/CrowdFund/components/DonatePage.jsx"
import Chatbot from "./Projects/Chatbot/Chatbot.js"
import ChatbotPage from "./Projects/Chatbot/Chatbot Page.js"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
    <nav className="bg-white-800 pt-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0 text-black">

            <div className="hidden md:block">
              <div className="flex items-baseline space-x-5">
                <a
                  className="text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400 hover:bg-green-300 px-3 py-2 rounded-md text-xl font-bold font-poppins hover:bg-gradient-to-r to-emerald-300 from-purple-400">
                  <Link to="/">Home</Link>
                </a>
                <a
                  className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-xl font-extrabold font-poppins">
                  |
                </a>
                <a
                  className="text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400 hover:bg-green-300 px-3 py-2 rounded-md text-xl font-extrabold font-poppins hover:text-gradient-to-r to-emerald-300 from-purple-400">
                  <Link to="/Project">Projects</Link>
                </a>
                <a
                  className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-xl font-extrabold font-poppins">
                  |
                </a>
                <a
                  className="text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400 hover:bg-green-300 px-3 py-2 rounded-md text-xl font-extrabold font-poppins hover:bg-gradient-to-r to-emerald-300 from-purple-400">
                  <Link to="/Experience" >Experiences</Link>
                </a>
                <a
                  className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-xl font-extrabold font-poppins">
                  |
                  </a>
                <a
                  href="/"
                  className="text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400 hover:bg-green-300 px-3 py-2 rounded-md text-xl font-extrabold font-poppins hover:bg-gradient-to-r to-emerald-300 from-purple-400">
                  <Link to="/Contact">Contact</Link>
                </a>
              </div>
              <Outlet />
            </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase font-poppins font-extrabold">
                <a onClick={() => setIsNavOpen((prev) => !prev)} ><Link to="/">Home</Link></a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase font-poppins font-extrabold">
                <a onClick={() => setIsNavOpen((prev) => !prev)} ><Link to="/Project">Projects</Link></a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase font-poppins font-extrabold">
                <a onClick={() => setIsNavOpen((prev) => !prev)} ><Link to="/Experience">Experiences</Link></a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase font-poppins font-extrabold">
                <a onClick={() => setIsNavOpen((prev) => !prev)} ><Link to="/Contact">Contacts</Link></a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </nav>
    </div>
  );
};

function Portfolio() {
  return (
      <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
           <Route exact path='/' element={< Landing />}></Route>
           <Route exact path='/Project' element={< Project />}></Route>
           <Route exact path='/Experience' element={< Experience />}></Route>
           <Route exact path='/Contact' element={< ContactMe />}></Route>
           <Route exact path='/Project/SUSS' element={< SUSS />}></Route>
           <Route exact path='/Project/Bank' element={< BankPage />}></Route>
           <Route exact path='/Project/CrowdFund' element={< CrowdFund />}></Route>
           <Route exact path='/Project/CrowdFund/Donate' element={< Donate />}></Route>
           <Route exact path='/Project/PBM' element={< PBM />}></Route>
           <Route exact path='/Project/Chatbot' element={< Chatbot />}></Route> 
           <Route exact path='/Project/Chatbot/ChatbotPage/:id' element={< ChatbotPage />}></Route>
           </Routes>
        </BrowserRouter>
      </>
  );
}

export default Portfolio;
