import { useSession, signOut } from "next-auth/react";
import IconGear from "./Icons/IconGear";
import IconUser from "./Icons/IconUser";
import { useEffect, useState, useRef } from "react";
import { gloria } from "@/app/fonts";
import { useStore } from "@/store/ZustandProvider";
import LogInModal from "./LogInModal";
import SignUpModal from "./SignUpModal";
import Link from "next/link";
import IconClipboard from "./Icons/IconClipboard";
import IconClose from "./Icons/IconClose";
import { motion } from "framer-motion";
import IconId from "./Icons/IconId";
import IconUserProfile from "./Icons/IconUserProfile";

export default function DropDownMenu() {
  const { data: session, status: loading } = useSession();
  const { user, fetchUserData, bookings, fetchUsersBookings, dismissUserData } =
    useStore((state) => ({
      user: state.user,
      fetchUserData: state.fetchUserData,
      bookings: state.bookings,
      fetchUsersBookings: state.fetchUsersBookings,
    }));
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
  const handleSignOut = async () => {
    const data = await signOut({ redirect: true, callbackUrl: "/" });
    await dismissUserData();
  };
  // const seawood = bookings.length
  //   ? bookings.filter((b) => b.conferenceId == 1)[0]
  //   : null;
  return (
    <>
      {!session ? (
        <>
          <LogInModal />
          <SignUpModal />
        </>
      ) : (
        <div className="relative">
          <span
            className="cursor-pointer md:scale-125 btn btn-ghost"
            onClick={openMenu}
          >
            <IconUser />
          </span>
          <motion.div
            className={`${gloria.className} absolute right-4 top-16 bg-base-200 rounded-xl drop-shadow-2xl p-4 transition ease-in-out duration-400 w-fit z-10 border-2  border-slate-700 min-w-40  `}
            ref={ulRef}
            initial="closed"
            animate={showMenu ? "open" : "closed"}
            variants={wrapperVariants}
            style={{ originY: "top" }}
          >
            <motion.div
              className="flex flex-row ml-4 text-xl "
              variants={itemVariants}
            >
              <IconUserProfile />
              <span className="ml-4 ">
                {user?.firstName} {user?.lastName}
              </span>
            </motion.div>
            <motion.div
              className="divider"
              variants={itemVariants}
            ></motion.div>
            <motion.ul
              className="w-64 bg-base-200"
              variants={wrapperVariants}
              initial={wrapperVariants.closed}
            >
              <motion.li
                variants={itemVariants}
                className="flex flex-row p-2 m-2 text-base transition-colors rounded-lg cursor-pointer hover:bg-gray-700"
              >
                <IconId />
                <Link
                  href={"/updateinfo"}
                  onClick={closeMenu}
                  className="ml-4 "
                >
                  Update User Info
                </Link>
              </motion.li>
              {!!bookings.length ? (
                <>
                  <motion.li
                    variants={itemVariants}
                    className="flex flex-row p-2 m-2 text-base transition-colors rounded-lg cursor-pointer hover:bg-gray-700"
                  >
                    <IconClipboard />
                    <Link
                      href={"/registration/update"}
                      onClick={closeMenu}
                      className="ml-4 "
                    >
                      Update Registration
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex flex-row p-2 m-2 text-base transition-colors rounded-lg cursor-pointer hover:bg-gray-700"
                  >
                    <IconClose />
                    <Link
                      href={"/registration/cancel"}
                      onClick={closeMenu}
                      className="ml-4 "
                    >{`Cancel Registration `}</Link>
                  </motion.li>
                </>
              ) : (
                <motion.li
                  variants={itemVariants}
                  className="flex flex-row p-2 m-2 text-base transition-colors rounded-lg cursor-pointer hover:bg-gray-700"
                >
                  <IconClipboard />
                  <Link
                    href={"/registration"}
                    onClick={closeMenu}
                    className="ml-4 "
                  >
                    Register!
                  </Link>
                </motion.li>
              )}
              <motion.li
                variants={itemVariants}
                onClick={handleSignOut}
                className="w-full text-xl btn btn-info"
              >
                Log out
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      )}
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
