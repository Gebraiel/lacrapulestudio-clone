import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { ThemeContext } from '../context/ThemeContext'
import { AnimationContext } from '../context/AnimationContext'

export default function Applayout() {
  const[isDark,setIsDark] = useState(false);
  const [start,setStart] = useState(false);
  const {location} = useLocation();
  return (
    <AnimationContext.Provider value={{ start, setStart }}>

      <ThemeContext.Provider value={{isDark,setIsDark}}>
          <Header/>
              <AnimatePresence  mode='wait'>
                  <Outlet key={location}/>
              </AnimatePresence>
          <svg hidden id="svg" viewBox="0 0 0 0" aria-hidden="true">
          <defs>
            <filter id="threshold">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
      </ThemeContext.Provider>
    </AnimationContext.Provider>

  )
}
