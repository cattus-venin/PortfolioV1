import { React, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useDropzone } from "react-dropzone";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";

const botAPIKEY = process.env.CHAT_BOT_API

const ChatbotPage = () => {
        const navigate = useNavigate();
        const navigatetoChat = (id) => {
            navigate(-1);
        }
        const userSignOut = () => {
            signOut(auth)
                .then(() => {
                    console.log("sign out successful");
                    navigatetoChat();
                })
                .catch((error) => console.log(error));
        };
        //Variable Declarations
        const axios = require("axios");
        const [error, setError] = useState();
        const config = {
            headers: {
                "x-api-key": botAPIKEY,
                "Content-Type": "application/json",
            },
        };
        const [messages, setMessages] = useState([
            {
                content: "Hello",
            },

        ]);
        const [SID, setSID] = ([]);

        const myComponent = {
            overflowY: 'scroll',
            maxHeight: 500
        };

        // Functions

        // Get Profile ID
        const Viewprofileparams = () => {
            let params = useParams();
            console.log(params.id)
        }

        const [files, setFiles] = useState([]);

        // File Upload and get token
        const onDrop = useCallback(acceptedFiles => {
            console.log(acceptedFiles)
            setFiles(acceptedFiles.map(file => Object.assign(URL.createObjectURL(file))));
            console.log(files.toString())
            fileupload(files.toString());

        })
        const { getRootProps, getInputProps} = useDropzone({ onDrop })

        const fileupload = (URL) => {
            const config = {
                headers: {
                    "x-api-key": botAPIKEY,
                    "Content-Type": "application/json",
                },
            };

            const data = {
                url: "URL",
            };

            axios
                .post("https://api.chatpdf.com/v1/sources/add-url", data, config)
                .then((response) => {
                    console.log("Source ID:", response.data.sourceId);
                })
                .catch((error) => {
                    console.log("Error:", error.message);
                    console.log("Response:", error.response.data);
                });
        }

        // User message sent and reply
        const handlesend = async (message) => {
            console.log("Message:", message);
        }
        const Chatsubmit = async (message) => {

            const data = {
                sourceId: "src_QyiduN92Gi9aWAoQuluMp",
                messages: [
                    {
                        role: "user",
                        content: message,
                    },
                ],
            };

            axios
                .post("https://api.chatpdf.com/v1/chats/message", data, config)
                .then((response) => {
                    console.log("Result:", response.data.content);
                })
                .catch((error) => {
                    console.error("Error:", error.message);
                    console.log("Response:", error.response.data);
                });
        }
	    return (
        <>
                <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                    <div class="flex justify-between px-10 mx-auto max-w-screen-xl ">
                        <div class="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                            <div class="pb-5">
                                <a onClick={userSignOut}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>
                            <div class="flex antialiased text-gray-800">
                                <div class="flex flex-row h-full w-full overflow-x-hidden">
                                    <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                                        <div
                                            class="flex flex-col items-center border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
                                        >
                                            <iframe src="https://lottie.host/?file=13e93236-bf20-417e-95c7-94fa9f60e2dd/kAn7BhNjxd.json"></iframe>
                                            <div class="text-sm font-semibold mt-2">VeninGPT</div>
                                        </div>
                                        <div class="flex flex-col mt-2">
                                            <div class="flex flex-row items-center justify-between text-xs">
                                                <div class="flex items-center justify-center w-full">
                                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                        <div class="flex flex-col items-center justify-center pt-6 pb-6" {...getRootProps()}>
                                                            <iframe src="https://lottie.host/?file=59332b65-279f-4e7e-92a1-eaa83935e841/bKV8o2xvkC.json" className="h-8"></iframe>
                                                            <p class="text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                            <p class="text-xs text-gray-500 dark:text-gray-400">PDF file</p>
                                                        </div>
                                                        <input type="file" {...getInputProps()} />
                                                    </label>
                                                </div> 
                                            </div>
                                            <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                                                <button
                                                    class="flex flex-row items-center bg-blue-200 hover:bg-gray-200 rounded-xl p-2"
                                                >
                                                    <div class="ml-2 text-sm font-semibold">File 1</div>
                                                </button>
                                                <button
                                                    class="flex flex-row items-center bg-gray-300 hover:bg-gray-200 rounded-xl p-2"
                                                >
                                                    <div class="ml-2 text-sm font-semibold">File 2</div>
                                                </button>
                                                <button
                                                    class="flex flex-row items-center bg-gray-300 hover:bg-gray-200 rounded-xl p-2"
                                                >
                                                    <div class="ml-2 text-sm font-semibold">File 3</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="overflow-auto overflow-x-hidden">
                                        <div
                                            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4"
                                        >
                                            <div class="flex flex-col h-full overflow-x-auto" style={myComponent}>
                                                <div class="flex flex-col h-full">
                                                    <div class="grid grid-cols-12 gap-y-2">
                                                        {messages.map(function (data) {
                                                            return (
                                                        <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                            <div class="flex flex-row items-center">
                                                                <div
                                                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                                >
                                                                      VB
                                                                </div>
                                                                <div
                                                                    class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                                >
                                                                    <div>{data.content}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )
                                                        })}
                                                        <div class="col-start-6 col-end-13 p-3 rounded-lg">
                                                            <div class="flex items-center justify-start flex-row-reverse">
                                                                <div
                                                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                                >
                                                                    U
                                                                </div>
                                                                <div
                                                                    class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                                >
                                                                    <div>Give me a summary of this report</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="flex flex-row items-center h-20 rounded-xl bg-white w-full px-4"
                                            >
                                                <div class="flex-grow ml-4">
                                                    <div class="relative w-full">
                                                        <input
                                                            type="text"
                                                            class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="ml-4">
                                                    <button
                                                        class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                                    >
                                                        <span>Send</span>
                                                        <span class="ml-2">
                                                            <svg
                                                                class="w-4 h-4 transform rotate-45 -mt-px"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                </main>
		</>
		);

}

export default ChatbotPage;