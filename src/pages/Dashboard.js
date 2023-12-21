import React, {useState,useRef,useEffect} from 'react';
import { Outlet } from 'react-router';
import Sidebar from "./Sidebar"; 
import Notifications from './Notifications';
import UserSettings from './UserSettings';
import MenuBackDrop from "./MenuBackDrop"





const Dashboard = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserSettings, setShowUserSettings] = useState(false);
  

    const toggleNotifications = () => {
      setShowNotifications(!showNotifications);
        setShowUserSettings(false)
    }


    const toggleUserSettings = () => {
      setShowUserSettings(!showUserSettings)
      setShowNotifications(false);
    }
    
    
    const sideMenuRef = useRef(null);
    useEffect(() => {
      const clickOutside = (e)=> {
         if(!sideMenuRef.current.contains(e.target)){
          setShowNotifications(false)
          setShowUserSettings(false)
          console.log("yay")
        }
        if(!sideMenuRef.current.contains(e.target)){
         
         }
       
      }
       

        document.addEventListener("click", clickOutside,true);
        return() =>{
          document.removeEventListener("click", clickOutside,true);
        } 
    },[setShowNotifications]);

   

 
  return (
  <div className="flex flex-row">
    <Sidebar toggleNotifications={toggleNotifications} toggleUserSettings={toggleUserSettings}  />

      {showNotifications &&
      (
        <div className=""> 
          <MenuBackDrop/>
            <div className="" ref={sideMenuRef}>
            
              <Notifications  /> 
            
          </div>
        </div>
       
     
      )}

      
      {showUserSettings &&
      (
      <div >
         <MenuBackDrop/>
          <div ref={sideMenuRef}>
           <UserSettings /> 
        
        </div>
      </div>
      
      
      )}

      


    <Outlet />
    
    
  </div>
  );
  };


export default Dashboard
