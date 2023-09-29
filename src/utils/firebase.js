// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfKBQwv5SL2fQuH3J8NuDo-ctLv3hyUdw",
  authDomain: "netflixgpt-abhishek.firebaseapp.com",
  projectId: "netflixgpt-abhishek",
  storageBucket: "netflixgpt-abhishek.appspot.com",
  messagingSenderId: "551450395008",
  appId: "1:551450395008:web:48ed92e4c0862ebe7fc165",
  measurementId: "G-CNCZXJ1C4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();