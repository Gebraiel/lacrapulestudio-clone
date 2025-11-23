import React, { useContext, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import {AnimationContext} from '../../context/AnimationContext';

export default function FadeIn({children}) {
    const controls = useAnimation();
    const {start} = useContext(AnimationContext);
    const ref = useRef(null);
    const inView = useInView(ref);
    useEffect(()=>{
        if (start && inView){
          controls.start("visible")
        }
    },[start,inView])
const fadeInVarient = {
    hidden: { opacity:0},
    visible: {
    opacity:1,
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
   <motion.span ref={ref} className='inline-block' variants={fadeInVarient} initial="hidden" animate={controls}>{children}</motion.span>
  )
}
