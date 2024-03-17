import Link from "next/link";
import { amatic, gloria } from "../app/fonts";

export default function SplashHero() {
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: "url(/images/sparks.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md text-white">
          <h1
            className={amatic.className + " mb-5 text-8xl font-bold"}
          >{`You're Invited`}</h1>
          <p className={gloria.className + " my-5 text-xl"}>
            To a conference for rad humans
          </p>
          <p className={gloria.className + " my-5 text-xl"}>
            Where we remember to believe in people
          </p>
          <p className={gloria.className + " my-5 text-xl"}>
            And feel inspired through community
          </p>

          <Link
            href="/aboutus"
            className={gloria.className + " btn btn-primary  mt-12 text-xl"}
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
