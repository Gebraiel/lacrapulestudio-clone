import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { AnimationContext } from "../context/AnimationContext";

export default function ClipLine() {
     const controls = useAnimation();
    const {start} = useContext(AnimationContext);
    console.log(start)
    useEffect(()=>{
        if (start){
          controls.start("visible")
        }
    },[start])
  const clipVarient = {
    hidden: { clipPath:"inset(0px 50%)"},
    visible: {
    clipPath:"inset(0px 0px)",
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
    <motion.div className='custom-line' variants={clipVarient}  initial="hidden" animate={controls} ></motion.div>

  )
}
