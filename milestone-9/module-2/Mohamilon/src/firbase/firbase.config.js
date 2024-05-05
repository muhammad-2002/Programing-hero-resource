// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj6YHjor6EfdGVzjRDeUwN_G7vZvfE5KU",
  authDomain: "moha-milon-5ea2e.firebaseapp.com",
  projectId: "moha-milon-5ea2e",
  storageBucket: "moha-milon-5ea2e.appspot.com",
  messagingSenderId: "776674353829",
  appId: "1:776674353829:web:739fa5f9cb4529884ea34c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth