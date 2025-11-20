import React from 'react'
import { easeInOut, motion } from "framer-motion";

export default function FadeUp({children}) {
const fadeUpVarient = {
    hidden: { y:"100%",opactiy:0},
    visible: {
    opacity:1,
    y:"0",
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
    <span className='overflow-hidden inline-block'><motion.span className='inline-block' variants={fadeUpVarient}  initial="hidden" animate="visible">{children}</motion.span></span>
  )
}
