import React, { useEffect } from 'react'
import assets from '../assets/assets'

export default function Theme({theme ,settheme}) {

    useEffect(()=>{
        const prefersdarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        settheme(theme || (prefersdarkmode ? 'dark' : 'light'))
    },[])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme])
  return (
    <>
        <button>
            {theme === 'dark' ? 
            (
               <img onClick={()=> settheme('light')} src={assets.sun_icon} alt="sunicon" className='size-8.5 p-1.5
                border border-gray-500 rounded-full' />
            )
            :
            (
                <img onClick={()=>settheme('dark')} src={assets.moon_icon} alt="moonicon" className='size-8.5 p-1.5
                border border-gray-500 rounded-full' />
            )
            }
        </button>
    </>
  )
}
