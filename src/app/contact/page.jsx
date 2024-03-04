import { Amatic_SC, Special_Elite } from "next/font/google";
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
export default function ContactUs() {
  return (
    <div
      className={
        special.className + " p-16 bg-black max-w-screen-xl mx-auto leading-8"
      }
    >
      <h2 className={amatic.className + " mb-12 text-5xl"}>Contact Us</h2>
      <p className=" my-8">
        {`Questions? Suggestions? Would you like to participate in the planning? We need your help! We can't emphasis enough that this con is what each one of us brings to it. Please think about planning a workshop, a worship, or start practices a few songs to perform. If you would like to participate we need help with the following roles`}
      </p>
      <ul className="m-8">
        <li className=" list-disc">Yearbook Coordinator</li>
        <li className=" list-disc">Member at Large</li>
      </ul>
      <h2 className={amatic.className + " mb-12 text-5xl"}>Website </h2>
      <p className=" my-8">
        For any technical problems with registration or the website, please
        email me at cludwell@gmail.com
      </p>
      <h2 className={amatic.className + " mb-12 text-5xl"}>
        Workshop Coordinator
      </h2>
      <h2 className={amatic.className + " mb-12 text-5xl"}>
        Worship Coordinator
      </h2>
      <h2 className={amatic.className + " mb-12 text-5xl"}>Meal Coordinator</h2>
    </div>
  );
}
