import React, {useState,useRef,useEffect} from 'react';
import { Outlet } from 'react-router';
import Sidebar from "./Sidebar"; 
import Notifications from './Notifications';
import UserSettings from './UserSettings';
import MenuBackDrop from "./MenuBackDrop"

 




const Dashboard = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserSettings, setShowUserSettings] = useState(false);
    const [darkLayer, setDarkLayer] = useState(false);

    const toggleNotifications = () => {
      setShowNotifications(!showNotifications);
        setShowUserSettings(false)
    }


    const toggleUserSettings = () => {
      setShowUserSettings(!showUserSettings)
      setShowNotifications(false);
    }

    useEffect(()=>{
      
    });
    const showDarkLayer= () => {
      setDarkLayer(!darkLayer)
      
      
    }

   
    const notificationsRef = useRef(null);
   

   

 
  return (
  <div className="flex flex-row">
    <Sidebar toggleNotifications={toggleNotifications} toggleUserSettings={toggleUserSettings}  />

      {showNotifications &&
      (
        <div className="" ref={notificationsRef}>
         
           <Notifications  /> 
            <MenuBackDrop/>
        </div>
     
      )}

      
      {showUserSettings &&
      (
      <div>
        <UserSettings /> 
        <MenuBackDrop/>
      </div>
      
      )}

      


    <Outlet />
    
    
  </div>
  );
  };


export default Dashboard
