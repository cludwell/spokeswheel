import { amatic } from "@/app/fonts";
export default function StripeDirection({ id, lodging }) {
  const paymentLink =
    lodging == "Adirondacks"
      ? "https://buy.stripe.com/test_7sI0423PC5lQabKbIL" //adirondacks link
      : "https://buy.stripe.com/test_14k9EC99WcOi97G28a"; //camping/lodges link

  console.log('inside the stripe component', lodging)
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        {`💸All that's Left is Payment💸`}
      </h2>
      <p className="fade-in">{`For the time being all registration fees are nonrefundable.`}</p>
      <a
        href={`${paymentLink}?client_reference_id=${id}`}
        className="my-12 text-xl btn btn-wide btn-info"
      >
        Stripe
      </a>
    </div>
  );
}
