import React, { useContext, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import {AnimationContext} from '../../context/AnimationContext';
export default function BlurText({children}) {
  const controls = useAnimation();
    const {start} = useContext(AnimationContext);
    const ref = useRef(null);

    const inView = useInView(ref, { once: true });

    useEffect(()=>{
        if (start && inView){
          controls.start("visible")
        }
    },[start,inView])
const BlurVarient = {
    hidden: { filter:"blur(5px)",opacity:0},
    visible: {
    opacity:1,
    filter:"blur(0)",
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
   <motion.span ref={ref} className='inline-block' variants={BlurVarient}  initial="hidden" animate={controls}>{children}</motion.span>
  )
}
