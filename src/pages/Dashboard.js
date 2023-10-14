import React from 'react'
import { Outlet } from 'react-router';
import Sidebar from "./Sidebar"; 


 




const Dashboard = () => {



  return (
  <div className="flex flex-row">
    <Sidebar/>
    

    <Outlet />
    
    
  </div>
  )
  }






export default Dashboard
