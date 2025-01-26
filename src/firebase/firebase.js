import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBvFAyg1BLM6Kb0NiXYqrgePf4VcVNGhzE",
    authDomain: "music-web-site-4b3ff.firebaseapp.com",
    projectId: "music-web-site-4b3ff",
    storageBucket: "music-web-site-4b3ff.firebasestorage.app",
    messagingSenderId: "845490129669",
    appId: "1:845490129669:web:6a35bfcde9494e49df456c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };