import { motion } from "framer-motion";

export default function Main({ children, className = "" }) {
  
  const slideDownVarient = {
    initial: {
      clipPath: "inset(0 0 100% 0)",
      opacity:1
    },
    animate: {
      clipPath: "inset(0)",
      opacity:1,
      transition: {
        duration: 1.5,
        ease: [0.65, 0.1, 0.3, 1],
      },
    },

  };
  return (
        <motion.main
        className={`min-h-screen overflow-hidden relative dark:bg-[#1d1d1d] bg-white
        ${className}`}
        variants={slideDownVarient}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.main>


  );
}
