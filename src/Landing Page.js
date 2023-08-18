import { motion,AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState, Suspense} from 'react';
import LandingGIF from "./Assets/Portfolio Landing New Gif.gif"
import { MotionAnimate } from 'react-motion-animate'
import Spline from '@splinetool/react-spline';

function Landing() {

  return (
    <>
    
    <div className="mt-10 flex flex-col justify-center items-center">
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0 }}
    >
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl body-font font-poppins">Hi, I'm <span class="hover:text-gray-300 text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400">Nur Harith Mirza</span></h1>
    </motion.div>
    <Spline scene="https://prod.spline.design/wSevcK33Fh8iywRw/scene.splinecode" style={{ width: 1920, height: 700 }}/>
    <div className="hidden md:block">
    <div className="flex items-baseline space-x-5">
      <small class="text-xl ml-2 font-poppins text-gray-400 hover:text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400"> Software development</small>
           <small class="text-xl ml-2 font-poppins text-gray-400"> | </small>
            <small class="text-xl ml-2 font-poppins text-gray-400 hover:text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400"> Data Analytics</small>
            <small class="text-xl ml-2 font-poppins text-gray-400"> | </small>
            <small class="text-xl ml-2 font-poppins text-gray-400 hover:text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400"> Fintech </small>
            <small class="text-xl ml-2 font-poppins text-gray-400"> | </small> 
            <small class="text-xl ml-2 font-poppins text-gray-400 hover:text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-purple-400"> Machine Learning and AI</small>
                        </div>
                              </div>
      <h1 class="mt-4 text-xl text-gray-600 dark:text-gray-400 md:text-xl body-font font-poppins">nurharithmirza@gmail.com</h1>
      </div>
      </>
  );
}

export default Landing;