// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDWA_FbnmVRNaCA-4pKT5dLTHN919G5VQ",
  authDomain: "authentication-with-fire.firebaseapp.com",
  projectId: "authentication-with-fire",
  storageBucket: "authentication-with-fire.firebasestorage.app",
  messagingSenderId: "948802802931",
  appId: "1:948802802931:web:3989347cfb19d8ad575386",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;