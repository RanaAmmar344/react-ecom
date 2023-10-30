// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsdO8cDhKWgyg0BMBXGj7ptvtbGC8AWRY",
  authDomain: "mern-ecom-47099.firebaseapp.com",
  projectId: "mern-ecom-47099",
  storageBucket: "mern-ecom-47099.appspot.com",
  messagingSenderId: "1093826861466",
  appId: "1:1093826861466:web:43c4ca8d88ef20f5cb4223",
  measurementId: "G-NK6H0WX7C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  