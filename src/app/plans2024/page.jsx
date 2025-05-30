import seawoodmap from "../../../public/images/seawoodmap.png";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import { amatic, special } from "../fonts";
import { SwipeCarousel } from "@/components/SwipeCarousel";

const fireImages = [
  "/images/photos/2024/fire1.jpg",
  "/images/photos/2024/fire2.jpg",
  "/images/photos/2024/fire3.jpg",
  "/images/photos/2024/fire4.jpg",
  "/images/photos/2024/fire5.jpg",
  "/images/photos/2024/fire6.jpg",
  "/images/photos/2024/fire7.jpg",
  "/images/photos/2024/fire8.jpg",
    // "/images/photos/2024/fire9.jpg",
  "/images/photos/2024/fire10.jpg",
  "/images/photos/2024/fire11.jpg",
  "/images/photos/2024/fire12.jpg",
];

const peopleImages = [
  "/images/photos/2024/people1.jpg",
  "/images/photos/2024/people2.jpg",
  "/images/photos/2024/people3.jpg",
  "/images/photos/2024/people4.jpg",
  "/images/photos/2024/people5.jpg",
  //   "/images/photos/2024/people6.jpg",
  "/images/photos/2024/people7.jpg",
  "/images/photos/2024/people8.jpg",
  "/images/photos/2024/people9.jpg",
];

const siteImages = [
  "/images/photos/2024/site01.jpg",
  "/images/photos/2024/site02.jpg",
  "/images/photos/2024/site03.jpg",
  "/images/photos/2024/site04.jpg",
  "/images/photos/2024/site05.jpg",
  "/images/photos/2024/site06.jpg",
  "/images/photos/2024/site07.jpg",
  // "/images/photos/2024/site08.jpg",
  // "/images/photos/2024/site09.jpg",
  "/images/photos/2024/site10.jpg",
  "/images/photos/2024/site11.jpg",
  "/images/photos/2024/site12.jpg",
];

export default function Plans2024() {
  return (
    <div
    className={
      special.className + " p-4 sm:p-16 max-w-screen-xl mx-auto leading-5 md:leading-8 text-xs sm:text-sm"
    }
    >
      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        Location - Camp Seawood
      </h2>
      <p className="my-8 fade-in">
        {` Our first annual conference was held at Camp Seawood in Portsmouth, New Hampshire! About 20 people, including a few families joined us for a small conference. It was reassuring to hear from attendees that some came just because their friends were attending only to realize that they missed spiritual spaces like this in their lives. Camp Seawood was a walkable distance from the ocean and downtown Portsmouth, NH and a straight shot from Logan Airport going north on Rt 1. It was also very affordable. We wanted to keep things cheap while we gauge excitement for this new project. Attendees made sure to bring sleeping bags and mattresses, as accomodations were more like glamping rather than a stay at an AirBnb.`}
      </p>

      <ul className="ml-12 fade-in">
        <li className="list-disc ">{`Two main lodges, Thaxter's Lodge and Ranger's Roost, with 16 bunk beds each`}</li>
        <li className="list-disc ">
          {`Adirondacks also rented for privacy with spouse/family or light
          sleepers.`}
        </li>
        <li className="list-disc ">{`Ranger's Roose has a commercial kitchen with two stoves, double sinks, and a dishwasher. Also large industrial refrigerators and a standalone freezer.`}</li>
        <li className="list-disc ">Both buildings have wheel chair ramps.</li>
        <li className="list-disc ">
          2 showers, 2 toilets in each building, and 3 latrines.
        </li>
      </ul>
      {/* <Image
        src={seawoodmap}
        alt={`a map of camp seawood displaying the adirondacks and main buildings`}
        width={2000}
        height={2000}
        className="w-1/2 mx-auto my-24 rounded-lg "
      /> */}

      <SwipeCarousel imgs={fireImages} aspect={"aspect-square"} />

      <SwipeCarousel imgs={peopleImages} aspect={"aspect-square"} />
      <SwipeCarousel imgs={siteImages} aspect={"aspect-square"} />

      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        How Much?
      </h2>
      <p className="my-8 fade-in">
        {`The conference was roughly 20 dollars a day for lodging and 20 dollars a day for food. Folks ended up paying 120 if staying in the lodges, or about 140 if staying in adirondacks. In the future we would like to have a little pot saved so that we can offer NOTAFLOF (No One Turned Away For Lack Of Funds). Our goal is to make the conference accessible, which acknowledging that asking folks to take time off work is a big ask.`}
      </p>
      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        Workshops
      </h2>

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
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Meghan</td>
              <td>Block Printing</td>
              <td>
                Attendings made their own designs or used donated blocks to
                print Spokeswheel merch!
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Langer</td>
              <td>Parkour</td>
              <td>
                Parkour? Parkour! A great introduction to safely practicing
                parkour. Kicks to the head were negligible.
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Bryce & Alex</td>
              <td>Arnis/eskrima</td>
              <td>An intro to the Phillipines' national martial art.</td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>Chris</td>
              <td>
                <a
                  href="https://youtu.be/Wgu36w-jYCk?si=LWP-HFIFokzGnDCQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary link"
                >
                  Tantura
                </a>
              </td>
              <td>
                A screening and light discussion of the documentary film,
                Tantura, which documents the ethnic cleansing of a Palestinian
                village during the 1948 Nakba
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
