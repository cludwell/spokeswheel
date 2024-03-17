import { motion } from "framer-motion";
import Link from "next/link";
import { amatic } from "../app/fonts";

export default function ConferenceName() {
  const text = "Spokeswheel Conference";
  const letters = text.split("");
  return (
    <Link href={"/"} className={amatic.className + ` z-10 text-white text-5xl sm:text-6xl flex flex-row `}>
      {letters.map((l, i) => (
        <motion.span
          className={`z-10 ${l === " " ? "w-2" : ''}`}
          initial={{ opacity: 0, x: 100, rotate: 720 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            delay: 0.5 + i * 0.15,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          key={l + i}
        >
          {l}
        </motion.span>
      ))}
    </Link>
  );
}
