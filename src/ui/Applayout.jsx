import React, {  useState } from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { AnimationContext } from '../context/AnimationContext'
import Loader from './Loader'
import Main from './Main'

export default function Applayout() {
  const [start,setStart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  return (
    <AnimationContext.Provider value={{ start, setStart }}>
          <Loader show={isLoading} setShow={setIsLoading} />

          <Header/>
              <AnimatePresence  mode='layout'>
                  {
                    !isLoading && 
                    <Main key={location.pathname}>
                      <Outlet/>
                    </Main> 
                  }
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
    </AnimationContext.Provider>

  )
}
