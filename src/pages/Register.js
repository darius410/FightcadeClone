import Textlogo from "../images/fightcade.svg"
import IconLogo from "../images/logo.svg"

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { setDoc, doc} from "firebase/firestore";

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
const auth = getAuth(app);
const db = getFirestore(app);



const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  const handleRegistration = async(e) => {
    e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          
          
          await setDoc(doc(db, "Users", user.uid), {
            email: email,
            lastLogin: serverTimestamp(),
            username: username,
            gamesarray: [ 
            
            ]
          });

         
        console.log("User registered:", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error registering user:", errorCode, errorMessage);
      });
  };


  const navigateToLoginPage = () => {
      
    // setIsAuth(true);
    navigate("/Login");
   

};

  return (
    <>
      <div className="flex">
        <div className=" flex flex-col loginPageLeft items-center justify-center text-center h-screen ">


<div className=" w-28">
    <img src={IconLogo} alt="" onClick={()=>navigate("maindisplay")}/> 
</div>

<div className=" flex flex-col my-2 px-14"> 
  <img src={Textlogo} alt=""  className="w-full mainLogo" />
  <h1 className="mt-4 font-primary text-xl font-bold tracking-[.50em] text-yellow-50 ">ONLINE RETRO GAMING</h1>
</div>



        </div>
        {/*  RIGHT SIDE */}
        <div className="flex w-8/12 loginPageRight items-center justify-center text-center h-screen">
          <section className="font-primary before:content-around text-white w-full">
          <h1 className="text-4xl mb-4 font-bold tracking-wider">REGISTRATION</h1>

          
            <form onSubmit={handleRegistration} className="flex flex-col w-11/12 rounded-md justify-center items-center m-auto px-[150px] pb-[20px] pt-[60px] bg-primaryColor">
            <p className="font-primary text-secondaryHighlight text-lg">"Welcome To Fightcade ! Enter Your credentials and your desired username !"</p>
              <input
               className="
               my-2
               py-6 
               w-full 
               placeholder:text-primaryHighlight
               text-primaryHighlight 
               text-center 
               text-xl 
               font-bold 
               font-secondary 
               border-b-2 
               border-primaryHighlight 
               bg-transparent"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
           
              <input
              className="
              my-2
              py-6 
              w-full 
              placeholder:text-primaryHighlight
              text-primaryHighlight 
              text-center 
              text-xl 
              font-bold 
              font-secondary 
              border-b-2 
              border-primaryHighlight 
              bg-transparent"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
             
                <input
                className="
                my-2
                py-6 
                w-full 
                placeholder:text-primaryHighlight
                text-primaryHighlight 
                text-center 
                text-xl 
                font-bold 
                font-secondary 
                border-b-2 
                border-primaryHighlight 
                bg-transparent"
                type="username"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <button type="submit" className="learnMore rounded-md my-6 text-xl p-2 px-5">Register</button>

            


              <p className="text-white font-primary pt-4">By using Fightcade you adhere to the <a href=" " className="text-secondaryHighlight">Fighting Game Community Code of Conduct.</a></p>
            </form>
            
            <p className="flex flex-col py-4 text-2xl">Already A Fightcade Member ?</p>
                          <button className="learnMore rounded-md px-5 py-2">
                            <a href=" " className="flex flex-col text-lg" onClick={ navigateToLoginPage }>Go To Login Page</a>
                            </button>  


          </section>
         
        </div>
      </div>

      
    </>
  );
};

export default Register;
