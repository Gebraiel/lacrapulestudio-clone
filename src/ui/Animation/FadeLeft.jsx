import React, { useContext, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import {AnimationContext} from '../../context/AnimationContext';

export default function FadeLeft({children}) {
  const controls = useAnimation();
    const {start} = useContext(AnimationContext);
    const ref = useRef(null);

    const inView = useInView(ref, { once: true });

    useEffect(()=>{
        if (start && inView){
          controls.start("visible")
        }
    },[start,inView])
const fadeLeftVarient = {
    hidden: { x:"100%",opacity:0},
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
   <motion.span ref={ref} className='inline-block' variants={fadeLeftVarient}  initial="hidden" animate={controls}>{children}</motion.span>
  )
}
