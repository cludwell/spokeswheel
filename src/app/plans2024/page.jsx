import seawoodmap from "../../../public/images/seawoodmap.png";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import { amatic, special } from "../fonts";

export default function Plans2024() {
  return (
    <div
      className={`${special.className} p-4 sm:p-16 max-w-screen-xl mx-auto leading-8 min-h-screen`}
    >
      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl fade-in"}>
        Location - Camp Seawood
      </h2>
      <p className="my-8 fade-in">
        {`At the moment we are considering renting the Camp Seawood from the Girl Scouts as the location for our first conference. It's a walkable distance from the ocean and downtown Portsmouth, NH and a straight shot from Logan Airport going north on Rt 1. It's also very affordable. We wanted to keep things cheap while we gauge excitement for this new project.`}
      </p>
      <ul className="ml-12 fade-in">
        <li className="list-disc ">{`Two main lodges, Thaxter's Lodge and Ranger's Roost, with 16 bunk beds each`}</li>
        <li className="list-disc ">
          Adirondacks may also be rented for privacy with spouse/family or light
          sleepers.
        </li>
        <li className="list-disc ">{`Ranger's Roose has a commercial kitchen with two stoves, double sinks, and a dishwasher. Also large industrial refrigerators and a standalone freezer.`}</li>
        <li className="list-disc ">Both buildings have wheel chair ramps.</li>
        <li className="list-disc ">
          2 showers, 2 toilets in each building, and 3 latrines.
        </li>
      </ul>
      <Image
        src={seawoodmap}
        alt={`a map of camp seawood displaying the adirondacks and main buildings`}
        width={2000}
        height={2000}
        className="w-1/2 mx-auto my-24 rounded-lg "
      />

      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl"}>When? Aug 15-19</h2>
      <div className="flex flex-col items-center mb-24">
        <CountDown />
      </div>
      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl"}>How Much?</h2>
      <p className="my-8 fade-in">
        {`Our goal is to make this conference accessible and affordable, especially since we hope that friends from around the country will fly in to attend. Costs are roughly 20 dollars a night depending on the lodging that you would like, and 20 dollars a day for food. We're hoping to break even 😰. As a community we can decide what to do with any excess funds if any.`}
      </p>
      <h2 className={amatic.className + " my-24 text-4xl sm:text-5xl"}>Workshops</h2>
      <p className="my-8 fade-in">
        {" "}
        {`Let us know what workshops you want to lead so we can update this!`}
      </p>
      <div className="flex flex-row justify-center w-full overflow-x-auto ">
        <table className="table-xs sm:table-sm md:table-lg table-zebra bg-base-300 rounded-xl">
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
            {/* <tr>
              <td>Matty Mo</td>
              <td>Bunnies 101</td>
              <td>We catch a wild jackrabbit and go over bunnycare basics</td>
            </tr> */}
            {/* row 3 */}
            <tr>
              <td>Bryce & Alex</td>
              <td>Arnis/eskrima</td>
              <td>An intro to the Phillipines' national martial art.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
