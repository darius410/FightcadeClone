import React, {useState} from 'react';
import { Outlet } from 'react-router';
import Sidebar from "./Sidebar"; 
import Notifications from './Notifications';

 




const Dashboard = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
      setShowNotifications(!showNotifications);
    }

 
  return (
  <div className="flex flex-row">
    <Sidebar toggleNotifications={toggleNotifications}/>

      {showNotifications &&
      (
      <Notifications /> 
      )}

    <Outlet />
    
    
  </div>
  );
  };


export default Dashboard
