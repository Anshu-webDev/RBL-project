import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBi8ZyhcISyVVliedoTE_mwS1WYWAzwImA",
    authDomain: "rbl-project-d8846.firebaseapp.com",
    projectId: "rbl-project-d8846",
    storageBucket: "rbl-project-d8846.appspot.com",
    messagingSenderId: "487483366671",
    appId: "1:487483366671:web:f383f39e5cab757f9a727a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();