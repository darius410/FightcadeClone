import { BrowserRouter, Routes,Route} from 'react-router-dom';

import UserRouteProtection from "./components/UserRouteProtection"
import { AuthContext } from "./context/AuthContext";
//import { initializeApp } from 'firebase/app';
//import {db} from './config/firebaseconfig'
//import { authorize } from './config/firebaseconfig';
import Dashboard from './pages/Dashboard';
import MainDisplay from './pages/MainDisplay'
import Login from './pages/Login';
import Register from './pages/Register';
import LearnMore from './pages/LearnMore';
import Collections from './pages/Collections';

 
function App() {



  return (
<AuthContext>

  <BrowserRouter>

  
    <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login /> } />
        <Route path="Register" element={<Register/>} /> 
        <Route path="FightcadeClone" element={<Login/>} /> 

        
            <Route path="Dashboard" 
                   element={<UserRouteProtection>
                              <Dashboard />
                            </UserRouteProtection> }exact >

            <Route path="MainDisplay" 
                  element={<UserRouteProtection>
                              <MainDisplay />
                          </UserRouteProtection>}exact/> 


            <Route path="MainDisplay/LearnMore"
             element={<UserRouteProtection>
                          <LearnMore />
                      </UserRouteProtection> }exact /> 

            <Route path="Collections" 
            element={<UserRouteProtection>
                        <Collections />
                    </UserRouteProtection>
            } /> 
       
          
        </Route>

    </Routes>
  
</BrowserRouter>
</AuthContext>


    
    
  );
}

export default App;
