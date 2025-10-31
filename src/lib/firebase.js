// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtd3FNF6UsntY8lfJC8BHD1DDFL88sm7M",
  authDomain: "newsapp-127d8.firebaseapp.com",
  projectId: "newsapp-127d8",
  storageBucket: "newsapp-127d8.firebasestorage.app",
  messagingSenderId: "344131517594",
  appId: "1:344131517594:web:450afbb71497a03d9c3323",
  measurementId: "G-YQ9PZWBJ6N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
