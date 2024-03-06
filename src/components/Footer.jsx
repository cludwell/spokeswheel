import { Amatic_SC } from "next/font/google";
const amatic = Amatic_SC({
  weight: "700",
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

      <div className="flex flex-col w-full mx-auto items-center my-12">
        <p className="w-96 italic ">{`“The ultimate, hidden truth of the world is that it is something that we make, and could just as easily make differently.”`}</p>
        <span className="italic w-96 text-right">- David Graeber</span>
      </div>
    </div>
  );
}
