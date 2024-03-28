"use client";

import PleaseSignIn from "@/components/PleaseSignIn";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useStore } from "@/store/ZustandProvider";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import BookingData from "@/components/BookingData";
export default function Secret({ params }) {
  const { data: session, status: loading } = useSession();
  const { user, fetchAllBookings, allBookings } = useStore();
  const [loaded, setLoaded] = useState(false);
  const { conferenceId } = params;
  useEffect(() => {
    const loadUsers = async () => {
      fetchAllBookings(conferenceId);
      setLoaded(true);
    };
    if (session && conferenceId) loadUsers();
  }, [session, fetchAllBookings, conferenceId]);
  console.log("ALL BOOKINGS================", allBookings);
  if (user?.email != "cludwell@gmail.com") return <PleaseSignIn />;
  // if (!loaded) return <Loading />
  return (
    <div className={" p-16 max-w-screen-xl min-h-screen mx-auto leading-8"}>
      {allBookings.map((book, i) => (
        <BookingData booking={book} key={i} />
      ))}
    </div>
  );
}
