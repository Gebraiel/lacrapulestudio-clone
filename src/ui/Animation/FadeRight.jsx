import React, { useContext, useEffect } from 'react'
import {  motion, useAnimation } from "framer-motion";
import { AnimationContext } from '../../context/AnimationContext';

export default function FadeRight({children}) {
      const controls = useAnimation();
    const {start} = useContext(AnimationContext);
    useEffect(()=>{
        if (start){
          controls.start("visible")
        }
    },[start])
const fadeRightVarient = {
    hidden: { x:"-100%",opacity:0},
    visible: {
    opacity:1,
    x:0,
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
    <span className='overflow-hidden inline-block'><motion.span className='inline-block' variants={fadeRightVarient}  initial="hidden" animate={controls}>{children}</motion.span></span>
  )
}
