import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../axios/axios';
import Textlogo from "../images/fightcade.svg"
import IconLogo from "../images/logo.svg"

import {authorize, provider} from "../config/firebaseconfig";
import {signInWithPopup} from "firebase/auth";

import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom"; //Handles the redirect to the dashboard after user signs in



const Login = ({setIsAuth}) => {

   
    const [error,setError] = useState(false);
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    const handleLogin = e => {
            e.preventDefault();
signInWithEmailAndPassword(authorize, email, password)
  .then((userCredential) => {
    // Signed In 
    const user = userCredential.user;
    console.log(user)
    navigate("/dashboard/maindisplay");
    // ...
  })
  .catch((error) => {
    setError(true)
    // ..
    });
};

   

//this uses firebase with google auth to sign the user in
//The user has yet to be verified when they are no longer authorized in the app

    const loginToFireBase = () => {
        signInWithPopup(authorize, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        // setIsAuth(true);
        navigate("/dashboard/maindisplay");
        });

    };
    const navigateToRegisterPage = () => {
      
        // setIsAuth(true);
        navigate("/Register");
       

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
{/* RIGHT SIDE */}

        <div className="flex w-8/12 loginPageRight items-center justify-center text-center h-screen">
             <section className="content-around">
                  
                    <h1>Login</h1>
                <form onSubmit={handleLogin} className="w-[300px] m-auto p-[20px]">
                    <input  className="" type="email" placeholder="Enter Email" onChange={e => setEmail (e.target.value)} />
                    <input type="password" placeholder="Enter Password" onChange={e => setPassword (e.target.value)} />
                    <button type="submit" className="bg-green-300">Login</button>
                    {error && <span>Wrong Email Or Password!</span>}

                   
                      
                </form>     
                
                       <p className="text-center mt-8">- OR -</p>
                       
                        <button onClick={ loginToFireBase }>Sign In With Google</button>  


                        <p className="flex flex-col">New To FightCade?</p>
                          <button>
                            <a className="flex flex-col" onClick={ navigateToRegisterPage }>Click here To Register</a>
                            </button>  

                </section>
        </div>
               

</div>
        

       
        </>      
            )
      
    
}

export default Login