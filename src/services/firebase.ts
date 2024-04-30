// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyC9gcdcoJ5XMgCG30XgGjHSeH9eHG82HGw",
  authDomain: "advexcer7-f7ad1.firebaseapp.com",
  projectId: "advexcer7-f7ad1",
  storageBucket: "advexcer7-f7ad1.appspot.com",
  messagingSenderId: "754528641765",
  appId: "1:754528641765:web:d229f0c785e417dc902a0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
