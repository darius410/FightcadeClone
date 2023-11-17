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
             <section className=" font-primary content-around text-white w-full ">
                  
                    <h1 className="text-4xl mb-4 font-bold tracking-wider" >Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col w-11/12 mb-4 rounded-md justify-center items-center m-auto px-[150px] pb-[20px] pt-[80px] bg-primaryColor">
                    <input  className="
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
                    bg-transparent" type="email" placeholder="Enter Email" onChange={e => setEmail (e.target.value)} />
                    <input className="my-2 py-6 w-full  placeholder:text-primaryHighlight text-center text-xl font-bold font-secondary  border-b-2 border-primaryHighlight bg-transparent" type="password" placeholder="Enter Password" onChange={e => setPassword (e.target.value)} />

                    {error && <span>Wrong Email Or Password!</span>}

                    <button className="learnMore rounded-md  text-2xl mt-6  px-12 py-2    font-patreon font-semibold" type="submit" onClick={handleLogin}>Connect</button>

                    <p className="text-center py-4">- OR -</p>
                       
                       <button className="learnMore rounded-md p-2" onClick={ loginToFireBase }>Sign In With Google</button>  

                   
                    <p className="text-white font-primary pt-4">By using Fightcade you adhere to the <a href=" " className="text-secondaryHighlight">Fighting Game Community Code of Conduct.</a></p>

                   
                      
                </form>     
                

                        <p className="flex flex-col py-4 text-2xl">New To FightCade?</p>
                          <button className="learnMore rounded-md px-5 py-2">
                            <a href=" " className="flex flex-col text-lg" onClick={ navigateToRegisterPage }>Click Here To Register</a>
                            </button>  

                </section>
        </div>
               

</div>
        

       
        </>      
            )
      
    
}

export default Login