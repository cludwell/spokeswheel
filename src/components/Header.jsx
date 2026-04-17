"use client";
import Image from "next/image";
import darkCampFire from "../../public/images/dark-campfire.jpg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useStore } from "@/store/ZustandProvider";
import Logo from "./Logo";
import ConferenceName from "./ConferenceName";
import { gloria } from "../app/fonts";
import DropDownMenu from "./DropDownMenu";
import DropDownPlans from "./DropDownPlans";
import DropDownInfo from "./DropDownInfo";

export default function Header() {
  const { data: session, status: loading } = useSession();
  const { user, fetchUserData, bookings, fetchUsersBookings, dismissUserData } =
    useStore((state) => ({
      user: state.user,
      fetchUserData: state.fetchUserData,
      bookings: state.bookings,
      fetchUsersBookings: state.fetchUsersBookings,
    }));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
  useEffect(() => {
    const loadUser = async () => {
      fetchUserData();
      fetchUsersBookings();
    };
    if (session) loadUser();
  }, [session, fetchUserData, fetchUsersBookings]);
  const bookedThisYear = bookings?.find((b) => b.conferenceId == 3);
  return (
    <div
      className="flex flex-col items-center self-center w-screen max-w-screen-xl mx-auto h-fit"
      id="header"
    >
      <ConferenceName />
      <Image
        src={darkCampFire}
        alt={`friends are gathered around a campfire`}
        className={`absolute object-cover object-bottom max-w-screen-sm md:max-w-screen-lg h-64 md:h-96 transition-all duration-1000 ease-in-out w-screen ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        width={2000}
        height={2000}
        priority
      />

      <Logo />

      <ul
        className={`${gloria.className} flex flex-row rounded-box z-10 w-full justify-around sm:text-xl mt-24 md:mt-40  `}
      >
        <DropDownInfo />
        <DropDownPlans />

        {user && !!bookedThisYear == 0 && (
          <li className="text-xs btn btn-ghost sm:text-base md:text-lg">
            <Link href={"/registration"}>register</Link>
          </li>
        )}
        <DropDownMenu />
      </ul>
    </div>
  );
}
