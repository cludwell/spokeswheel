import { motion } from "framer-motion";
import WagonWheel from "./WagonWheel";
export default function Logo() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        delay: 1,
        // type: "spring",
      }}
      className="z-10 w-32 rounded-full "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "linear" }}
      >
        <WagonWheel />
      </motion.div>
    </motion.div>
  );
}
