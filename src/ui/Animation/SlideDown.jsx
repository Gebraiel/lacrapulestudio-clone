import React, { useContext } from 'react'
import { motion } from "framer-motion";
import {AnimationContext} from '../../context/AnimationContext';

export default function SlideDown({children}) {
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
    <motion.main className='inline-block' variants={slideDownVarient}  initial="hidden" animate="visible"  onAnimationComplete={() => setStart(true)}>{children}</motion.main>
  )
}
