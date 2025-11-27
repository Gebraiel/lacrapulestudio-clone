import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

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

export default function Loader({ show, setShow }) {
  const [progress, setProgress] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
      return;
    }

    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // 👇 تحريك الكاونتر حسب حالة التحميل
  useEffect(() => {
    if (!show) return;

    let interval;

    if (!isPageLoaded) {
      // طول ما الصفحة لسه بتحمّل: عد لحد 95 ووقف
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + 1;
        });
      }, 25);
    } else {
      // أول ما الصفحة تخلص تحميل: كمل من اللي انت واقف عليه لحد 100
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // ادّي فرصة صغيرة للـ 100 تبان وبعدين اقفل اللودر
            setTimeout(() => setShow(false), 300);
            return 100;
          }
          return prev + 1;
        });
      }, 20);
    }

    return () => clearInterval(interval);
  }, [show, isPageLoaded, setShow]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#1d1d1d] text-white"
          variants={bgVariants}
          initial="initial"
          animate="initial"
          exit="exit"
        >
          <motion.div
            className="size-full p-5"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <div className="container relative h-full flex items-center justify-center border border-white border-dashed">
              <div className="fill-white w-56 relative">
                <span className="counter absolute -right-8 -top-2 font-jetbrains w-8 text-right">
                  {progress}
                </span>
                <Logo />
              </div>
              <div className="absolute left-5 font-saans bottom-5 text-3xl max-w-[650px]">
                Creative studio based in Paris - merging CGI, mixed media and
                post-production to shape the aesthetics of today.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
