import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { ThemeContext } from '../context/ThemeContext'
import { AnimationContext } from '../context/AnimationContext'

export default function Applayout() {
  const[isDark,setIsDark] = useState(false);
  const [start,setStart] = useState(false);

  return (
    <AnimationContext.Provider value={{ start, setStart }}>

      <ThemeContext.Provider value={{isDark,setIsDark}}>
          <Header/>
              <AnimatePresence >
                  <Outlet/>
              </AnimatePresence>
          <Footer/>
      </ThemeContext.Provider>
    </AnimationContext.Provider>

  )
}
