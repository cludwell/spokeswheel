import { Amatic_SC, Special_Elite, Gloria_Hallelujah } from "next/font/google";
import Link from "next/link";

const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
const gloria = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
});
export default function PleaseRegister() {
  return (
    <div
      className={
        special.className +
        " p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh] "
      }
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
          {`😣 You have to register first!`}
        </h2>

        <Link
          href={"/registration"}
          className={gloria.className + " btn btn-wide btn-primary text-xl"}
        >
          Register now!
        </Link>
      </div>
    </div>
  );
}
