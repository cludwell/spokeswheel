import farnsworthsitemap from "../../../public/images/farnsworth/farnsworth.png";
import cabins from "../../../public/images/farnsworth/cabins.jpg";
import dininghall from "../../../public/images/farnsworth/dininghall.png";
import farnsworth from "../../../public/images/farnsworth/farnsworth.png";
import outsidehall from "../../../public/images/farnsworth/outsidehall.JPG";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import { amatic, special } from "../fonts";
// import { Fanwood_Text } from "next/font/google";
import { SwipeCarousel } from "@/components/SwipeCarousel";

const farnsworthImages = [
  cabins,
  dininghall,
  farnsworth,
  outsidehall,
  farnsworthsitemap,
];
export default function Plans2024() {
  return (
    <div
      className={`${special.className} p-4 sm:p-16 max-w-screen-xl mx-auto leading-8 min-h-screen`}
    >
      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl fade-in"}>
        Location - Camp Farnsworth!
      </h2>
      <p className="my-8 fade-in">
        {`BIG NEWS! We've finally reserved a camp! We'll be staying at the Camp Farnsworth Girl Scout Camp in Thetford Vermont! It's a little further from most of us in the Boston Metro area, but we think the facilities will be a great fit for us! We will be renting their dining hall which can accomodate up to 200 people as well as the Tovariche Cabins, if you're familiar with the site.`}
      </p>
      <p className="my-8 fade-in">{`Please register in advance as it will allow us to rent additional facilities as needed. We kind of need to know by June 1st to rent additional facilities! `}</p>
{/*
      <Image
        src={farnsworthsitemap}
        alt={`a map of camp seawood displaying the adirondacks and main buildings`}
        width={2000}
        height={2000}
        className="w-1/2 mx-auto my-24 rounded-lg "
      /> */}
      <SwipeCarousel imgs={farnsworthImages} />
      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl fade-in"}>
        Theme - Stone Soup
      </h2>
      <p className="my-8 fade-in">
        {`This conference is what we make of it! We are a group of left leaning people in a collective search for meaning. In effect there are no leaders, gurus, or authorities. This conference will be what we make of it. Start practicing a song to play a coffee house! Diver deeper into one of your passions to share it as a workshop with the rest of us! Is there a spiritual blocker or question that you've been thinking about? A breakthrough that you'd like to share with others?`}
      </p>
      <p className="my-8 fade-in">
        {`At this conference we hope to remember our radical belief in people, that can be hard when half our country excuses genocide and the other half hand waves away fascism. Inspiring each other is the only way we're going to make it through these dispiriting times.`}
      </p>
      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl"}>
        When? Aug 22-26
      </h2>
      <p className="my-8 fade-in">
        {`We will be arriving Friday evening and leaving Tuesday morning! PLEASE PLEASE PLEASE, ask for time off work now or prepare to use your sick time 😉. I realize this is a big ask, but I promise it'll be worth it. Life is too short to spend it working all the time!`}
      </p>
      <p className="my-8 fade-in">
        {`In the future we hope to expand to a week long conference!`}
      </p>
      <div className="flex flex-col items-center mb-24">
        <CountDown />
      </div>
      <h2 className={amatic.className + " mb-24 text-4xl sm:text-5xl"}>
        How Much? - $160*
      </h2>
      <p className="my-8 fade-in">
        {`Our goal is to make this conference accessible and affordable, especially since we hope that friends from around the country will fly in to attend. Costs are roughly 20 dollars a night depending on the lodging that you would like, and 20 dollars a day for food. We're hoping to break even 😰.`}
      </p>
      <p className="my-8 fade-in">
        {`*We're asking $160 per person and half off for children, (14 years old and younger). `}{" "}
        <a className="link link-error" href="mailto:cludwell@gmail.com">
          If price might be a barrier to you attending please reach out to us.
        </a>
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
          <tbody className="">
            {/* row 1 */}

            {/* row 2 */}
            <tr>
              <td>Sarah McMuffin</td>
              <td>Happy Accidents</td>
              <td>Tattos for consenting adults!</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
