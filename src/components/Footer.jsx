import tornpaper from "../../public/images/tornpaper.png";
import Image from "next/image";
import { amatic, special } from "../app/fonts";

export default function Footer() {
  return (
    <div className="w-full max-w-screen-xl p-4 mx-auto">
      {/* <h2 className={amatic.className + ` text-white text-4xl sm:text-5xl`}>SOCIALS</h2>
      <ul className="ml-4 list-disc ">
        <li>youtube</li>
        <li>instagram</li>
        <li>twitter</li>
      </ul> */}

      <div
        className={
          special.className +
          " flex flex-col w-full items-center relative text-black "
        }
      >
        <Image
          src={tornpaper}
          alt="torn paper behind a pithy quote"
          className="object-contain w-[34rem] h-96 sepia contrast-75"
        />
        <p className="absolute text-xs text-center transform -translate-x-1/2 -translate-y-1/2 w-96 top-1/2 left-1/2 sm:text-base">
          “The ultimate, hidden truth of the world is that it is something that
          we make, and could just as easily make differently.”
          <br />
          <span className="mr-12 text-right w-96 float-end">- David Graeber</span>
        </p>
      </div>
    </div>
  );
}
