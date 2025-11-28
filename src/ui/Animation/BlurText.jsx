import { motion } from "framer-motion";
export default function BlurText({children}) {
const BlurVarient = {
    hidden: { filter:"blur(20px)"},
    visible: {

    filter:"blur(0)",
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
   <motion.span className='inline-block' variants={BlurVarient}  initial="hidden" whileInView='visible'>{children}</motion.span>
  )
}
