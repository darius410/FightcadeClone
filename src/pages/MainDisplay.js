import { AiFillTwitterCircle } from 'react-icons/ai'
import { MdFacebook } from 'react-icons/md'



const MainDisplay = () => (
    
  

     <div className="mainLayoutContainer flex flex-col font-secondary h-[1500px]"> 
  {/* container */}
     <div className="mainLayout flex flex-col place-items-center ">
          {/* TOP */}
            <div className="mt-16 flex mb-16"> 
             <img src="./fightcade.svg" alt=""  className="w-auto"/>
                
            </div>

            
            <div className="flex flex-col md:flex-row lg:flex-row text-green-200 ">
                <div className="">
                    <h1 className=" text-primaryHighlightDim text-3xl lg:text-5xl font-semibold ">WHAT IS FIGHTCADE ?</h1>
                    <h3 className=" text-xl mb-5 lg:text-4xl lg:mt-6 font-semibold hover:text-secondaryHighlight ">About</h3>
                </div>

                <div className=" md:mx-20 lg:mx-36 border-y-2 md:border-y-0 md:border-x-2 lg:border-x-2 md:border-solid lg:border-solid border-x-primaryHighlight lg:px-44">
                <h1 className=" text-primaryHighlightDim text-3xl lg:text-5xl font-semibold">FIRST TIME HERE ?</h1>
                    <h3 className="text-xl mb-5 lg:text-4xl lg:mt-6 font-semibold hover:text-secondaryHighlight">READ MANUAL</h3>
                </div>
                
                <div>
                <h1 className=" text-primaryHighlightDim text-3xl lg:text-5xl font-semibold">GOT QUESTIONS ?</h1>
                    <h3 className="text-xl mb-5 lg:text-4xl lg:mt-6 font-semibold hover:text-secondaryHighlight">F.A.Q</h3>
                </div>
            </div>
        

    </div>


    {/* BOTTOM */}
     <div className="mainLayoutBottom  flex flex-col place-items-center pt-32">
        <div className="flex flex-col lg:flex-row w-22 lg:justify-evenly items-center" > 
        <svg className="ml-8" xmlns="http://www.w3.org/2000/svg" width="290" height="40" viewbox="0 0 290 40" title="Fightcade beta" class="fc_logo"><g fill="#33f1e5">
            <path d="M227.3 39.995h-12.564l-6.17-13.1-6.4 13.1H189.6L208.566.01zM285.913 20.003l-4.947-8.569h9.055L288.618.01h-28.2l11.546 19.993-11.546 19.992h28.2l1.403-11.424h-9.055l4.947-8.568zM29.333 11.434L27.931.01H0l6.377 11.045h-.002l1.892 3.278H0v25.662h11.424V25.757h17.1l-8.269-14.323h9.078zM32.849.01h11.424v39.985H32.849zM110.355 0v14.285h-8.646V0H90.285v39.995h11.424V25.709h8.646v14.286h11.425V0h-11.425zM86.207 16.232H68.782l-.975 7.94h7.135A8.539 8.539 0 0 1 58.935 20a8.391 8.391 0 0 1 15.037-5.556l5.519-9.561c-2.325-2.773-6.6-4.7-10.93-4.847C57.526-.344 47.511 8.961 47.511 20A19.992 19.992 0 0 0 67.5 39.995c11.045 0 19.1-8.951 19.1-19.995a19.853 19.853 0 0 0-.393-3.768zM155.942 0h-29.677v11.424h7.986V39.98h11.424V11.424h8.864L155.942 0zM182.756 25.046a8.574 8.574 0 1 1 0-10.087l5.937-10.284a20 20 0 1 0 0 30.655z"></path>
        <path d="M243.461.01H230.1v39.985l13.361.005a20 20 0 0 0 0-39.99zm0 28.566h-1.933V11.434h1.933a8.571 8.571 0 0 1 0 17.142z">
            </path></g></svg>

            {/* middle X */}

                    <img width=" 60px" height="45px" className="mx-6" src="/X.png" alt="X"/>

            <p className="font-patreon text-white text-6xl font-medium tracking-widest lg:border-r-8 py-8 lg:pr-8">PATREON</p>


        </div>
       
                
            <h2 className="text-white text-5xl my-14 tracking-wider ">HELP US MAKE A BETTER FIGHTCADE</h2>

            <button className=" learnMore rounded-md  w-33 text-xl px-4 p-4 mb-20 font-patreon font-semibold">Learn More</button>

        

            <div className="flex flex-col lg:flex-row justify-around w-11/12 mx-22 text-white text-4xl border-t-2 border-primaryHighlight relative top-[70px] ">
                <div className=" relative top-12 mb-4 justify-center">Join Our Community
                <span className="discordIcon" ></span>
                </div>

                 <div className=" relative top-12  flex flex-col">Social Profiles
                    <div className='flex flew-row justify-center'> 
                        <SocialIcon className="hover:secondaryHighlight" icon={<AiFillTwitterCircle size='lg' />} />
                        <SocialIcon icon={<MdFacebook size='lg' />} />
                    </div>
               
                </div>

                

            </div>
    </div>

</div>
  

   
)
   


const SocialIcon = ({icon}) => (
    <button className="SocialIcon">
        {icon}
    </button>
)

export default MainDisplay