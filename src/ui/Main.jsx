import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../context/AnimationContext";
import { useLocation } from "react-router-dom";

export default function Main({ children, className = "" }) {
  const { setStart } = useContext(AnimationContext);
  const slideDownVarient = {
    initial: {
      clipPath: "inset(0 0 100% 0)",
    },
    animate: {
      clipPath: "inset(0)",
      transition: {
        duration: 1.5,
        ease: [0.65, 0.1, 0.3, 1],
      },
    },
    exit: {
      clipPath: "inset(100% 0 0 0)",
      transition: {
      duration: 1.5,
      ease: [0.65, 0.1, 0.3, 1],
      },
    },
  };
  return (

        <motion.main
        className={`min-h-screen overflow-hidden dark:bg-[#1d1d1d] bg-white
         ${className}`}
        variants={slideDownVarient}
        initial="initial"
        animate="animate"
        exit="exit"

        onAnimationComplete={(def) => {setStart(true); console.log("Animation finished:", def);}}
      >
        {children}
      </motion.main>


  );
}
