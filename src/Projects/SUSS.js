import { motion,AnimatePresence } from "framer-motion";
import React from "react";
import { MotionAnimate } from 'react-motion-animate'
import HASUSS from "../Assets/House_Affordability.png"
import { Outlet, BrowserRouter, Route,Routes, useLocation, useHistory, Link } from "react-router-dom";

const SUSS = () => {
	return (
    <>
    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <div class="pb-5">
              <Link to="/Project">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </Link>
              </div>
              <header class="mb-4 lg:mb-6 not-format">
                  <h1 class="mb-4 text-3xl font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">SUSS Analytics and Visualisation Challenge 2022</h1>
              </header>
              <p class="pb-2 font-poppins text-l text-gray-500 font-extrabold">
              Topic: "All things Singapore"
              </p>
              <p class="pb-5 font-poppins text-sm text-gray-400 font-bold">
              Awarded: 2nd Runner Up
              </p>
              <a href="https://www.tableau.com/" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
              <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Tableau
              </span>
              </a>
              <p class="font-poppins pt-5 pb-5 text-gray-900">SUSS AVC22 is a poster challenge, where students tell a story on a topic related to Singapore of their choice, be it health, education, social-economics, public safety, among others. 
              Data are sourced from <a className="text-blue-700" href="https://www.singstat.gov.sg/"> Singstat </a> and <a className="text-blue-700" href="https://data.gov.sg/ "> Data.gov </a>and must be used for visualisation or analytical work towards the poster. The work should cover an interesting 
              facet about Singapore using data from these databases.</p>
              <img src={HASUSS} alt="" />
              <figcaption class="text-sm text-center text-gray-500 dark:text-gray-300 font-poppins">Submitted poster - <a className="text-blue-700 font-poppins" target="_blank" href={HASUSS}>Click here to view</a></figcaption>
              <p class="pt-10 font-poppins">For this challenge, I decided that I would look deeper into the issues surrounding housing affordability in Singapore.
              Despite having a high homeownershop rate of nearly 90 per cent in 2022 where housing is deemed relatively affordable and attainable, there are still
              concerns and doubts amongst Singaporeans and especially graduates who had just stepped foot into the job market and is looking for a place to settle in.
              </p>
              <p class="pt-10 font-poppins">
              When looking at the circumstances, we can see why they do have their doubts. Rising interest rates, availability, construction costs (renovations) and supply chain disruptions, affected during and after the covid-19 pandemic has truely risen the concerns regarding the affordability of 
              owning a house in Singapore. Obtaining public housing also known as HDBs, is also subject to meeting eligibility criterias laid down by the government and getting one of choice, considering the factors of location, flat size and length of waiting queue (with the median waiting time of 4.3 years). 
              The worsening of accessibility and availability of public housing adds to the concern for Singaporeans and moreover graduates whom had just stepped foot into the job market and are looking to settle in to their new homes. 
              </p>
              <p class="pt-10 font-poppins">
              Upon further research on the topic, through media articles, social media threads and personally asking a few people around the ages of 20-35 (Poly and University graduants, working adults etc.), I noticed a trend of people doubting their chance of ever purchasing a home of their choice in singapore within the next 5-10 years. 
              This brought me to dive deep into the topic and look at the data provided by the government to understand more about the issues and concerns. My planned approach would be to first raise the issues surrounding the affordability concerns and the set government criterias to purchase a home, a breakdown of housing pricing in singapore vs the income growth rate provided by <a className="text-blue-700" href="https://data.gov.sg/ "> Data.gov</a>,
              and then a conservative breakdown of the costs of owning and obtaining a home, and see how long it would take to reach that goal.
              </p>
              <div className="pt-10">
              <iframe width="655" height="370" src="https://www.youtube.com/embed/EXYQ13tUewc" title="SUSS Analytics and Visualisation Challenge - Team Venin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <figcaption class="pt-5 text-sm text-center text-gray-500 dark:text-gray-300 font-poppins">Submitted Video Presentation</figcaption>
              </div>
              </article>
      </div>
    </main>
    </>
	);
};

export default SUSS;