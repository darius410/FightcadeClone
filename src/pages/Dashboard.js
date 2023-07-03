import React from 'react'
import MainDisplay from "./MainDisplay";
import Sidebar from "./Sidebar"; 




const Dashboard = () => {
  
  return (
  <div className="flex flex-row">
    <Sidebar/>
    <MainDisplay/>
    
  </div>
  )
  }


export default Dashboard
