// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOIyVYcSqk-Fs9D2qXZyU313UBqzkKXLQ",
  authDomain: "newr-dfd61.firebaseapp.com",
  projectId: "newr-dfd61",
  storageBucket: "newr-dfd61.appspot.com",
  messagingSenderId: "1047144923011",
  appId: "1:1047144923011:web:f355002238025f6c5440b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,provider}