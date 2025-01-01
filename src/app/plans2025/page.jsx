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
        Location - TBA Shortly
      </h2>
      <p className="my-8 fade-in">
        {`We are currently talking with a few locations about hosting us this coming year! If you would like to be involved with the planning of the conference please reach out.`}
      </p>
      <p className="my-8 fade-in">{`Please register in advance as it will allow us to rent additional facilities as needed. We kind of need to know by June 1st to rent additional facilities. `}</p>
      {/* <ul className="ml-12 fade-in">
        <li className="list-disc ">{`Two main lodges, Thaxter's Lodge and Ranger's Roost, with 16 bunk beds each`}</li>
        <li className="list-disc ">
          {`Adirondacks may also be rented for privacy with spouse/family or light
          sleepers.`}
        </li>
        <li className="list-disc ">{`Ranger's Roose has a commercial kitchen with two stoves, double sinks, and a dishwasher. Also large industrial refrigerators and a standalone freezer.`}</li>
        <li className="list-disc ">Both buildings have wheel chair ramps.</li>
        <li className="list-disc ">
          2 showers, 2 toilets in each building, and 3 latrines.
        </li>
      </ul> */}
      {/* <Image
        src={seawoodmap}
        alt={`a map of camp seawood displaying the adirondacks and main buildings`}
        width={2000}
        height={2000}
        className="w-1/2 mx-auto my-24 rounded-lg "
      /> */}

      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl"}>
        When? Aug 22-26
      </h2>
      <div className="flex flex-col items-center mb-24">
        <CountDown />
      </div>
      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl"}>
        How Much?
      </h2>
      <p className="my-8 fade-in">
        {`Our goal is to make this conference accessible and affordable, especially since we hope that friends from around the country will fly in to attend. Costs are roughly 20 dollars a night depending on the lodging that you would like, and 20 dollars a day for food. We're hoping to break even 😰. In the future we would love to have a small pot of money to make the conference NOTAFLOF (No One Turned Away For Lack Of Funds).`}
      </p>
      <h2 className={amatic.className + " my-24 text-4xl sm:text-5xl"}>
        Workshops
      </h2>
      <p className="my-8 fade-in">
        {" "}
        {`Let us know what workshops you want to lead so we can update this!`}
      </p>
      <div className="m-auto overflow-x-auto rounded-b-lg w-fit">
        <table className="table-xs sm:table-sm md:table-lg table-zebra bg-base-300 rounded-xl">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody
          className="">
            {/* row 1 */}
            {/* <tr>
              <td>Sarah</td>
              <td>Happy Accidents</td>
              <td>Come get a stick and poke from Sarah!</td>
            </tr> */}
            {/* row 2 */}
            <tr>
              <td>Matty Mo</td>
              <td>Cryptids</td>
              <td>A deep dive into the Mothman, etc</td>
            </tr>
            {/* row 3 */}
            <tr
            >
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
