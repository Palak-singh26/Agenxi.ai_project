import { useState } from 'react';
import assets from '../assets/assets';
import Theme from './Theme';
import { motion } from "motion/react"

export default function Navbar({theme , settheme}) {
    const [sidebar,setsidebar ]=useState(false);
  return (
    <motion.div 
    initial={{opacity: 0 , y: -50}}
    animate={{opacity:1,y: 0}}
    transition={{duration: 0.6 , ease:'easeOut' }}
    className='flex justify-between items-center px-4 sm-px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 
    backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 '>
       
     <img src={theme === 'dark' ? assets.logo_dark: assets.logo } alt="logoimg"  className='w-36 sm-w-40' />

     <div className={`text-gray-700 dark:text-white sm:text-sm 
     ${!sidebar ? 'max-sm:w-0 overflow-hidden': 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[#4d8cea] max-sm:text-white
     max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <img src={assets.close_icon} alt="closeicon" className='w-5  absolute right-4 top-4 sm:hidden cursor-pointer'
        onClick={()=>setsidebar(false)}/>

         <a onClick={()=>setsidebar(false)} href="#" className=' sm:hover:border-b'>Home</a>
         <a onClick={()=>setsidebar(false)} href="#services" className=' sm:hover:border-b'>Services</a>
         <a onClick={()=>setsidebar(false)} href="#our-work" className=' sm:hover:border-b'>Our Work</a>
         <a onClick={()=>setsidebar(false)} href="#contact-us" className=' sm:hover:border-b'>Contact Us</a>

     </div>

     <div className='flex items-center gap-2 sm:gap-4'>

         <Theme theme={theme} settheme={settheme}/>

        <img src={theme==='dark'? assets.menu_icon_dark : assets.menu_icon} alt="menuicon" onClick={()=>setsidebar(true)}  className='w-8 sm:hidden'/>

        <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full
        cursor-pointer hover:scale-103 transition-all'>
            Connect <img src={assets.arrow_icon} width={14} alt="arrowimg" />
        </a>
     </div>
    </motion.div>
  )
}
