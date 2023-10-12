// import {getStorage} from "firebase/storage"
import {getFirestore} from 'firebase/firestore'// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// import {getDatabase, ref, set ,onValue} from "firebase/database"
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
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const authorize = getAuth(app);
export const provider = new GoogleAuthProvider();

// note to future self consider using this logic to make reads/writes to database

// function writeUserData(userId,name,email,imageUrl){
//   const userDatabase =  getDatabase();
//   const reference = ref(userDatabase, 'user/' + userId);

//   set(reference,{
//     username:name,
//     email:email,
//     profile_picture:imageUrl
// });
  
// }


// writeUserData("cosmic_spider","Darius Hansley", "noobkilla44@yahoo.com","imgUrl")


// function getUserData(){
//   const userDatabase =  getDatabase();  
//   const dataRef = ref(userDatabase, 'user/' + userId);

//   onValue(dataRef,(snapshot) => {
//     const data = snapshot.val();
//     updateDistance(postElement, data);
//   });
// }