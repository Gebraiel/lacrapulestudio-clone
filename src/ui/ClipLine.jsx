import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";

export default function ClipLine() {

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
    <motion.div className='custom-line' variants={clipVarient}  initial="hidden" whileInView='visible' ></motion.div>

  )
}
