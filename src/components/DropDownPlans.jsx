import { useEffect, useRef, useState } from "react";
import { gloria } from "@/app/fonts";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DropDownPlans() {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = (e) => {
      if (!ulRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);
  const closeMenu = (e) => setShowMenu(false);

  return (
    <>
      <div className="relative">
        <span
          className={`${gloria.className} cursor-pointer md: btn btn-ghost md:text-xl font-bold`}
          onClick={openMenu}
        >
          plans
        </span>
        {/* this div is the container for drop down contents */}
        <motion.div
          className={`${gloria.className} absolute left-4 top-16 bg-base-200 rounded-xl drop-shadow-2xl transition ease-in-out duration-400 z-10 border-2 border-slate-700 min-w-60`}
          ref={ulRef}
          initial="closed"
          animate={showMenu ? "open" : "closed"}
          variants={wrapperVariants}
          style={{ originY: "top" }}
        >
          {/* first item */}
          <motion.div
            className="flex flex-row p-2 m-2 text-base transition-colors rounded-lg cursor-pointer hover:bg-gray-700"
            variants={itemVariants}
          >
            <Link href={"plans2025"} onClick={closeMenu} className="ml-4">
              2025 Conference
            </Link>
          </motion.div>

          {/* second item */}
          <motion.div
            className="flex flex-row p-2 m-2 text-base transition-colors rounded-lg cursor-pointer hover:bg-gray-700"
            variants={itemVariants}
          >
            <Link href={"plans2024"} onClick={closeMenu} className="ml-4">
              Last year, 2024
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: false,
      staggerChildren: 0.1,
      delay: 0.7,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
