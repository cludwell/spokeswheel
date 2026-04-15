import { amatic } from "@/app/fonts";
import IconBellAlert from "./Icons/IconBellAlert";
export default function VenmoDirection({ fee, dateOfBirth }) {
  const paymentLink =
    new Date(dateOfBirth) >= new Date("2012-08-22T00:00:00.000Z")
      ? // testing links
        // ? "https://buy.stripe.com/test_7sI0423PC5lQabKbIL" //adirondacks link
        // : "https://buy.stripe.com/test_14k9EC99WcOi97G28a"; //camping/lodges link

        // production links
        // for child admission
        "https://buy.stripe.com/aEUbIJ1vbdPi3xCcMS"
      : // for adult admission
        "https://buy.stripe.com/9AQ7st6Pv5iM7NS4gl";

  console.log(dateOfBirth);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className={amatic.className + " mb-12 text-4xl sm:text-5xl fade-in"}>
        {`💸All that's Left is Payment💸`}
      </h2>
      <p className="fade-in">
        {`Please send you registration fee to`}{" "}
        <a className="link-primary" href="https://www.venmo.com/u/cludwell">
          @cludwell on venmo.
        </a>{" "}
      </p>
      <p className="my-8">
        <button
          class="btn btn-soft btn-accent text-2xl"
          onClick={() => {
            window.location.href = "https://www.venmo.com/u/cludwell";
          }}
        >
          ${fee}
        </button>
      </p>
      <p className="my-8">
        {" "}
        {`Feel free to text or call me at 510-393-7938 with any questions`}
      </p>
      <div className="flex flex-row items-center p-2 text-red-800 bg-pink-300 border-2 border-red-800 rounded-xl">
        <span className="m-2 r-2 justify-self-auto">
          <IconBellAlert />
        </span>{" "}
        <div>
          <p className="m-2"> Please send me the name with which you registered!</p>
          <p className="m-2">This page will not be updated after payment.</p>
        </div>
      </div>
    </div>
  );
}
