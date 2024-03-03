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
      <p className=" my-8">Questions? Suggestions? Would you like to participate in the planning? Go ahead and email me at cludwell@gmail.com</p>
    </div>
  );
}
