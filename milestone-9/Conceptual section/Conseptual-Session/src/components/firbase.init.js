// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq3moSLtoUR6huNWci1Ug1SqG-kPsoEbo",
    authDomain: "auth-conceptual-c8ab4.firebaseapp.com",
    projectId: "auth-conceptual-c8ab4",
    storageBucket: "auth-conceptual-c8ab4.appspot.com",
    messagingSenderId: "26771063438",
    appId: "1:26771063438:web:9c84a793f4bbcda5303fdf"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;