import React, {useState,useRef,useEffect} from 'react';
import { Outlet } from 'react-router';
import Sidebar from "./Sidebar"; 
import Notifications from './Notifications';
import UserSettings from './UserSettings';

 




const Dashboard = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserSettings, setShowUserSettings] = useState(false);


    const toggleNotifications = () => {
      setShowNotifications(!showNotifications);
    }

    const toggleUserSettings = () => {
      setShowUserSettings(!showUserSettings)
    }
    const notificationsRef = useRef(null);
    const handleOutsideClick = (e) => {
      if (notificationsRef.current && !notificationsRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);
 
  return (
  <div className="flex flex-row">
    <Sidebar toggleNotifications={toggleNotifications} toggleUserSettings={toggleUserSettings} />

      {showNotifications &&
      (
      <Notifications /> 
      )}

      
      {showUserSettings &&
      (
      <UserSettings /> 
      )}



    <Outlet />
    
    
  </div>
  );
  };


export default Dashboard
