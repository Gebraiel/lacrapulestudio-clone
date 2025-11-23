import React, { useContext } from 'react'
import { motion } from "framer-motion";
import {AnimationContext} from '../../context/AnimationContext';
import { ThemeContext } from '../../context/ThemeContext';

export default function SlideDown({children,bg='white'}) {
    const {setStart} = useContext(AnimationContext);
    const {isDark} = useContext(ThemeContext);
const slideDownVarient = {
    hidden: { y:"-100%"},
    visible: {

        y:0,
        transition: {
            duration:1
        },
    },

};
  return (
    <motion.main className={`min-h-screen 3xl:pt-32 pt-15 ${isDark ? 'bg-[#1d1d1d]' : 'bg-white '}`} variants={slideDownVarient}  initial="hidden" animate="visible"  onAnimationComplete={() => setStart(true)}>{children}</motion.main>
  )
}
