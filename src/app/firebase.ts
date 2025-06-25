// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "to-do-list-fb6b3.firebaseapp.com",
  projectId: "to-do-list-fb6b3",
  storageBucket: "to-do-list-fb6b3.firebasestorage.app",
  messagingSenderId: "1007312461219",
  appId: "1:1007312461219:web:e620594b1cbad85b568e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth, db}