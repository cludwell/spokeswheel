"use client";
import Image from "next/image";
import darkCampFire from "../../public/images/dark-campfire.jpg";
import WagonWheel from "./WagonWheel";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogInModal from "./LogInModal";
import SignUpModal from "./SignUpModal";
import { signOut, useSession } from "next-auth/react";
import { Amatic_SC, Gloria_Hallelujah } from "next/font/google";

const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const gloria = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const { data: session, status: loading } = useSession();
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
  if (session) console.log(session)

  const handleSignOut = async () => {
    const data = await signOut({redirect:false});
  }
  return (
    <div className=" max-w-screen-xl h-fit self-center flex flex-col items-center mx-auto bg-black">
      <Link
        href={"/"}
        className={amatic.className + ` z-10 text-white text-6xl`}
      >
        Spokeswheel Conference
      </Link>
      <Image
        src={darkCampFire}
        alt={`friends are gathered around a campfire`}
        className="max-w-screen-lg h-96 object-bottom object-cover absolute"
        width={2000}
        height={2000}
      />
      <div className=" w-32 z-10 svg-spin ease-in-out">
        <WagonWheel />
      </div>
      <ul
        className={
          gloria.className +
          ` menu menu-horizontal rounded-box z-10 w-full justify-around text-xl mt-40`
        }
      >
        <li>
          <Link href={`aboutus`}>about us</Link>
        </li>
        <li>
          <Link href={"plans2024"}>2024 plans</Link>
        </li>
        <li>
          <Link href={"contact"}>contact</Link>
        </li>
        {!session ? (
          <>
            <div>
              <LogInModal />
            </div>
            <div>
              <SignUpModal />
            </div>
            {/* <li>
            <span onClick={openMenu}>sign in</span>
            <ul
              className={`absolute right-0 top-16 bg-base-200 rounded-xl drop-shadow-2xl p-4 transition ease-in-out duration-400 w-64 z-10 border-solid border-[1px] border-gray-700 ${
                showMenu ? "scale-100" : "scale-0"
              }`}
              ref={ulRef}
            >
              <li>
                <a>log in</a>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
            </ul>
          </li> */}
          </>
        ) : (
          <>
            <li onClick={handleSignOut}>
              <span>log out</span>
            </li>
            <li>
              <Link href={"register"}>register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
