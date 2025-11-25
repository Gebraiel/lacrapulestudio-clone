import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AnimationContext } from "../../context/AnimationContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function PageTransition({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const { setStart } = useContext(AnimationContext);
  const { isDark } = useContext(ThemeContext);


  const variants = {
    initial: { y: "-100%" },
    animate: {
      y: "0%",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      y: "100%",
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleComplete = () => {
    setVisible(false);
    setStart(true);
    if (onComplete) onComplete();
  };

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={handleComplete}
    >
      <motion.div
        className={`w-full h-full ${isDark ? 'bg-[#1d1d1d]':'bg-white'}`}
        variants={variants}
      />
    </motion.div>
  );
}