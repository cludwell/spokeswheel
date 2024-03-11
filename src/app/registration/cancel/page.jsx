"use client";
import CancellationSuccess from "@/components/CancellationSuccess";
import PleaseSignIn from "@/components/PleaseSignIn";
import { useStore } from "@/store/ZustandProvider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Amatic_SC, Special_Elite } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function CancelRegistration() {
  const { data: session, loading: status } = useSession();
  const [reveal1, setReveal1] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  const [reveal3, setReveal3] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const { bookings, deleteBookingInfo,fetchUsersBookings } = useStore(state=>({
    bookings: state.bookings,
    deleteBookingInfo: state.deleteBookingInfo,
    fetchUsersBookings: state.fetchUsersBookings
  }));
  const booking = bookings.filter((b) => b.conferenceId == 1)[0];

  useEffect(()=> {
    const loadData = async () => {
      await fetchUsersBookings()
      setLoaded(true)
    }
    loadData()
  }, [fetchUsersBookings])
  const handleCancel = async (e) => {
    e.preventDefault();
    if (booking.id) {
      await deleteBookingInfo({ bookingId: booking.id });
      setDeleted(true);
    } else {
      router.push("/");
    }
  };

  if (!booking) router.push("/");
  if (!session) return <PleaseSignIn />;
  if (!loaded) return <Loading />

  return (
    <div
      className={
        special.className +
        " p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh]"
      }
    >
      {!deleted ? (
        <>
          <h2 className={amatic.className + " mb-12 text-5xl"}>
            Cancel Registration 😟
          </h2>
          <div className="mx-auto my-12 w-96">
            <p
              className={``}
            >{`Did something come up? Couldn't get time off work? Need to cancel?`}</p>
            <br />
            <p
              className={``}
            >{`No problem, confirm here and hopefully we'll see you next year.`}</p>
          </div>

          <form
            className={` flex flex-col items-center w-96 mx-auto`}
            onSubmit={handleCancel}
          >
            <div className="grid w-full grid-cols-2 gap-y-8">
              <label htmlFor="reveal1" className="text-lg ">
                Are you sure?!
              </label>
              <div className="flex flex-row items-center justify-end ">
                <input
                  type="checkbox"
                  name="reveal1"
                  checked={reveal1}
                  onChange={() => setReveal1((prev) => !prev)}
                  className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                />
              </div>
              {reveal1 && (
                <>
                  <div className="flex flex-row items-center fade-in">
                    <input
                      type="checkbox"
                      name="reveal2"
                      checked={reveal2}
                      onChange={() => setReveal2((prev) => !prev)}
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                  </div>
                  <label htmlFor="reveal2" className="text-lg fade-in">
                    Wait, like for real?
                  </label>
                </>
              )}
              {reveal2 && (
                <>
                  <label htmlFor="reveal3" className="text-lg fade-in">
                    <Link href={"/"}>You can still go back</Link>
                  </label>
                  <div className="flex flex-row items-center justify-end fade-in">
                    <input
                      type="checkbox"
                      name="reveal3"
                      checked={reveal3}
                      onChange={() => setReveal3((prev) => !prev)}
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                  </div>
                </>
              )}
            </div>
            {reveal3 && (
              <button
                className="my-12 text-xl btn btn-wide btn-error"
                type="submit"
              >
                Cancel
              </button>
            )}
          </form>
        </>
      ) : (
        <CancellationSuccess />
      )}
    </div>
  );
}
