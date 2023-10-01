 // TODO Find a way to ref images in storage by using a url in the table at firestore

import { useState,useEffect } from "react"
import {db} from '../config/firebaseconfig'
import Sidebar from './Sidebar'
import {getDocs ,collection}from "firebase/firestore"


const MainDisplay = () => {

    const [gamesList, setGamesList] = useState([]);

    const gamesCollection = collection(db, "Games");
   useEffect(() => {
    const getListOfGames = async() => {
        try{
             const data = await getDocs(gamesCollection);
             const filteredGames = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
        }));
             setGamesList(filteredGames)
        }
       catch (err){
        console.log(err);
       };
       
    };
    getListOfGames();
   },[]); 
    
   const [gemsList, setGemsList] = useState([]);

   const gemsCollection = collection(db, "Hidden Gems");
  useEffect(() => {
   const getListOfGems = async() => {
       try{
            const data = await getDocs(gemsCollection);
            const filteredGems = data.docs.map((doc) => ({
               ...doc.data(),
               id: doc.id,
       }));
            setGemsList(filteredGems)
       }
      catch (err){
       console.log(err);
      };
      
   };
   getListOfGems();
  },[]); 
   
return (
    <>
<Sidebar/>
<div className="mainLayoutContainer flex flex-col font-secondary h-full"> 
  {/* container */}
     <div className="mainLayout flex flex-col place-items-center ">
          {/* TOP */}
          
          
          <div className="flex flex-col lg:flex-row w-22 lg:justify-evenly items-center" > 
        <svg className="ml-8" xmlns="http://www.w3.org/2000/svg" width="290" height="40" viewbox="0 0 290 40" title="Fightcade beta" class="fc_logo"><g fill="#33f1e5">
            <path d="M227.3 39.995h-12.564l-6.17-13.1-6.4 13.1H189.6L208.566.01zM285.913 20.003l-4.947-8.569h9.055L288.618.01h-28.2l11.546 19.993-11.546 19.992h28.2l1.403-11.424h-9.055l4.947-8.568zM29.333 11.434L27.931.01H0l6.377 11.045h-.002l1.892 3.278H0v25.662h11.424V25.757h17.1l-8.269-14.323h9.078zM32.849.01h11.424v39.985H32.849zM110.355 0v14.285h-8.646V0H90.285v39.995h11.424V25.709h8.646v14.286h11.425V0h-11.425zM86.207 16.232H68.782l-.975 7.94h7.135A8.539 8.539 0 0 1 58.935 20a8.391 8.391 0 0 1 15.037-5.556l5.519-9.561c-2.325-2.773-6.6-4.7-10.93-4.847C57.526-.344 47.511 8.961 47.511 20A19.992 19.992 0 0 0 67.5 39.995c11.045 0 19.1-8.951 19.1-19.995a19.853 19.853 0 0 0-.393-3.768zM155.942 0h-29.677v11.424h7.986V39.98h11.424V11.424h8.864L155.942 0zM182.756 25.046a8.574 8.574 0 1 1 0-10.087l5.937-10.284a20 20 0 1 0 0 30.655z"></path>
        <path d="M243.461.01H230.1v39.985l13.361.005a20 20 0 0 0 0-39.99zm0 28.566h-1.933V11.434h1.933a8.571 8.571 0 0 1 0 17.142z">
            </path></g></svg>

            {/* middle X */}

                  
                   <img width=" 60px" height="45px" className="mx-6" src={require ("../images/X.png")} alt="X"/>

                  
                    

            <p className="font-patreon text-white text-6xl font-medium tracking-widest lg:border-r-8 py-8 lg:pr-8">PATREON</p>


        </div>
       
                
            <h2 className="text-white text-5xl my-14 tracking-wider ">HELP US MAKE A BETTER FIGHTCADE</h2>

          

         
    </div>

    <div className="mainLayoutBottom  flex flex-col pt-3">
        <div className=" w-full flex flex-col text-left mx-5"> 
        <h2 classname="font-bold">POPULAR GAMES</h2>
       <ul className="flex flex-row gap-1"> 
       {gamesList.map((game) => (
         <li className="text-center rounded-lg w-[200px] h-[150px]" style={{ 
           // backgroundImage:`url(${game.imageUrl}`,
           backgroundColor:`red`,
           
                    }}> 
                    <p>{game.playerCount}</p>
                    <h3 className="">{game.title}</h3>
             </li>
              ))}
        </ul>
        </div>


        <div className=" w-full flex flex-col text-left"> 
        <h2 className="font-bold">HIDDEN GEMS</h2>
       <ul className="flex flex-row gap-1 md:items-stretch"> 
       {gemsList.map((gem) => (
         <li className="text-center rounded-lg h-[150px] flex-1 min-w-[200px]" style={{ 
           // backgroundImage:`url(${game.imageUrl}`,
           backgroundColor:`red`,
           
                    }}> 
                   
                    <h3 className="">{gem.title}</h3>
             </li>
              ))}
        </ul>
        </div>
        
    </div>

  

</div>
  
</>
)
}
   



export default MainDisplay