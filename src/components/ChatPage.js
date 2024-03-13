import {BsPerson} from "react-icons/bs"
import {TbCircleLetterR} from 'react-icons/tb'
 import { VscStarFull } from "react-icons/vsc";
import { useState,useEffect } from "react"

import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {getDocs ,getDoc,updateDoc, doc,setDoc,addDoc, collection,arrayUnion}from "firebase/firestore"





// import {authorize} from "../config/firebaseconfig"





const auth = getAuth();
const db = getFirestore();







const ChatPage = () => {

return(
    <>

<div className="chatPageContainer ml-44 flex flex-col h-screen w-full">



<h2 className="text-center text-red-50 p-4" style={{background: 'rgb(73,40,61)',
    background: 'linear-gradient(90deg, rgba(73,40,61,1) 80%, rgba(133,75,113,1) 97%)'}}>The Last Blade II - Room Open</h2>

<div className="flex h-full">

<div className=" w-3/4 flex flex-col justify-between ">
 <ul className="w-3/4"  id="messages">gergerreheheheh
    
    
    <li>passwrod</li>
    <li>passwrod</li>
    <li>passwrod</li>
    <li>passwrod</li>
    <li>passwrod</li>
    <li>passwrod</li>
    </ul>

    <form className="relative" id="form" action="">
      <input id="input" autocomplete="off" placeholder="Send Message To { INSERT SERVER NAME HERE }" />
     
    </form>

</div>
   


 <div id="activePlayers" className="p-10 bg-primaryColor w-2/5 text-gray-50 flex flex-col h-full">
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
        </div>

</div>

    

</div>


</>
)

   
 
      





   }



export default ChatPage