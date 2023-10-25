import { React, useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { signOut } from "firebase/auth";
import { auth, db} from "./firebase.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Howl, Howler } from 'howler';
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

const texttoSpeech = (botreponse, selectedVoice, volume, stability, clarity, style) => {
    //const voiceID = process.env.REACT_APP_VOICE_ID // The ID of the voice you want to get

    const apiKey = process.env.REACT_APP_VOICE_API; // Voice API key from Elevenlabs
    const apiKeyAlt = process.env.REACT_APP_VOICE_API_2; // Alternate Voice API key
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice}`;

    const headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": apiKey
    };
    const headersAlt = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": apiKeyAlt
    };

    // Slider Values Formatting 
    var volumeP = volume / 100
    volumeP = volumeP.toFixed(1)

    var stabilityP = stability / 100
    stabilityP = stabilityP.toFixed(1)

    var clarityP = clarity / 100
    clarityP = clarityP.toFixed(1)

    var styleP = style / 100
    styleP = styleP.toFixed(1)

    const data = {
        "text": botreponse,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": stabilityP,
            "similarity_boost": clarityP,
            "style": styleP,
        }
    };
    try {
        async function getVoice() {
            const APIresponse = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            })
                .then((response) => response.blob())
                .then((blob) => {
                    const format = blob.type.split('/')[1];

                    // Create a Howl instance for the MP3 blob
                    const sound = new Howl({
                        src: [URL.createObjectURL(blob)],
                        autoplay: true, // Set to true to play immediately
                        loop: false, // Set to true for looped playback
                        format, // Specify the audio format
                        volume: volumeP, // Adjust the volume
                    });

                    // Cleanup when the component unmounts
                    return () => {
                        sound.unload();
                    };
                })
                .catch(() => {
                    console.log("Error when fetching -- Using alternate API token");
                });

            if (!APIresponse.ok) {
                fetch(url, {
                    method: 'POST',
                    headers: headersAlt,
                    body: JSON.stringify(data)
                })
                    .then((response) => response.blob())
                    .then((blob) => {
                        const format = blob.type.split('/')[1];

                        // Create a Howl instance for the MP3 blob
                        const sound = new Howl({
                            src: [URL.createObjectURL(blob)],
                            autoplay: true, // Set to true to play immediately
                            loop: false, // Set to true for looped playback
                            format, // Specify the audio format
                            volume: volumeP, // Adjust the volume
                        });

                        // Cleanup when the component unmounts
                        return () => {
                            sound.unload();
                        };
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
        getVoice()
    }
    catch {

    }
}

// Chatsubmit - message (user), config, sourceID (PDF token)
const Chatsubmit = (
    message,
    instructions,
    config,
    sourceID,
    paramsID,
    datetimeNow,
    filename,
    voiceEnabled,
    selectedVoice,
    volume,
    stability,
    clarity,
    style
    ) => {
    isLoading = true;
    var responseMessage = "";
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
        async function VoiceApi() {
            if (voiceEnabled) {
                texttoSpeech(responseMessage,
                    selectedVoice,
                    volume,
                    stability,
                    clarity,
                    style
                );
            }
            isLoading = false;
        }
        async function getData() {
            const APIresponse = await 
                axios.post("https://api.chatpdf.com/v1/chats/message", data, config)
                    .then((response) => {
                        console.log("Result:", response.data.content);
                        responseMessage = response.data.content;
                        firebaseAdd(message, response.data.content, sourceID, paramsID, datetimeNow, filename)
                    })
                    .catch((error) => {
                        console.error("Error:", error.message);
                        console.log("Response:", error.response.data);
                        isLoading = false;
                    });
            const otherResponse = await VoiceApi();

            const runasyncfunctions = await Promise.all([APIresponse, otherResponse]);
        }

        getData();
    })
}


export { fileupload, Chatsubmit, firebaseAdd, isLoading }