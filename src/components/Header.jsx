import Image from "next/image";
import darkCampFire from "../../public/images/dark-campfire.jpg";
import WagonWheel from "./WagonWheel";
import Link from "next/link";
import { Amatic_SC, Gloria_Hallelujah } from "next/font/google";
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const gloria = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
});
export default function Header() {
  return (
    <div className=" max-w-screen-xl h-fit self-center flex flex-col items-center mx-auto bg-black">
      <Link
        href={"/"}
        className={amatic.className + ` z-10 text-white text-6xl`}
      >
        Spokeswheel Conference
      </Link>
      <Image
        src={darkCampFire}
        alt={`friends are gathered around a campfire`}
        className="max-w-screen-lg h-96 object-bottom object-cover absolute"
        width={2000}
        height={2000}
      />
      <div className=" w-32 z-10 svg-spin ease-in-out">
        <WagonWheel />
      </div>
      <div
        className={
          gloria.className +
          ` z-10 text-white flex flex-row w-full justify-around text-xl mt-44`
        }
      >
        <Link href={`aboutus`}>about us</Link>
        <Link href={'plans2024'}>2024 plans</Link>
        <Link href={'contact'}>contact</Link>
        <span>register</span>
      </div>
    </div>
  );
}
