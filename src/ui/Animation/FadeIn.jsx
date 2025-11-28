import { motion } from "framer-motion";

export default function FadeIn({children}) {
const fadeInVarient = {
    hidden: { opacity:0},
    visible: {
    opacity:1,
    transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
    },
    },
};
  return (
   <motion.span className='inline-block' variants={fadeInVarient} initial="hidden" whileInView='visible'>{children}</motion.span>
  )
}
