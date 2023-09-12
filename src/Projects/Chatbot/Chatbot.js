import { React, useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { auth } from "./firebase.js";

// api = sec_HXQdGQMQ10vRm4BX6HGuHLDX1MhlYgPU
// tokenid = src_QyiduN92Gi9aWAoQuluMp

const Chatbot = () => {
    const [AccStatus, setAccStatus] = useState(true)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();


    const navigatetoChat = (id) => {
        navigate(`/Project/Chatbot/ChatbotPage/${id}`);
    }

    const changeStatus = (e) => {
        setAccStatus(current => !current);
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //console.log(userCredential);
                navigatetoChat(userCredential.user.uid);
                
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigatetoChat(userCredential.user.uid);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <div class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <div>
                            <Link to="/Project">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                            <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <iframe src="https://lottie.host/?file=13e93236-bf20-417e-95c7-94fa9f60e2dd/kAn7BhNjxd.json" width="350" height="350"></iframe>
                                    <h2 className="mt-2 text-center text-2xl font-bold font-poppins leading-9 tracking-tight text-gray-900">
                                        Talk to your personalised GPT
                                    </h2>
                                </div>

                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                    { 
                                        AccStatus ?
                                        // SignIn section
                                            <form className="space-y-6" onSubmit={signIn}>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Email address
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            value={email}
                                                            name="email"
                                                            type="email"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            autoComplete="email"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex items-center justify-between">
                                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Password
                                                        </label>
                                                        <div className="text-sm">
                                                            <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                                Forgot password?
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="current-password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                        <button
                                                            type="submit"
                                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        >
                                                            Sign in
                                                        </button>
                                                </div>
                                                <p className="mt-10 text-center text-sm text-gray-500">
                                                    Dont have an account?{' '}
                                                    <a onClick={changeStatus} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                                        Create account
                                                    </a>
                                                </p>
                                            </form>
                                            :
                                            // SignUp section
                                            <form className="space-y-6" onSubmit={signUp}>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Email address
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            value={email}
                                                            name="email"
                                                            type="email"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            autoComplete="email"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex items-center justify-between">
                                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Password
                                                        </label>
                                                        <div className="text-sm">
                                                            <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                                Forgot password?
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="current-password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                        <button
                                                            type="submit"
                                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        >
                                                            Sign Up
                                                        </button>
                                                </div>
                                                <p className="mt-10 text-center text-sm text-gray-500">
                                                    Already have an account?{' '}
                                                    <a onClick={changeStatus} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                                        Log In to your account
                                                    </a>
                                                </p>
                                            </form>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};


export default Chatbot;