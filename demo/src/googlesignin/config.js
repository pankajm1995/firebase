// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDug_XjQqA3zJf1OrvzUZd5uJxHr3Yqkpk",
  authDomain: "fir-e052c.firebaseapp.com",
  projectId: "fir-e052c",
  storageBucket: "fir-e052c.appspot.com",
  messagingSenderId: "581059195356",
  appId: "1:581059195356:web:1a3e61651e6a719c8d9f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,provider}