import { BrowserRouter, Routes,Route} from 'react-router-dom';
//import { initializeApp } from 'firebase/app';
//import {db} from './config/firebaseconfig'
//import { authorize } from './config/firebaseconfig';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import LearnMore from './pages/LearnMore';
import Collections from './pages/Collections';

 
function App() {



  return (

    <BrowserRouter>

  
    <Routes> 
        <Route path="/" />
        <Route path="/Login" element={<Login /> } />
        <Route path="/Register" element={<Register/>} /> 
        <Route path="/Fightcade" element={<Login/>} /> 

      <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route path="/LearnMore" element={<LearnMore />} /> 

          <Route path="/Collections" element={<Collections />} /> 
    </Routes>
  
</BrowserRouter>
    
    
  );
}

export default App;
