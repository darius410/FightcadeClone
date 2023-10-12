import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {db} from './config/firebaseconfig'
import { authorize } from './config/firebaseconfig';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import LearnMore from './pages/LearnMore';
import Collections from './pages/Collections';

 
function App() {

const currentUser = false;
const RequireAuth = ({child}) => {
  return currentUser ? child : <Navigate to="/login"/>
}

  return (

    <BrowserRouter>

  
    <Routes> 
      <Route path="/" >
        
        <Route index element={<Dashboard/>} /> 
        <Route path="/Login" element={<Login /> } />
        
        <Route path="/Register" element={<Register/>} /> 
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/LearnMore" element={<LearnMore />} /> 

        <Route path="/Collections" element={<Collections />} /> 

      </Route>


    

    
    </Routes>
  
</BrowserRouter>
    
    
  );
}

export default App;
