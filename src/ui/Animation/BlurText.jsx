import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { AnimationContext } from "../../context/AnimationContext";

export default function BlurText({children}) {
    const controls = useAnimation();
    const {start} = useContext(AnimationContext);
    useEffect(()=>{
        if (start){
          controls.start("visible")
        }
    },[start])
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
    <span className='overflow-hidden inline-block'><motion.span className='inline-block' variants={BlurVarient}  initial="hidden" animate={controls}>{children}</motion.span></span>
  )
}
