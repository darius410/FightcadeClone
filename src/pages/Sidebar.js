
// ?MISC MISC MISC MISC MISC MISC
import PlayerIcon from '../PlayerIcon'
import { useState } from "react";
// ?LOGIC LOGIC LOGIC LOGIC LOGIC
import { useRef } from "react";
import { signOut } from "firebase/auth";
import { authorize } from "../config/firebaseconfig";
import { useNavigate } from "react-router-dom";
// ?ICONS ICONS ICONS ICONS ICONS ICONS 
import IconLogo from "../images/logo.svg"
import exit from "../images/exit.svg"
import mute from "../images/mute.svg"
import { GiMagnifyingGlass, GiRingingBell } from "react-icons/gi";
import { VscGear } from "react-icons/vsc";

const Sidebar = ({ toggleNotifications, toggleUserSettings }) => {
    
    

        toggleNotifications();
    

   
    

   

        toggleUserSettings();
    
   
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
    
   
    


    // const [servername, setServerName] = useState(true);
    const servername = useRef(null);
    const secondServer = useRef(null);
    const thirdServer =  useRef(null);
     
    const onFile = () => {
        servername.current.innerText = servername.current.innerText.slice(0, 28).toUpperCase() + "...";
        secondServer.current.innerText = secondServer.current.innerText.slice(0, 28).toUpperCase() + "...";
        thirdServer.current.innerText = thirdServer.current.innerText.slice(0, 28).toUpperCase() + "...";

    };

    return (

        <div className="fixed max-h-[calc(100vh - 4rem)] overflow-y-auto removeScroll items-center top-0  bottom-0 left-0 h-full  w-44 m-0 flex flex-col bg-primaryColor text-white shadow-lg">

            <button className="h-28 w-28 mt-4 hover:w-32 ease-in-out duration-150">
                <img src={IconLogo} alt="" onClick={()=>navigate("maindisplay")}/> 
            </button>

            <ul className="flex-col flex my-2 mx-auto text-primaryHighlight list-disc"  >


                {/* SERVER ONE */}
                  <span className="serverStatus"></span>
                <li className="gameRoomContainer my-5 rounded-full list-disc group"onLoad={onFile}>
                   
                  
                  <button  className="serverName mainHover"  id="serverOne" ref={servername}>Street Fighter III 3rd Strike:Fight For Japan </button>
                     <div className="icons">  
                        <img alt=""  src={mute} className="group-hover:block icon-button" />
                        <img alt="" src={exit} className="mt-3  group-hover:block icon-button"  />
                    </div>
                 
                </li>

                {/* SERVER TWO */}
             
                <span className="serverStatus"></span>
                <li className="gameRoomContainer my-5 rounded-full list-disc group"onLoad={onFile}>

                  <button  className="serverName mainHover"  id="serverOne" ref={secondServer}>The Last Blade 2 / bakumatsu Roman - Dai Ni Maku Gekku No Kenshi  </button>
                     <div className="icons">  
                        <img alt=""  src={mute} className=" top-16 group-hover:block icon-button" />
                        <img alt="" src={exit} className=" mt-3 group-hover:block icon-button"  />
                    </div>
                 
                </li>
                
                {/* SERVER THREE */}
               <span className="serverStatus"></span>
                <li className="gameRoomContainer my-5 rounded-full list-disc group"onLoad={onFile}>
                   
                  
                    <img alt=""  src="./mute.svg" className=" hidden w-auto h-6 absolute left-[103px] top-16 group-hover:block" />
                  <button  className="serverName mainHover"  id="serverOne" ref={thirdServer}>Rage Of Dragons (NGM -264?) </button>
                     <div className="icons">  
                        <img alt=""  src={mute} className=" top-16 group-hover:block icon-button" />
                        <img alt="" src={exit} className=" mt-3 group-hover:block icon-button"  />
                    </div>
                 
                </li>
                
               
                <SidebarIcon icon={<GiMagnifyingGlass size='lg' />} alt="Search Icon" onClick={()=>navigate("collections")}/>
            </ul>
        

                

            <div className="border-t-2 w-full h-56 mb-[30%] border-primaryHighlight">

                        

                <SidebarIcon icon={<GiRingingBell size='lg' onClick={toggleNotifications}   />} />
                 <SidebarIcon icon={<VscGear size='lg' />} onClick={toggleUserSettings} />
                <PlayerIcon />
            </div>



            <button onClick={signUserOut}>Sign Out</button>



        </div>


        

    );   


};


const SidebarIcon = ({icon,onClick}) => (
    <button className="sideBarIcon" onClick={onClick}  >
        {icon}
       
    </button>

    
)


export default Sidebar

