import { BrowserRouter, Routes,Route } from 'react-router-dom';
//import db from './config/firebaseconfig'
//import { authorize } from './config/firebaseconfig';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import LearnMore from './pages/LearnMore';
import Collections from './pages/Collections';

// note to future me,use the firebase database instea dof the realtime data base to get the same result of user login  


function App() {
 
  // function getUserData(){
//   const userDatabase =  getDatabase();  
//   const dataRef = ref(userDatabase, 'user/' + userId);

//   onValue(dataRef,(snapshot) => {
//     const data = snapshot.val();
//     updateDistance(postElement, data);
//   });
// }

  
   
  
  // const [isAuth, setIsAuth] = useState(false);



  return (

    <BrowserRouter>

  
    <Routes> 
      <Route path="/" element={<Login/>} /> 
      <Route path="/FightcadeClone" element={<Login/>} /> 
      <Route path="/Login" element={<Login /> } />
      <Route path="/Register" element={<Register/>} /> 
      <Route path="/Dashboard" element={<Dashboard />} /> 
      <Route path="/LearnMore" element={<LearnMore />} /> 
      <Route path="/Collections" element={<Collections />} /> 

    
    </Routes>
  
</BrowserRouter>
    
    
  );
}

export default App;
