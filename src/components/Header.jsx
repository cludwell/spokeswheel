"use client";
import Image from "next/image";
import darkCampFire from "../../public/images/dark-campfire.jpg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogInModal from "./LogInModal";
import SignUpModal from "./SignUpModal";
import { signOut, useSession } from "next-auth/react";
import { Amatic_SC, Gloria_Hallelujah } from "next/font/google";
import { useStore } from "@/store/ZustandProvider";
import IconUser from "./Icons/IconUser";
import IconGear from "./Icons/IconGear";
import Logo from "./Logo";
import { motion } from "framer-motion";
import ConferenceName from "./ConferenceName";

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
  const { user, fetchUserData, bookings, fetchUsersBookings, dismissUserData } =
    useStore((state) => ({
      user: state.user,
      fetchUserData: state.fetchUserData,
      bookings: state.bookings,
      fetchUsersBookings: state.fetchUsersBookings,
    }));
  const [showMenu, setShowMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);
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
  useEffect(() => setLoaded(true), []);
  useEffect(() => {
    const loadUser = async () => {
      fetchUserData();
      fetchUsersBookings();
    };
    if (session) loadUser();
  }, [session, fetchUserData, fetchUsersBookings]);

  const handleSignOut = async () => {
    const data = await signOut({ redirect: true, callbackUrl: "/" });
    await dismissUserData();
  };
  const seawood = bookings.length
    ? bookings.filter((b) => b.conferenceId == 1)[0]
    : null;
  return (
    <div
      className="flex flex-col items-center self-center max-w-screen-xl mx-auto h-fit"
      id="header"
    >
      {/* <motion.div
        className="z-10"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 1, duration: .5, type: "spring", stiffness: 200}}
      >
        <Link
          href={"/"}
          className={amatic.className + ` z-10 text-white text-6xl`}
        >
          Spokeswheel Conference
        </Link>
      </motion.div> */}
      <ConferenceName />
      <Image
        src={darkCampFire}
        alt={`friends are gathered around a campfire`}
        className={`absolute object-cover object-bottom max-w-screen-lg h-96 transition-all duration-1000 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        width={2000}
        height={2000}
        priority
      />

      <Logo />
      {/* <div className="z-10 w-32 ease-in-out svg-spin">
        <WagonWheel />
      </div> */}
      <ul
        className={
          gloria.className +
          ` menu menu-horizontal rounded-box z-10 w-full justify-around text-xl mt-40`
        }
      >
        <li>
          <Link href={`/aboutus`}>about us</Link>
        </li>
        <li>
          <Link href={"/plans2024"}>2024 plans</Link>
        </li>
        <li>
          <Link href={"/contact"}>contact</Link>
        </li>
        {!session ? (
          <>
            <div>
              <LogInModal />
            </div>
            <div>
              <SignUpModal />
            </div>
          </>
        ) : (
          <>
            <li>
              <Link href={"/registration"}>register 2024</Link>
            </li>
            <div
              onClick={openMenu}
              className="relative flex flex-row items-center "
            >
              <span className="scale-125 cursor-pointer btn btn-ghost">
                <IconGear />
              </span>
              <div
                className={`absolute right-0 top-16 bg-base-200 rounded-xl drop-shadow-2xl p-4 transition ease-in-out duration-400 w-fit z-10 border-2  border-slate-700 ${
                  showMenu ? " scale-100" : " scale-0"
                } ${gloria.className}`}
                ref={ulRef}
              >
                
                <div className="flex flex-row ml-4 text-xl ">
                  <IconUser />{" "}
                  <span className="ml-4 ">
                    {user?.firstName} {user?.lastName}
                  </span>
                  <div className="divider"></div>
                </div>
                <div className="flex flex-col w-full h-4 my-0">
                  <div className="divider"></div>
                </div>
                <ul className="w-64 gap-4 text-xl menu bg-base-200 rounded-box">
                  <li>
                    <Link href={"/updateinfo"} onClick={closeMenu}>
                      Update User Info
                    </Link>
                  </li>
                  <li>
                    <Link href={"/registration/update"} onClick={closeMenu}>
                      Update Registration
                    </Link>
                  </li>
                  {!!bookings.length && (
                    <li>
                      <Link
                        href={"/registration/cancel"}
                        onClick={closeMenu}
                      >{`Cancel Registration `}</Link>
                    </li>
                  )}
                  <li onClick={handleSignOut} className="text-xl btn btn-info">
                    Log out
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </ul>
    </div>
  );
}
