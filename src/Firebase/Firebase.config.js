// Importing the functions I need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl7kZYLZm8vftLWT6aF3-c9ZTShy1Ag3o",
    authDomain: "e-commerce-clothing-30865.firebaseapp.com",
    projectId: "e-commerce-clothing-30865",
    storageBucket: "e-commerce-clothing-30865.appspot.com",
    messagingSenderId: "564593426309",
    appId: "1:564593426309:web:e0b566f2e33952aaab0eec",
    measurementId: "G-PNFS3CKZ7B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
