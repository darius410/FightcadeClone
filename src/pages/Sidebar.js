
// ?MISC MISC MISC MISC MISC MISC
import PlayerIcon from '../PlayerIcon'
// import { useState } from "react";
// ?LOGIC LOGIC LOGIC LOGIC LOGIC
import { useRef,useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { authorize } from "../config/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { collection, collectionGroup ,doc} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getDocs ,deleteDoc } from 'firebase/firestore';
import { query, where } from "firebase/firestore";  
// ?ICONS ICONS ICONS ICONS ICONS ICONS 
import IconLogo from "../images/logo.svg"
import exit from "../images/exit.svg"
import mute from "../images/mute.svg"
import { GiMagnifyingGlass, GiRingingBell } from "react-icons/gi";
import { VscGear } from "react-icons/vsc";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDAtwr7cA0EvfKNL6o8gonuF8A6MUe3InU",
    authDomain: "fightcade-clone.firebaseapp.com",
    projectId: "fightcade-clone",
    storageBucket: "fightcade-clone.appspot.com",
    messagingSenderId: "749981233145",
    appId: "1:749981233145:web:6f0d31f5051da3ef059728",
    measurementId: "G-62Y66S0C70"
  };
    const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
    const db = getFirestore();

const Sidebar = ({toggleNotifications, toggleUserSettings }) => {
    
    const truncateString = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength).toUpperCase() + "..." : str.toUpperCase();
      };

      const removeGame = async (gameId) => {
        const deleteGameDocRef = doc(db, "Users", auth.currentUser.uid, "gamesarray", gameId);
    
        try {
          await deleteDoc(deleteGameDocRef);
          console.log(`Document with ID ${gameId} removed successfully`);
        } catch (error) {
          console.error("Error removing document: ", error);
        }
      };

        
    
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

           const user = auth.currentUser;
           console.log(user)
  


const [userArray, setUserArray] = useState([]);
useEffect(() => {
    const getArrayOfGames = async() => {       
        auth.onAuthStateChanged(async user => {

               if(user){
           
        const gamesCollection = doc(db,"Users",user.uid)
          const gamesCollectionRef = collection(gamesCollection, "gamesarray",)
        
              try{
                   const unsubscribe = onSnapshot(gamesCollectionRef, (snapshot) => {
                       
                   const dataArray = snapshot.docs.map((doc) => ({
                      ...doc.data(),
                      id: doc.id,
                      
              }));
                console.log(dataArray)
                   setUserArray(dataArray)
                   })
               
              }
             catch (err){
              console.log(err);
             };
             
          };
        })
        
        }
        
          getArrayOfGames();
         },[user, db]); 
    
  
 

    return (

        <div className="fixed max-h-[calc(100vh - 4rem)] overflow-y-auto removeScroll items-center top-0  bottom-0 left-0 h-full  w-44 m-0 flex flex-col bg-primaryColor text-white shadow-lg">

            <button className="h-28 w-28 mt-4 hover:w-32 ease-in-out duration-150">
                <img src={IconLogo} alt="" onClick={()=>navigate("maindisplay")}/> 
            </button>
               
            <ul className="flex-col flex my-2 mx-auto text-primaryHighlight list-disc"  >
                {console.log(userArray)}
                {userArray.map((item, index)=> (
                    <>

                    <div key={index}>
                    {/* SERVER ONE */}
                  <span className="serverStatus"></span>
                <li className="gameRoomContainer my-5 rounded-full list-disc group">
                       
                  <button  className="serverName mainHover" >{truncateString(item.id, 25)}</button>
                     <div className="icons">  
                        <img  alt=""  src={mute} className="group-hover:block icon-button serverIcons"  />
                        <img alt="" src={exit} className="mt-3  group-hover:block icon-button" onClick={() => removeGame(item.id)} />
                    </div>
                 
                </li>

                    </div>
               
                    </>
                   ))}
                   
              

        
                
               
                <SidebarIcon icon={<GiMagnifyingGlass size='lg' />} alt="Search Icon" onClick={()=>navigate("collections")}/>
            </ul>
        

                

            <div className="border-t-2 w-full h-56 mb-[30%] border-primaryHighlight">

                        

                <SidebarIcon icon={<GiRingingBell size='lg' onClick={toggleNotifications}   />} />
                 <SidebarIcon icon={<VscGear size='lg' />} onClick={toggleUserSettings} />
                <PlayerIcon />
            </div>

        

          



        </div>


        

    );   


};


const SidebarIcon = ({icon,onClick}) => (
    <button className="sideBarIcon" onClick={onClick}  >
        {icon}
       
    </button>

    
)


export default Sidebar

