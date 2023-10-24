import React, {useState,useRef,useEffect} from 'react';
import { Outlet } from 'react-router';
import Sidebar from "./Sidebar"; 
import Notifications from './Notifications';
import UserSettings from './UserSettings';

 




const MenuBackDrop = () => {

 
  return (
  <div className="
  bg-black/90

  fixed 
  z-10 
  max-h-[calc(100vh - 4rem)] 
  overflow-y-auto 
  removeScroll 
  place-content-center 
  items-center 
  top-0
  bottom-0
  left-[170px]
  h-full  
  w-full 
  m-0 
  flex 
  flex-col   
  text-white shadow-lg">


  </div>
  );
  };


export default MenuBackDrop
