import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../axios/axios';
import {authorize, provider} from "../config/firebaseconfig";
import {signInWithPopup} from "firebase/auth";
import '../css/RegisterLog.css';
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
    navigate("/dashboard");
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
        navigate("/dashboard");
        });

    };
  

    return (
        <>
                <section className="flex flex-col">
                  
                    <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Enter Email" onChange={e => setEmail (e.target.value)} />
                    <input type="password" placeholder="Enter Password" onChange={e => setPassword (e.target.value)} />
                    <button type="submit" className="bg-green-300">Login</button>
                    {error && <span>Wrong Email Or Password!</span>}

                   
                      
                </form>     
                
                       <p className="text-center mt-8">- OR -</p>
                       
                        <button onClick={ loginToFireBase }>Sign In With Google</button>  

              
                 
                </section>
        </>      
            )
      
    
}

export default Login