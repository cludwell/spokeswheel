"use client";
import CancellationSuccess from "@/components/CancellationSuccess";
import PleaseSignIn from "@/components/PleaseSignIn";
import { useStore } from "@/store/ZustandProvider";
import { useSession } from "next-auth/react";
import { Amatic_SC, Special_Elite } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
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
  const { bookings, deleteBookingInfo } = useStore();
  const booking = bookings.filter((b) => b.id == 1)[0];

  const handleCancel = async (e) => {
    e.preventDefault();
    await deleteBookingInfo({ bookingId: booking.id });
  };
  if (!session) return <PleaseSignIn />
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
          <div className=" w-96 my-12 mx-auto">
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
            <div className="grid grid-cols-2 gap-y-8 w-full">
              <label htmlFor="reveal1" className=" text-lg">
                Are you sure?!
              </label>
              <div className=" flex flex-row items-center justify-end">
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
                  <div className=" flex flex-row items-center fade-in">
                    <input
                      type="checkbox"
                      name="reveal2"
                      checked={reveal2}
                      onChange={() => setReveal2((prev) => !prev)}
                      className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
                    />
                  </div>
                  <label htmlFor="reveal2" className=" text-lg fade-in">
                    Wait, like for real?
                  </label>
                </>
              )}
              {reveal2 && (
                <>
                  <label htmlFor="reveal3" className=" text-lg fade-in">
                    <Link href={"/"}>You can still go back</Link>
                  </label>
                  <div className=" flex flex-row items-center fade-in justify-end">
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
                className="btn btn-wide btn-error text-xl my-12"
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
