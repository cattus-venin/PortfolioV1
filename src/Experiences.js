import { motion,AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useRef, useState, Suspense} from 'react';
import { MotionAnimate } from 'react-motion-animate'
import Spline from '@splinetool/react-spline';
import JupytonLogo from "./Assets/Jupyton Logo Dark.png"
import JupytonGif from "./Assets/Jupyton Gif.gif"
import QCD from "./Assets/qcd-technology-edited.png"
import Ukiss1 from "./Assets/Ukiss Design 1.png"
import Ukiss2 from "./Assets/Ukiss Design 2.png"
import Ukiss3 from "./Assets/Ukiss Design 3.png"
import Ukiss4 from "./Assets/Ukiss Design 4.png"
import Ukiss5 from "./Assets/Ukiss Design 5.png"
import APMCert from "./Assets/APM Cert.png"
import PADM from "./Assets/LinkedIn PADM.png"
import TTYC from "./Assets/Tik Tok Youth Camp.png"
import FI from "./Assets/Diploma in Financial Informatics.png"
import SVM from "./Assets/SVM Cert.jpg"
import ITEDA from "./Assets/ITE DA.jpg"
import testimonial from "./Assets/Testimonial.jpg"
import SUSSCert from "./Assets/SUSS Analytics Challenge.png"
import Poster from "./Assets/Mobile Blockchain ticketing system.png"
import 'flowbite';
import { Dropdown } from 'flowbite';

function Experiences() {
  const [fade, setFade] = useState(true);

  const handleClick = () => {
	if (fade==true){
		setFade(false);
	}
	else{
		setFade(true);
	}
  };

  useEffect(() => {
	  document.addEventListener("click", handleClickOutside,true)
  }, [])

  const refOne =useRef(null)
  const handleClickOutside = (e) => {
	  if (!refOne.current.contains(e.target)){
		  // outside div
		  setFade(true);
	  }
	  else{
		  // Inside div
	  }
  }

  return (
      <>
        <div className="flex flex-col justify-center items-center pt-20 pb-20">
		<h1 class="text-2xl font-extrabold text-gray-800 dark:text-gray-400 md:text-2xl body-font font-poppins">Work Experiences</h1>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container max-w-5xl px-4 py-12 mx-20">
					<div className="grid gap-4 mx-20 sm:grid-cols-13">
						<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
							<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
								<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">

									<div class="grid gap-4 pb-10">
										<div>
											<img href="https://www.jedtrade.com/tech-stack/" class="h-full max-w-full rounded-lg" src={JupytonGif} alt=""/>
										</div>
										<div class="grid grid-cols-5 gap-4">
											<div>
												<img class="h-auto rounded-lg hover:shadow-2xl" src={Ukiss1} alt=""/>
											</div>
											<div>
												<img class="h-auto max-w-full rounded-lg hover:shadow-2xl" src={Ukiss2} alt=""/>
											</div>
											<div>
												<img class="h-auto max-w-full rounded-lg hover:shadow-2xl" src={Ukiss3} alt=""/>
											</div>
											<div>
												<img class="h-auto max-w-full rounded-lg hover:shadow-2xl" src={Ukiss4} alt=""/>
											</div>
											<div>
												<img class="h-auto max-w-full rounded-lg hover:shadow-2xl" src={Ukiss5} alt=""/>
											</div>
										</div>
									</div>

									<h3 className="text-xl font-semibold font-poppins hover:text-blue-600"><a href="https://www.jedtrade.com/tech-stack/">Jupyton (Jedtrade)</a><small class="ml-2 font-poppins text-gray-400"> Software Developer Intern</small></h3>
									<time className="text-xs tracking-wide uppercase dark:text-gray-400">Sep 2022 - Feb 2023 (20 weeeks)</time>
									<p className="mt-3">A Singapore-based trust and provenance engine technology company with expertise in information security, identity authentication, secure digital signing, and consent-based data sharing. </p>
									<p className="mt-3">As part of my polytechic internship, I applied for one of the companies listed under the fintech 100 programme. Jupyton was listed as a blockchain company that has a wide list of partners in the industry.
									Due to my interest and prior projects that I have done relating to blockchain technology, I joined the company to further deepen my knowledge and get first hand-experience working in the fast-pace IT startup company. 
									</p>
									<p className="mt-3"> During my time, I was tasked with developing a proof-of-concept (POC) project. After months of research and testing, I was able to deliver a working prototype to the company. An <a className="text-blue-600" href="https://supraoracles.com/academy/what-is-an-air-gapped-wallet/">air-gap</a> 
									<a className="text-blue-700" href="https://www.alchemy.com/overviews/nft-token-gating#:~:text=What%20is%20token%20gating%3F,digital%20assets%20in%20their%20wallet."> token gating solution </a>
									that is more secure, cost effective and convenient method compared to <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="text-purple-600">traditional ticketing systems.</button> It was then pitched as a potential business solution to a few local and overseas companies in the industry.
									</p>
									</div>
									<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
										<div class="relative w-full h-full max-w-xl md:h-auto">
											<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
												<div class="p-6 space-y-6">
													<figure class="max-w-lg">
													  <img class="h-auto max-w-full rounded-lg" src={Poster} alt="image description"/>
													  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Proof of concept Illustration - <a className="text-sm text-blue-700 font-poppins" target="_blank" href={Poster}>Click here to expand</a></figcaption>
													</figure>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-center items-center">
									<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="font-poppins text-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
									type="button" onClick={handleClick} ref={refOne}>More
									<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
									<div id="dropdown" class="z-10 hidden divide-y divide-gray-100 rounded-lg w-5/6 dark:bg-gray-700">
									<span class="font-medium text-gray-800 dark:text-gray-800 font-poppins">Technical Skills Developed</span>
									<div class="flex justify-between mb-1">
									  <span class="text-base font-medium text-gray-800 dark:text-gray-800 font-poppin pt-1">Javascript (ReactJS, NodeJS)</span>
									  <span class="text-sm font-medium text-gray-800 dark:text-gray-800 font-poppins pt-1">65%</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200 ">
									  <div class="bg-gradient-to-r to-emerald-300 from-purple-400 h-2.5 rounded-full" style={{width: '65%'}}></div>
									</div>
									<div class="flex justify-between mb-1">
									  <span class="text-base font-medium text-gray-800 dark:text-gray-800 font-poppin pt-1">Dart (Flutter)</span>
									  <span class="text-sm font-medium text-gray-800 dark:text-gray-800 font-poppins pt-1">55%</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200 ">
									  <div class="bg-gradient-to-r to-emerald-300 from-purple-400 h-2.5 rounded-full" style={{width: '55%'}}></div>
									</div>
									<div class="flex justify-between mb-1">
									  <span class="text-base font-medium text-gray-800 dark:text-gray-800 font-poppin pt-1">Solidity</span>
									  <span class="text-sm font-medium text-gray-800 dark:text-gray-800 font-poppins pt-1">45%</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200 ">
									  <div class="bg-gradient-to-r to-emerald-300 from-purple-400 h-2.5 rounded-full" style={{width: '45%'}}></div>
									</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div
			  className={`transition-all duration-300	 ${
				fade ? "opacity-100" : "opacity-20"
			  }`}
			>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container max-w-5xl px-4 py-8 mx-20">
					<div className="grid gap-4 mx-20 sm:grid-cols-13">
						<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
							<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
								<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
									<h3 className="text-xl font-semibold font-poppins"><img class="w-14 h-14 rounded-full" src={QCD} alt="Rounded avatar"/><a href="https://www.qcd-tech.com/">QCD Technology</a><small class="ml-2 font-poppins text-gray-400"> Customer Service Officer Intern</small></h3>
									<time className="text-xs tracking-wide uppercase dark:text-gray-400">Sep 2019 - Feb 2020 (5 months)</time>
									<p className="mt-3">Southeast Asia's largest Apple Authorised Service Provider in Singapore, Malaysia and Indonesia. As a customer service officer, I was responsible for responding to customers inquiries and give the proper diagnosis
									regarding their <a className="text-blue-600" href="https://www.apple.com/sg/">Apple</a> devices.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
        </div>

		<hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
		<div className="min-h-screen flex flex-col justify-center items-center">
		<h1 class="text-2xl font-extrabold text-gray-800 dark:text-gray-400 md:text-3xl body-font font-poppins">Certifications</h1>
		<div className="max-w-4xl mx-auto p-4 md:p-8 mt-10">
		<h1 class="text-2xl font-extrabold dark:text-white font-poppins">Data Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Google Data Analytics Professional Certificate
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
			This program includes over 180 hours of instruction and hundreds of practice-based assessments, which simulates real-world data analytics scenarios that are critical for success in the workplace. The content is highly interactive and exclusively developed by Google employees with decades of experience in data analytics.
            </p>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			SQL
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Data Analysis
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			SpreadSheet
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Data Ethics
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Tableau
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			R Programming
			</span>
			</a>
          </motion.div>
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
			<img
				src={SUSSCert}
                alt="Project 1"
                layout="fill"
                objectFit="cover"
				className="rounded-lg object-scale-down h-64 w-96"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              SUSS Analytics and Visualisation Challenge 2022
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
			SUSS AVC22 is a poster challenge, where students tell a story on a topic related to Singapore of their choice, be it health, education, social-economics, public safety, among others. Data are sourced from Singstat and Data.gov and must be used for visualisation or analytical work towards the poster. The work should cover an interesting facet about Singapore using data from these databases.
			</p>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Data Story-Telling
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Data Visualisation
			</span>
			</a>
          </motion.div>
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
              <img
				src={PADM}
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Linked-In Learning Elements of Predictive Analytics and Data Mining
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
			A proper predictive analytics and data-mining project can involve many people and many weeks. A "big picture" perspective is necessary to keep the project on track. This course provides that perspective through the lens of a veteran practitioner who has completed dozens of real-world projects.            </p>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Predictive Analytics
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Data Modelling
			</span>
			</a>
          </motion.div>

          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
              <img
				src={APMCert}
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Linked-In Learning Advanced Data Modelling
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
			Ensembles involve groups of models working together to make more accurate predictions. When creating complete deployed solutions, data scientists may also leverage passing data from one model to another or using models in combinations, also known as metamodeling. Techniques that are dominant among winners of modeling competitions as well as leading data science teams around the world.
			</p>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Predictive Modelling
			</span>
			</a>
          </motion.div>
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-64 md:h-auto">
              <img
				src={ITEDA}
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              ITE Data Analytics Challenge 2018
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
				For this challenge, My team and I used Tableau to analyse and visualize declining birthrates in singapore in proportion to the increase of highly educated Singaporeans. Through this challenge, I developed skills and interest in data analytics having been thought by technology partners, Tableau, QLik and Amazon web services.
			</p>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Data Analytics
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Tableau
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Qlik
			</span>
			</a>
          </motion.div>
          </div>
          </div>
        </div>

		<hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
		<div className="max-w-4xl mx-auto p-4 md:p-8 mt-10">
		<h1 class="text-2xl font-extrabold dark:text-white font-poppins">Web and Application UI/UX Design</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
              <img
				src={TTYC}
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Tiktok Youth Camp
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
			The TikTok Youth Camp was designed for all students interested in technology and want to improve on their technical skills. Workshops are taught by TikTok technical experts and engineers, learn foundational skills in front-end and client-side development that can help students kickstart their journey as a technical developer. </p>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Frontend design
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Application Development
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Javascript
			</span>
			</a>
          </motion.div>
          </div>
          </div>


		<hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
		<div className="max-w-4xl mx-auto p-4 md:p-8 mt-10">
		<h1 class="text-2xl font-extrabold dark:text-white font-poppins">Academics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-64 md:h-auto">
              <img
				src={FI}
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Diploma In Financial Informatics
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
			FI equipped me with knowledge and skills in IT, information systems development, business process management and domain knowledge in the banking and finance industry.
			I had developed the skills to analyse, manage financial data as well as business processes of enterprise systems so as to improve business competitiveness within the financial sector. 
			</p>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Finance
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Data Analytics
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			ML & AI
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Programming
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Banking
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Business Intelligence
			</span>
			</a>
          </motion.div>

          <motion.div
            className="bg-white shadow rounded-lg p-4 md:p-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-64 md:h-auto">
              <img
				src={SVM}
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 font-poppins">
              Higher Nitec in Service Management
            </h2>
            <p className="text-sm text-gray-700 mb-4 font-poppins">
			 SM thought me sought-after skills like handling omni-channel communication, service experience design and customer data insights. And use business solution tools to organise data for building profiles and service plans to improve customer experience.
			</p>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Customer service
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Data Analytics
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			CRM
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Marketing
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Business
			</span>
			</a>
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
            <span class="font-poppins relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Service-oriented
			</span>
			</a>
          </motion.div>		  </div>
          </div>


      </>
  );
}

export default Experiences;
