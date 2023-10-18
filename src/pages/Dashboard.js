import React, {useState} from 'react';
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
