import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { AnimationContext } from '../context/AnimationContext'
import Loader from './Loader'

export default function Applayout() {
  const [start,setStart] = useState(false);
  const {location} = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
      return;
    }

    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <AnimationContext.Provider value={{ start, setStart }}>
          <Loader show={isLoading} />

          <Header/>
              <AnimatePresence  mode='wait'>
                  <Outlet/>
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
