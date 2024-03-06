import { Amatic_SC, Special_Elite } from "next/font/google";
import tornpaper from "../../public/images/tornpaper.png";
import Image from "next/image";
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className=" w-full p-16 max-w-screen-xl mx-auto">
      <h2 className={amatic.className + ` text-white text-5xl`}>SOCIALS</h2>
      <ul className=" list-disc ml-4">
        <li>youtube</li>
        <li>instagram</li>
        <li>twitter</li>
      </ul>

      <div
        className={
          special.className +
          " flex flex-col w-full mx-auto items-center relative text-black"
        }
      >
        <Image
          src={tornpaper}
          alt="torn paper behind a pithy quote"
          className="object-contain w-[34rem] h-96 sepia contrast-75"
        />
        <p className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          “The ultimate, hidden truth of the world is that it is something that
          we make, and could just as easily make differently.”
          <br />
          <br />
          <span className=" w-96 text-right float-end">- David Graeber</span>
        </p>
      </div>
    </div>
  );
}
