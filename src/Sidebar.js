import { GiMagnifyingGlass, GiRingingBell } from "react-icons/gi";
import { VscGear } from "react-icons/vsc";
import PlayerIcon from './PlayerIcon'



const Sidebar = () => {
    return (
        <div className="fixed items-center top-0 left-0 h-screen  w-44 m-0 flex flex-col bg-primaryColor text-white shadow-lg">
            <button className="h-28 w-28 mt-4 hover:w-32 ease-in-out duration-150">
                <img src="./logo.svg" alt="" /> 
            </button>
            <ul className="flex-col flex my-2 mx-auto text-primaryHighlight list-disc" >
                  <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc group">
                    <img alt="" src="exit.svg" className=" hidden w-auto h-6 relative left-[103px;] top-3 group-hover:block"  />
                  <button className="serverName" id="serverOne"> Street Fighter Third Strike Champions of EX Layer  </button>
                    <img alt=""  src="./mute.svg" className=" hidden w-auto h-6 relative left-8 top-16 group-hover:block" />
                    
                </li>
          

                {/* SERVER TWO */}
                <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc group">
                    <img alt="" src="exit.svg" className=" hidden w-auto h-6 relative left-[103px;] top-3 group-hover:block"  />
                    <button className="serverName line-clamp-3" id="serverTwo"> The Last Blade 2 / bakumatsu of crisis  </button>
                    <img alt=""  src="./mute.svg" className=" hidden w-auto h-6 relative left-8 top-16 group-hover:block" />
                    
                </li>
                {/* SERVER THREE */}
                <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc group">
                    <img alt="" src="exit.svg" className=" hidden w-auto h-6 relative left-[103px;] top-3 group-hover:block"  />
                  <button className="serverName line-clamp-3" id="serverThree">Marvel VS Capcom 2 New Age Of Heroes </button>
                    <img alt=""  src="./mute.svg" className=" hidden w-auto h-6 relative left-8 top-16 group-hover:block" />
                    
                </li>
                
               
                <SidebarIcon icon={<GiMagnifyingGlass size='lg' />} />
            </ul>
        

                

            <div className="border-t-2 w-full border-primaryHighlight">
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
const serverOneText = document.getElementById('serverOne').innerText;
const serverTwoText = document.getElementById('serverTwo').innerText;
const serverThreeText = document.getElementById('serverThree').innerText;

//Target the text that we want

const newServerOne = serverOneText.slice(0, 32) + "...";
const newServerTwo = serverTwoText.slice(0, 32) + "...";
const newServerThree = serverThreeText.slice(0, 32) + "...";

console.log(newServerOne);
console.log(newServerTwo);
console.log(newServerThree);
document.getElementById('serverName').innerText = newText;

export default Sidebar

