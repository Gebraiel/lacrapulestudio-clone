import React, { useContext, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import {AnimationContext} from '../../context/AnimationContext';

export default function FadeUp({children}) {
    const controls = useAnimation();
    const {start} = useContext(AnimationContext);
    const ref = useRef(null);

    const inView = useInView(ref, { once: true });

    useEffect(()=>{
        if (start && inView){
          controls.start("visible")
        }
    },[start,inView])
const fadeUpVarient = {
    hidden: { y:"100%",opacity:0},
    visible: {
    opacity:1,
    y:0,
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
    <span ref={ref} className='overflow-hidden inline-block'><motion.span className='inline-block' variants={fadeUpVarient}  initial="hidden" animate={controls}>{children}</motion.span></span>
  )
}
