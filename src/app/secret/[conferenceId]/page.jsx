"use client";

import PleaseSignIn from "@/components/PleaseSignIn";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useStore } from "@/store/ZustandProvider";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import BookingData from "@/components/BookingData";
import BookingTableRow from "@/components/BookingTableRow";

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
  const validEmails = [
    "cludwell@gmail.com",
    "bryce.dagenais86@gmail.com",
    "matthewpatrickmorin@gmail.com",
    "smcmullen719@gmail.com",
    "jareddefrancesco@gmail.com",
    "mkguilfoyle90@gmail.com",
    "metalfoon@yahoo.com",
    "agudelo.eva@gmail.com"
  ];
  if (!validEmails.includes(user?.email)) return <PleaseSignIn />;
  if (!loaded) return <Loading />;
  console.log('booking', allBookings)
  return (
    <>
      <div className="m-auto rounded-b-lg w-fit">
        <table className="table-xs sm:table-sm md:table-xs table-zebra bg-base-300 rounded-xl">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>📩</th>
              <th>📞</th>
              <th>Paid</th>
              <th>DoB</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody className="">
            {allBookings.map((book, i) => (
              <BookingTableRow booking={book} key={i} />
            ))}
          </tbody>
        </table>
      </div>
      <div className={" p-16 max-w-screen-xl min-h-screen mx-auto leading-8"}>
        {allBookings.map((book, i) => (
          <BookingData booking={book} key={i} />
        ))}
      </div>
    </>
  );
}
