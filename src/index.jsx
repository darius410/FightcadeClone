import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import App from './App'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>

    <Routes>
      <Route path="/" element={<App/>} /> 
      <Route path="/Dashboard" element={<Dashboard/>} /> 
    </Routes>
   
 </BrowserRouter>
  
    
  
);

