import { React, useState, useCallback, useEffect} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useDropzone } from "react-dropzone";
import { signOut } from "firebase/auth";
import { auth, db } from "./firebase.js";
import { Chatsubmit, firebaseAdd, isLoading } from "./modules.js"
import {
    collection,
    getDocs,
    query,
    orderBy,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot
} from "firebase/firestore";

const botAPIKEY = process.env.REACT_APP_CHAT_BOT_API
const axios = require("axios");
const config = {
    headers: {
        "x-api-key": botAPIKEY,
        "Content-Type": "application/json",
    },
};

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

        // _Option Selector_
        const [selectedOption, setSelectedOption] = useState();
        const [options, setOptions] = useState([{}])

        // _Message and Source ID_
        const [message, setMessage] = useState("");
        const [SourceID, setSource] = useState("");
        const [fileName, setfileName] = useState("");

        // _firebase config_
        const [users, setUsers] = useState([]);
        let params = useParams();
        const usersCollectionRef = collection(db, params.id);
        const q = query(usersCollectionRef, orderBy("Datetime", "asc"));
        const usersSourceCollectionRef = collection(db, params.id+"-Source");
        const SourceCollection = query(usersSourceCollectionRef);

        const myComponent = {
            overflowY: 'scroll',
            maxHeight: 500
        };
        const scrollableElement = document.getElementById('scrollableElement');
        function scrollToBottom() {
            scrollableElement.scrollTop = scrollableElement.scrollHeight;
        }

        // Functions

        // Get Profile ID
        const Viewprofileparams = () => {
            let params = useParams();
            console.log(params.id)
        }
        const updateOptions = (Source, fileName) => {
                const newOption = {
                    key: Source,
                    value: fileName,
                };

                // Use the spread operator to create a new array with the updated object
                const updatedOptions = [...options, newOption];

                // Update the state with the new array
                setOptions(updatedOptions);
            addDoc(collection(db, params.id + "-Source"), (newOption));
        }

        // File upload
        const fileUpload = (file, fileName) => {
            const formData = new FormData();
            formData.append(
                "file",
                file
            );
            console.log(formData);
            const options = {
                headers: {
                    "x-api-key": botAPIKEY,
                    "Content-Type": "multipart/form-data",
                },
            };

            axios
                .post("https://api.chatpdf.com/v1/sources/add-file", formData, options)
                .then((response) => {
                    console.log("Source ID:", response.data.sourceId);
                    updateOptions(response.data.sourceId, fileName)
                })
                .catch((error) => {
                    console.log("Error:", error.message);
                    console.log("Response:", error.response.data);
                });
        }
        // Fileupload (ondrop)
        const onDrop = useCallback(acceptedFiles => {
            const file = acceptedFiles[0];
            const fileName = file.name;
            var fileNameWithoutExtension = fileName.replace(/\.pdf$/, '');
            setfileName(fileNameWithoutExtension);

            fileUpload(file, fileName);
        })
        const { getRootProps, getInputProps} = useDropzone({ onDrop })

        // User message sent and reply
        const datetimeNow = new Date().toLocaleString([], { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
        var instructions = "Respond like you are a PDF chatbot named VeninGPT and give human like responses but also be informative. This is your prompt: "

        const handleDropdownChange = (event) => {
            const selectedValue = event.target.value;
            setSelectedOption(selectedValue);

            // Find the corresponding object from the options array
            const selectedOptionObject = options.find((option) => option.value === selectedValue);

            if (selectedOptionObject) {
                const selectedOptionKey = selectedOptionObject.key;
                setSource(selectedOptionObject.key);
                console.log('Selected option key:', selectedOptionKey);
            }
        };

        const handlesend = async () => {
            setTimeout(() => {
                scrollToBottom();
            }, 3000);
            setMessage("");
            Chatsubmit(message, instructions, config, SourceID, params.id, datetimeNow, selectedOption);
        }

        useEffect(() => {
            onSnapshot(q, (data) => {
                setUsers(data.docs.map((doc) => ({ ...doc.data() })));
            })
            onSnapshot(SourceCollection, (data) => {
                setOptions(data.docs.map((doc) => ({ ...doc.data() })));
                console.log(options)
            })
        }, [message]);

	    return (
            <>
                <body>
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
                                            {Object.keys(options).length !== 0? 
                                                <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                                                    <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-400 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleDropdownChange}>
                                                        <option class="ml-2 font-poppins" value="">Select Bot knowledge</option>
                                                        {
                                                            options.map((option) => (
                                                                <option class="ml-2 font-poppins" key={option.key} value={option.value}>
                                                                    {option.value}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                        <button class="hover:bg-gray-400 hover:text-black text-sm font-poppins text-gray-800 py-2 px-12 rounded-xl inline-flex items-center border">
                                                            <span>Delete Knowledge</span>
                                                        </button>
                                                </div>
                                                :
                                                <></>
                                            }
                                        </div>
                                    </div>
                                    <div class="overflow-auto overflow-x-hidden">
                                        <div
                                            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4"
                                        >
                                            <div class="relative mr-3 pb-2">
                                                <div className="font-poppins text-sm flex items-center justify-start flex-row-reverse">
                                                        <button class="hover:bg-red-400 hover:text-white text-gray-800 py-2 px-2 rounded rounded-lg inline-flex items-center border">
                                                            <span>Delete chat</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="white" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                </div>
                                            </div>
                                            <div class="flex flex-col h-full overflow-x-auto" style={myComponent} id="scrollableElement">
                                                <div class="flex flex-col h-full" id="scrollableElement">
                                                    <div class="grid grid-cols-12 gap-y-2">
                                                        {Object.keys(users).length !== 0 ?
                                                            users.map((user) => {
                                                                return (
                                                                    <>
                                                            <div class="col-start-6 col-end-13 p-3 rounded-lg">
                                                                <div class="flex items-center justify-start flex-row-reverse">
                                                                    <div
                                                                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 text-white font-poppins"
                                                                    >
                                                                        U
                                                                    </div>
                                                                    <div
                                                                        class="relative mr-3 text-sm bg-green-200 py-2 px-4 shadow rounded-xl"
                                                                    >
                                                                        <div>{user.Message}</div>
                                                                    </div>
                                                                    <div
                                                                        class="text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                                                                    >
                                                                        {user.Datetime}
                                                                    </div>
                                                                </div>
                                                                </div>
                                                                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                                <div class="flex flex-row items-center">
                                                                    <div
                                                                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 text-white font-poppins"
                                                                    >
                                                                        VB
                                                                    </div>
                                                                    <div
                                                                        class="relative ml-3 text-sm bg-gray-200 py-2 px-4 shadow rounded-xl"
                                                                                >
                                                                        <div className="text-sm bg-purple-200 text-gray-600 font-poppins py-2 px-4 rounded-xl pb-2 text-ellipsis overflow-hidden">{user.fileName}</div>
                                                                        <div className="pt-2">{user.Response}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                        );
                                                        })
                                                            : 
                                                            <>
                                                                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                                                    <div class="flex flex-row items-center">
                                                                        <div
                                                                            class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 text-white font-poppins"
                                                                        >
                                                                            VB
                                                                        </div>
                                                                        <div
                                                                            class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl font-poppins"
                                                                        >
                                                                            <div>Hi! I'm veninBot, your personal assitant. Begin by typing in the chat and I will try my best to help you.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <form onSubmit={handlesend}>
                                            <div
                                                class="flex flex-row items-center h-20 rounded-xl bg-white w-full px-4"
                                                >
                                                    <div class="flex-grow ml-4">
                                                        {isLoading ?
                                                            <div role="status" className="z-40">
                                                                <svg aria-hidden="true" class="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                                </svg>
                                                                <a className="font-poppins text-gray-500 z-40">Bot is typing...</a>
                                                            </div>
                                                            :
                                                            <></>
                                                        }
                                                    <div class="relative w-full mt-2">
                                                        <input
                                                            type="text"
                                                            value={message}
                                                            class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                                            onChange={(e) => setMessage(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="ml-4 mt-2">
                                                    <button
                                                            class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-2 flex-shrink-0"
                                                            type="submit"
                                                    >
                                                        <span>Send</span>
                                                        <span class="ml-2">
                                                            <svg
                                                                class="w-5 h-5 transform rotate-45 -mt-px"
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
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </main>
                </body>
		</>
		);

}

export default ChatbotPage;