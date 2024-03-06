import seawoodmap from "../../../public/images/seawoodmap.png";
import Image from "next/image";
import { Amatic_SC, Special_Elite } from "next/font/google";
import CountDown from "@/components/CountDown";
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
export default function Plans2024() {
  return (
    <div
      className={
        special.className + " p-16 max-w-screen-xl mx-auto leading-8"
      }
    >
      <h2 className={amatic.className + " mb-12 text-5xl"}>
        Location - Camp Seawood
      </h2>
      <p className=" my-8">
        {`At the moment we are considering renting the Camp Seawood from the Girl Scouts as the location for our first conference. It's a walkable distance from the ocean and downtown Portsmouth, NH and a straight shot from Logan Airport going north on Rt 1. It's also very affordable. We wanted to keep things cheap while we gauge excitement for this new project.`}
      </p>
      <ul className="ml-12">
        <li className=" list-disc">{`Two main lodges, Thaxter's Lodge and Ranger's Roost, with 16 bunk beds each`}</li>
        <li className=" list-disc">
          Adirondacks may also be rented for privacy with spouse/family or light
          sleepers.
        </li>
        <li className=" list-disc">{`Ranger's Roose has a commercial kitchen with two stoves, double sinks, and a dishwasher. Also large industrial refrigerators and a standalone freezer.`}</li>
        <li className=" list-disc">Both buildings have wheel chair ramps.</li>
        <li className=" list-disc">
          2 showers, 2 toilets in each building, and 3 latrines.
        </li>
      </ul>
      <Image
        src={seawoodmap}
        alt={`a map of camp seawood displaying the adirondacks and main buildings`}
        width={2000}
        height={2000}
        className=" w-1/2 mx-auto my-12 rounded-lg"
      />

      <h2 className={amatic.className + " mb-12 text-5xl"}>When? Aug 15-19</h2>
      <div className="flex flex-col items-center">
        <CountDown />
      </div>
      <h2 className={amatic.className + " my-12 text-5xl"}>Workshops</h2>
      <div className="overflow-x-auto flex flex-row w-full justify-center">
        <table className="table-lg table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Sarah</td>
              <td>Happy Accidents</td>
              <td>Come get a stick and poke from Sarah!</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Matty Mo</td>
              <td>Bunnies 101</td>
              <td>We catch a wild jackrabbit and go over bunnycare basics</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Bryce</td>
              <td>Gen Z Slang</td>
              <td>Gonna be lit fam, on god.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
