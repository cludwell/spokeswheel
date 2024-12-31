import { useEffect, useRef, useState } from "react";
import { gloria } from "@/app/fonts";
import { motion } from "framer-motion";
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
    return () => document.removeEventListener('click', closeMenu)
  }, (showMenu));
  const closeMenu = e => setShowMenu(false);

  return (
    <>
      <div className="relative">
        <span
        className={`${gloria.className} scale-125 cursor-pointer md: btn btn-ghost`}
        onClick={openMenu}>
            plans
        </span>
        

      </div>
    </>
  );
}
