import React, { useContext } from 'react'
import { motion } from "framer-motion";
import {AnimationContext} from '../../context/AnimationContext';
import { ThemeContext } from '../../context/ThemeContext';

export default function SlideDown({children,className=''}) {
    const {setStart} = useContext(AnimationContext);
    const {isDark} = useContext(ThemeContext);
const slideDownVarient = {
    // hidden: { y:"100%"},
    // visible: {

    //     y:0,
    //     transition: {
    //         duration:1
    //     },
    // },

};
  return (
    <motion.main className={`min-h-screen ${isDark ? 'bg-[#1d1d1d]' : 'bg-white '} ${className}`} variants={slideDownVarient}  initial="hidden" animate="visible"  onAnimationComplete={() => setStart(true)}>{children}</motion.main>
  )
}
