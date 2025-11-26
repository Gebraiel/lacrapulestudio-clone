import { motion, AnimatePresence } from "framer-motion";

const bgVariants = {
  initial: { y: 0 },
  exit: {
    y: "100%",
    transition: {
      duration: 1.2,
      ease: [0.65, 0.1, 0.3, 1],
    },
  },
};

const logoVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
          variants={bgVariants}
          initial="initial"
          animate="initial"
          exit="exit"
        >
          <motion.div variants={logoVariants} initial="initial" animate="animate">
            <span className="font-jetbrains tracking-[0.3em] text-sm uppercase">
              Loading Portfolio
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}