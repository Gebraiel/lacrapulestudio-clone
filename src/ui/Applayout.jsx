import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'

export default function Applayout({}) {
  return (
    <>
        <Header/>
            <AnimatePresence >
                <Outlet/>
            </AnimatePresence>
        <Footer/>
    </>
  )
}
