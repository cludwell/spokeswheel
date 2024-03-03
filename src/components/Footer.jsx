import { Amatic_SC } from "next/font/google";
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});

export default function Footer() {
    return (
        <div className=" w-full bg-black p-16 max-w-screen-xl mx-auto">
            <h2 className={amatic.className + ` text-white text-5xl`}>SOCIALS</h2>
            <ul className=" list-disc ml-4">
                <li>youtube</li>
                <li>instagram</li>
                <li>twitter</li>
            </ul>
        </div>
    )
}
