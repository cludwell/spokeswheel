import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, setOpen, children }) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`
          fixed inset-0 flex justify-center items-center transition-colors z-30 duration-300 max-h-screen w-screen
          ${open ? "visible bg-black/40" : "invisible"}
      `}
    >
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {open && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={`bg-base-200 rounded-xl shadow p-6 transition-all duration-300 mx-4
         `}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={flip}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
