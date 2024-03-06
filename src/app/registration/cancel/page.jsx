"use client";
import { Amatic_SC, Special_Elite } from "next/font/google";
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
  const [reveal1, setReveal1] = useState(false);
  const handleCancel = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={
        special.className +
        " p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh]"
      }
    >
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

      <form className={` flex flex-col items-center `} onSubmit={handleCancel}>
        <label htmlFor=""></label>
        <input
          type="checkbox" name="reveal1"
          checked={reveal1}
          className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
        />
        <button className="btn btn-wide btn-error text-xl my-12" type="submit">
          Cancel
        </button>
      </form>
    </div>
  );
}
