import React from 'react'
import { useNavigate } from 'react-router'
import { signOut } from "firebase/auth";

import { authorize } from "../config/firebaseconfig";





const UserSettings = ( ) => {
  const navigate = useNavigate();
  
  // const [isAuth, setIsAuth] = useState(false);
  
  const redirect = useNavigate();
  const signUserOut = () => {
      signOut(authorize).then(() =>{
          localStorage.clear()
          // setIsAuth(false);
          redirect("/login");
  })

  }

  return (
    <div className=" fixed z-20 max-h-[calc(100vh - 4rem)] overflow-y-auto  items-center top-0  bottom-0 left-[170px] h-full  w-1/4 m-0 flex flex-col bg-secondaryColor text-white shadow-lg">

    <div className="w-full text-center justify-center  place-content-center border-b-2 border-t-2 mb-[10%] border-primaryHighlight">
            <div className="w-full flex flex-col border-b-2 mb-[10%] border-primaryHighlight ">
            
            
    <button className="playerIcon hover:w-[90px] ease-in-out duration-150">
        <img src={require("../images/akuma.jpeg")} alt="" className="playerImage" />
        <span className="activeStatus"></span>
    </button>




                  <p className="text-primaryHighlight mt-3   font-primary font-bold text-xl ">Fightcade ID</p>
                  <span className="mb-5 font-bold ">CHAOS44</span>
            </div>
          {/*    EMAIL  */}
          <div className="flex flex-col w-4/5 border-b-2 mb-[10%] m-auto border-primaryHighlight">
              
              <p className="text-primaryHighlight  font-primary font-bold text-xl  mb-3 ">Email</p>
              <span>darius_hansley@yahoo.com</span>
        </div>

        <div className="flex flex-col m-auto w-4/5 border-b-2 mb-[10%] border-primaryHighlight ">
              
              <p className="text-primaryHighlight  font-primary font-bold text-xl  mb-3 ">Password</p>
              <span>**********</span>
        </div>


      </div>
          {/* GAMES */}
   
          <div className="w-full text-center justify-center  place-content-center border-b-2 mb-[10%] border-primaryHighlight">
            
            <div className="w-full flex flex-col ">
            
    
                  <p className="text-primaryHighlight font-primary font-bold text-xl ">GAMES</p>
                  <div className="space-x-24 mb-7">

                    <span className="mb-5 text-xs ">Smoothing / Input Lag</span>
                    <label for="dropdown">Select a color:</label>
<select id="dropdown" className="hidden">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>

                  </div>
                  {/* ---------------- */}
                <div className="flex flex-row mb-5 mx-[100px] justify-between ">

                  <span className=" text-xs ">Ranked Player</span>
                    <input type="checkbox" onclick="return false;"/>

                  </div>
                {/* ------------------ */}
                <div className="flex mb-5 mx-[100px] justify-between">

                  <span className=" text-xs ">Prevent Low Quality Changes</span>
                    <input type="checkbox" onclick="return false;"/>

                  </div>
                  {/* ---------------- */}
                  <div className="mb-5 flex flex-row mx-[100px] justify-between">

                  <span className="text-xs flex content-center justify-center ">Prevent Wifi/ VPN Challenges</span>
                    <input type="checkbox" onclick="return false;"/>

                  </div>
                  {/* ------------------ */}

                  <div className="flex flex-row mb-5 mx-[100px] justify-between">

                  <span className="text-xs ">Disable Live Spectactors</span>
                    <input type="checkbox" onclick="return false;"/>

                  </div>

                  <p className="text-s mb-5  font-secondary text-secondaryHighlight">This feature is only available for patrons</p>
                  <div className="">
                    <button className=" learnMore inline-block rounded-md  w-33 text-xl px-4 p-4 mb-20 font-patreon font-semibold" onClick={()=>navigate("learnmore")}>Learn More</button>
                  </div>
            </div>


      <div className="w-full text-center justify-center  place-content-center border-b-2 mb-[10%] border-primaryHighlight"></div>

            <button className=" learnMore inline-block rounded-md  w-22 text-l px-4 p-4 mb-10 font-patreon font-semibold" onClick={signUserOut}>Sign Out</button>

      </div>
          
      


    
    
  </div>
  )
  }






export default UserSettings
