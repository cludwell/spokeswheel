import { motion } from "framer-motion";
import Link from "next/link";
import { Amatic_SC } from "next/font/google";

const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});

export default function ConferenceName() {
  const text = "Spokeswheel Conference";
  const letters = text.split("");
  return (
    <Link href={"/"} className={amatic.className + ` z-10 text-white text-6xl flex flex-row `}>
      {letters.map((l, i) => (
        <motion.span
          className={`z-10 ${l === " " ? "w-2" : ''}`} // Adjust space handling
          initial={{ opacity: 0, x: 100, rotate: 720 }} // Start rotated -90 degrees
          animate={{ opacity: 1, x: 0, rotate: 0 }} // End at rotate: 0 for upright position
          transition={{
            delay: 0.5 + i * 0.15, // Slightly faster start and consistent stagger
            type: "spring",
            stiffness: 100,
            damping: 10, // Added damping for a bit of overshoot control
          }}
          key={l + i}
        >
          {l}
        </motion.span>
      ))}
    </Link>
  );
}
