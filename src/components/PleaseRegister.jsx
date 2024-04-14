import Link from "next/link";
import { amatic,special,gloria } from "../app/fonts";

export default function PleaseRegister() {
  return (
    <div
      className={
        special.className +
        " p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh] "
      }
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className={amatic.className + " mb-12 text-4xl sm:text-5xl fade-in"}>
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
