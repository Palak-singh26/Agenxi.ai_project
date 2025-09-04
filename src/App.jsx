import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companylogo from './components/Companylogo'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer'
// import { motion } from "motion/react"

export default function App() {
  const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  const dotref = useRef(null)
  const outlineref = useRef(null)

  // ref for custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handelmousemove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    document.addEventListener('mousemove', handelmousemove)
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotref.current && outlineref.current) {
        dotref.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px,0)`
        outlineref.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px ,0)`
      }
      requestAnimationFrame(animate)
    }
    animate()
    return()=>{
      document.removeEventListener('mousemove',handelmousemove)
    }
  }, [])

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} settheme={settheme} />
      <Hero />
      <Companylogo />
      <Services />
      <OurWork />
      <Team />
      <ContactUs />
      <Footer theme={theme} />

      {/* custom cursor ring */}
      <div ref={outlineref} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]'
       style={{transition:'transform 0.1s ease-out ' }}>
      </div>

      {/* custom cursor ring */}
      <div ref={dotref} className='fixed top-0 left-0 h-3 w-3 rounded-full  bg-primary pointer-events-none z-[9999]' ></div>
    </div>
  )
}


// 2.29.12 min