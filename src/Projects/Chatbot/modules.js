import { React, useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { signOut } from "firebase/auth";
import { auth, db} from "./firebase.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { setTyping } from "./Chatbot Page.js";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";


const botAPIKEY = process.env.REACT_APP_CHAT_BOT_API
const axios = require("axios");
const FormData = require("form-data");

const firebaseAdd = (Message, Response, sourceID, paramsID, datetimeNow, filename) => {
    if (Message !== "") {
        addDoc(collection(db, paramsID), {
            Datetime: datetimeNow,
            Source: sourceID,
            Message,
            Response: Response,
            fileName: filename
        });
    }
}
var isLoading = false;


// fileupload - URL of pdf file, config
const fileupload = (URL, config) => {

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


// Chatsubmit - message (user), config, sourceID (PDF token)
const Chatsubmit = (
    message,
    instructions,
    config,
    sourceID,
    paramsID,
    datetimeNow,
    filename
    ) => {
    isLoading = true;
    if (message === "") {
        isLoading = false;
    }
    else if (sourceID === "") {
        isLoading = false;
    }
    return new Promise((res) => {
        const data = {
            sourceId: sourceID,
            messages: [
                {
                    role: "user",
                    content: instructions + message,
                },
            ],
        };
        axios
            .post("https://api.chatpdf.com/v1/chats/message", data, config)
                .then((response) => {
                    console.log("Result:", response.data.content);
                    firebaseAdd(message, response.data.content, sourceID, paramsID, datetimeNow, filename)
                    isLoading = false;
                })
                .catch((error) => {
                    console.error("Error:", error.message);
                    console.log("Response:", error.response.data);
                    isLoading = false;
                });
});
}


export { fileupload, Chatsubmit, firebaseAdd, isLoading }