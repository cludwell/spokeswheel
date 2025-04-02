import { amatic } from "@/app/fonts";
import IconBellAlert from "./Icons/IconBellAlert";
export default function StripeDirection({ id, dateOfBirth }) {
  const paymentLink =
    new Date(dateOfBirth) >= new Date("2011-08-22T00:00:00.000Z")
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
      <p className="fade-in">{`For the time being all registration fees are nonrefundable.`}</p>
      <a
        href={`${paymentLink}?client_reference_id=${id}`}
        className="my-12 text-xl btn btn-wide btn-info"
      >
        Stripe
      </a>
      <div className="flex flex-row p-2 text-red-800 bg-pink-300 border-2 border-red-800 rounded-xl">
        <span className="mr-2">
          <IconBellAlert />
        </span>
        Please be sure to use the same email as when you registered here.
      </div>
    </div>
  );
}
