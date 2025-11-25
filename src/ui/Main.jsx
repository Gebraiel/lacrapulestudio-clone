import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../context/AnimationContext";
import { ThemeContext } from "../context/ThemeContext";
import PageTransition from "./Animation/PageTransition";

export default function Main({ children, className = "" }) {
  const { setStart } = useContext(AnimationContext);
  const { isDark } = useContext(ThemeContext);
const slideDownVarient = {
  initial: {
    clipPath: "inset(0 0 100% 0)",
  },
  animate: {
    clipPath: "inset(0)",
    transition: {
      duration: 0.98,
      ease: [0.641, 0.16, 0.3, 1],
    },
  },
  exit: {
    clipPath: "inset(100% 0 0 0)",
    transition: {
      duration: 0.98,
      ease: [0.641, 0.16, 0.3, 1],
    },
  },
};
  return (
    <>
        <motion.main
        className={`min-h-screen border overflow-hidden border-white ${
          isDark ? "bg-[#1d1d1d]" : "bg-white "
        } ${className}`}
        variants={slideDownVarient}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={() => setStart(true)}
      >
        {children}
      </motion.main>
      {/* <PageTransition onComplete={() => {}} /> */}

  </>
  );
}
