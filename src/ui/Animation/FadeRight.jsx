import { motion } from "framer-motion";

export default function FadeRight({children}) {

const fadeRightVarient = {
    hidden: { x:"-100%",opacity:0},
    visible: {
    opacity:1,
    x:0,
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
   <motion.span className='inline-block' variants={fadeRightVarient}  initial="hidden" whileInView='visible'>{children}</motion.span>
  )
}
