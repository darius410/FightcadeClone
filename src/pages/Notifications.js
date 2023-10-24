import React from 'react'




const Notifications = ({showNotifications}) => {
  const notificationsClass = showNotifications ? 'notifications showNotifications' : 'notifications';


  return (
    <div id="notificationsContainer" className={`
     bg-secondaryColor 
      fixed 
      z-20 
      max-h-[calc(100vh - 4rem)] 
      overflow-y-auto 
      removeScroll 
      place-content-center 
      items-center 
      top-0
      
      bottom-0
      left-[170px]
      h-full  
      w-1/4 
      m-0 
      flex 
      flex-col 
      text-white
       shadow-lg
       ${notificationsClass}
       `}
       >
          <p className="font-primary font-bold">  Notifications </p>
   
      


    
    
  </div>
  )
  }






export default Notifications
