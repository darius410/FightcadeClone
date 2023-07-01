import { GiMagnifyingGlass, GiRingingBell } from "react-icons/gi";
import { VscGear } from "react-icons/vsc";
import PlayerIcon from '../PlayerIcon'
// import { useState } from "react";
import { useRef } from "react";



const Sidebar = () => {
   
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
                <img src="./logo.svg" alt="" /> 
            </button>
            <ul className="flex-col flex my-2 mx-auto text-primaryHighlight list-disc"  >
                {/* SERVER ONE */}
                  <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc group"onLoad={onFile}>
                    <img alt="" src="exit.svg" className=" hidden w-auto h-6 absolute left-[103px;] top-3 group-hover:block"  />
                  <button  className="serverName"  id="serverOne" ref={servername}>Street Fighter III 3rd Strike:Fight For Japan </button>
                    <img alt=""  src="./mute.svg" className=" hidden w-auto h-6 absolute left-[103px] top-16 group-hover:block" />
                    
                </li>
          

                {/* SERVER TWO */}
                <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc group" onLoad={onFile}>
                    <img alt="" src="exit.svg" className=" hidden w-auto h-6 absolute left-[103px;] top-3 group-hover:block"  />
                    <button className="serverName" id="serverTwo" ref={secondServer} > The Last Blade 2 / bakumatsu Roman - Dai Ni Maku Gekku No Kenshi  </button>
                    <img alt=""  src="./mute.svg" className=" hidden w-auto h-6 absolute left-[103px] top-16 group-hover:block" />
                    
                </li>
                {/* SERVER THREE */}
                <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc group" onLoad={onFile}>
                    <img alt="" src="exit.svg" className=" hidden w-auto h-6 absolute left-[103px;] top-3 group-hover:block"  />
                  <button className="serverName" id="serverThree" ref={thirdServer} >Rage Of Dragons (NGM -264?) </button>
                    <img alt=""  src="./mute.svg" className=" hidden w-auto h-6 absolute left-[103px] top-16 group-hover:block" />
                    
                </li>
                
               
                <SidebarIcon icon={<GiMagnifyingGlass size='lg' />} />
            </ul>
        

                

            <div className="border-t-2 w-full h-56 mb-[30%] border-primaryHighlight">
                <SidebarIcon icon={<GiRingingBell size='lg' />} />
                 <SidebarIcon icon={<VscGear size='lg' />} />
                <PlayerIcon />
            </div>

        </div>

    );
};




const SidebarIcon = ({icon}) => (
    <button className="sideBarIcon">
        {icon}
        
    </button>

    
)


export default Sidebar

