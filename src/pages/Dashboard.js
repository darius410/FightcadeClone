import React from 'react'
import MainDisplay from "./MainDisplay";
import Sidebar from "./Sidebar"; 
import "../css/index.css";


const Dashboard = () => {
  return (
  <div className="flex flex-row">
    <Sidebar/>
    <MainDisplay/>
    
  </div>
  )
}

export default Dashboard
