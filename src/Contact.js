import { motion,AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState, useRef } from 'react';
import { MotionAnimate } from 'react-motion-animate'
import emailjs from 'emailjs-com';

const ContactMe = () => {

  const form = useRef();

  const [fade, setFade] = useState(false);

  const handleClick = () => {
	if (fade==false){
		setFade(true);
	}
	else{
		setFade(false);
	}
  };

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    setFade(true);
    emailjs.sendForm('service_vqhaug5', 'template_odawtlo', e.target, 'bQC-XlkK-1MNPUrIi')
      .then((result) => {
        setTimeout(function(){
           window.location.reload();
        }, 2000); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center">
    <div class="grid grid-cols-2 justify-items-center">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white font-poppins ">Let's get started.
    </h1>
    <form onSubmit={sendEmail}>
    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 font-poppins">My name is
    <div class="">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-200 focus:shadow-lg block w-100 p-2.5 font-poppins"
        type="text"
        placeholder="John Doe.."
        name="user_name"
        required
      />
    from
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-200 focus:shadow-lg block w-full p-2.5 font-poppins"
        type="text"
        placeholder="Organisation/Institute.."
        name="Org"
      />
    would like to get in touch. You can reach me at
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-200 focus:shadow-lg block w-full p-2.5 font-poppins"
        type="email"
        placeholder="Email/Contact..."
        name="user_email"
        required
      />
      </div>
    </p>
    <button type="submit" value="Send" 
    className="ml-60 text-gray-500 hover:text-white hover:bg-green-300 px-2 py-2 rounded-md text-xl font-medium font-poppins hover:bg-gradient-to-r to-emerald-300 from-purple-400">
    Send Info
    </button>
    </form>
	<div
    className={`transition-all duration-300	 ${
        fade ? "opacity-100" : "opacity-0"
    }`}
	>
    <div id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
        <svg aria-hidden="true" class="w-5 h-5 text-purple-400 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
        <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
    </div>
    </div>

    </div>
    </div>
    </>
  );
};

export default ContactMe;
