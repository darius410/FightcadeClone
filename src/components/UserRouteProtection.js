
import { useContext} from "react";
import { Navigate } from "react-router-dom"
import { Context } from "../context/AuthContext"

export default function UserRouteProtection({children}){
const { user } = useContext(Context);

  if(!user){
    return<Navigate to="/login" replace/>
  }else{
    return children
  }

}



  





