import { amatic } from "@/app/fonts";
export default function StripeDirection({ id }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        {`💸All that's Left is Payment💸`}
      </h2>
      <p className="fade-in">{`For the time being all registration fees are nonrefundable.`}</p>
      <a
        href={`https://buy.stripe.com/test_28og304TG5lQ97G6oo?client_reference_id=${id}`}
        className="my-12 text-xl btn btn-wide btn-info"
      >
        Stripe
      </a>
    </div>
  );
}
