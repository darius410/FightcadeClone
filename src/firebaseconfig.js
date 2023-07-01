
import {getFirestore} from 'firebase/firestore'// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAtwr7cA0EvfKNL6o8gonuF8A6MUe3InU",
  authDomain: "fightcade-clone.firebaseapp.com",
  projectId: "fightcade-clone",
  storageBucket: "fightcade-clone.appspot.com",
  messagingSenderId: "749981233145",
  appId: "1:749981233145:web:6f0d31f5051da3ef059728",
  measurementId: "G-62Y66S0C70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = Firestore(app);
export const authorize = getAuth(app);
export const provider = new GoogleAuthProvider()