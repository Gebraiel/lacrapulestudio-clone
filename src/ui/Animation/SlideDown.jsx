import React, { useContext } from 'react'
import { motion } from "framer-motion";
import {AnimationContext} from '../../context/AnimationContext';

export default function SlideDown({children,bg='white'}) {
    const {setStart} = useContext(AnimationContext);
const slideDownVarient = {
    hidden: { y:"-100%"},
    visible: {
    
        y:0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 120,
        },
    },

};
  return (
    <motion.main className="min-h-screen 3xl:pt-32 pt-15" style={{backgroundColor:bg}} variants={slideDownVarient}  initial="hidden" animate="visible"  onAnimationComplete={() => setStart(true)}>{children}</motion.main>
  )
}
