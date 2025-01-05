import Link from "next/link";
import { amatic, gloria } from "../app/fonts";

export default function SplashHero() {
  return (
    <div
      className="max-w-screen-lg min-h-screen hero fade-in"
      style={{
        // backgroundImage: "url(/images/sparks.jpg)",
        backgroundImage: "url(/images/photos/2024/fire.webp)",

      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md text-white">
          <h1
            className={amatic.className + " mb-5 text-5xl sm:text-8xl font-bold"}
          >{`You're Invited`}</h1>
          <p className={gloria.className + " my-5 sm:text-xl"}>
            To a conference for rad humans
          </p>
          <p className={gloria.className + " my-5 sm:text-xl"}>
            In a collective search for meaning
          </p>
          <p className={gloria.className + " my-5 sm:text-xl"}>
            Where we remember to believe in people
          </p>

          <Link
            href="/aboutus"
            className={gloria.className + " btn btn-primary  mt-12 sm:text-xl font-bold"}
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
