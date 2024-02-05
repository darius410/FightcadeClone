import { createContext, useState,useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Context = createContext();
export function AuthContext({children}){
    const auth = getAuth();
  

    const [userAuth, setUserAuth] = useState()
    const [loading, setLoading] =useState(true)

    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
       setUserAuth(currentUser);
       console.log(currentUser);
     });
   
     return () => unsubscribe();
   }, []);

   const values ={
    user:userAuth,
    setUser:setUserAuth
   }

   return <Context.Provider value= {values} >
    {!loading &&
    children}
   </Context.Provider>

}