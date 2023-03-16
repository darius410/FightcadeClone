import { GiMagnifyingGlass, GiRingingBell } from "react-icons/gi";
import { VscGear } from "react-icons/vsc";
import PlayerIcon from './PlayerIcon'


const Sidebar = () => {
    return (
        <div className="fixed items-center top-0 left-0 h-screen w-44 m-0 flex flex-col bg-primaryColor text-white shadow-lg">
            <button className="h-28 w-28 mt-4 hover:w-32 ease-in-out duration-150">
                <img src="./logo.svg" alt="" /> 
            </button>
            <ul className="flex-col flex my-2 mx-auto text-primaryHighlight list-disc" >
                  <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc">
                  <button className="truncate"> Street Fighter Third Strike Champions of EX Layer  </button>
                </li>
                {/* SERVER TWO */}
                <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc">
                  <button className="truncate"> King Of Fighters Last Stand Trilogy </button>
                </li>
                {/* SERVER THREE */}
                <span className="serverStatus"></span>
                <li className="gameRoom my-5 rounded-full list-disc">
                  <button className="truncate">Marvel VS Capcom 2:Age Of New Heros </button>
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

export default Sidebar