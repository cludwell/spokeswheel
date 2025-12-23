import cabins from "../../../public/images/farnsworth/cabins.jpg";
import dininghall from "../../../public/images/farnsworth/dininghall.png";
import farnsworth from "../../../public/images/farnsworth/farnsworth.png";
import outsidehall from "../../../public/images/farnsworth/outsidehall.JPG";
import lake from "../../../public/images/farnsworth/lake.png";
import lakeview from "../../../public/images/farnsworth/lakeview.jpg";
import tov1 from "../../../public/images/farnsworth/tov1.jpg";
import tov2 from "../../../public/images/farnsworth/tov2.jpg";
import CountDown from "@/components/CountDown";
import { amatic, special } from "../fonts";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import group_01 from "../../../public/images/photos/2025/group_01.jpg";
import group_02 from "../../../public/images/photos/2025/group_02.jpg";
import group_03 from "../../../public/images/photos/2025/group_03.jpg";
import group_04 from "../../../public/images/photos/2025/group_04.jpg";
import group_05 from "../../../public/images/photos/2025/group_05.jpg";
import group_06 from "../../../public/images/photos/2025/group_06.jpg";
import group_07 from "../../../public/images/photos/2025/group_07.jpg";
import group_08 from "../../../public/images/photos/2025/group_08.jpg";
import group_09 from "../../../public/images/photos/2025/group_09.jpg";
import group_10 from "../../../public/images/photos/2025/group_10.jpg";
import siteL_01 from "../../../public/images/photos/2025/siteL_01.jpg";
import siteL_02 from "../../../public/images/photos/2025/siteL_02.jpg";
import siteL_03 from "../../../public/images/photos/2025/siteL_03.jpg";
import siteL_04 from "../../../public/images/photos/2025/siteL_04.jpg";
import siteL_05 from "../../../public/images/photos/2025/siteL_05.jpg";
import siteL_06 from "../../../public/images/photos/2025/siteL_06.jpg";
import siteP_01 from "../../../public/images/photos/2025/siteP_01.jpg";
import siteP_02 from "../../../public/images/photos/2025/siteP_02.jpg";
import siteP_03 from "../../../public/images/photos/2025/siteP_03.jpg";
import siteP_04 from "../../../public/images/photos/2025/siteP_04.jpg";
import siteP_05 from "../../../public/images/photos/2025/siteP_05.jpg";
import siteP_06 from "../../../public/images/photos/2025/siteP_06.jpg";
import siteP_07 from "../../../public/images/photos/2025/siteP_07.jpg";
import siteP_08 from "../../../public/images/photos/2025/siteP_08.jpg";
import siteP_09 from "../../../public/images/photos/2025/siteP_09.jpg";
import siteP_10 from "../../../public/images/photos/2025/siteP_10.jpg";
import siteP_11 from "../../../public/images/photos/2025/siteP_11.jpg";
import siteP_12 from "../../../public/images/photos/2025/siteP_12.jpg";
import siteP_13 from "../../../public/images/photos/2025/siteP_13.jpg";
import siteP_14 from "../../../public/images/photos/2025/siteP_14.jpg";
import siteP_15 from "../../../public/images/photos/2025/siteP_15.jpg";
import siteP_16 from "../../../public/images/photos/2025/siteP_16.jpg";
const farnsworthImages = [
  tov2,
  tov1,
  dininghall,
  outsidehall,
  lake,
  lakeview,
  cabins,
  farnsworth,
];

const groupPhotos = [
  // group_01,
  group_02,
  group_03,
  group_04,
  group_05,
  group_06,
  group_07,
  group_08,
  group_09,
  group_10,
  group_01,
];
const sitePhotosLandscape = [
  siteL_01,
  siteL_02,
  siteL_03,
  siteL_04,
  siteL_06,
  siteL_05,
];
const sitePhotosPortrait = [
  siteP_01,
  siteP_08,
  siteP_02,
  // siteP_03,
  siteP_04,
  // siteP_05,
  siteP_10,
  siteP_07,
  // siteP_06,
  // siteP_09,
  // siteP_11,
  // siteP_12,
  siteP_13,
  // siteP_14,
  // siteP_15,
  siteP_16,
];

const sitePortrait = [];
export default function Plans2024() {
  return (
    <div
      className={
        special.className +
        " p-4 sm:p-16 max-w-screen-xl mx-auto leading-5 md:leading-8 text-xs sm:text-sm"
      }
    >
      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        Location - Camp Farnsworth!{" "}
        <span className="hidden sm:visible">⛺</span>
      </h2>
      <p className="my-8 fade-in">
        {`Our second annual conference was held at Camp Farnsworth in Thetford, VT. About 20 people attended, cycling in and out with other obligations. While there were a few logistical hiccups, we'll learn from them in the future! Camp Farnsworth wasa little further from most of us in the Boston Metro area, but the site was absolutely beautiful and the facilities were great! We rented their huge dining hall as well as the Tovariche Cabins, if you're familiar with the site.`}
      </p>
      <p className="my-8 fade-in">{`The site was phenomenal but it's popularity with other groups trying to rent it, in addition to it's price and distance from Boston make it challenging for a conference of our size currently. Hopefully we'll return in a couple of years! `}</p>

      <p className="my-8 fade-in">{`These photos kind of give you an idea of what the site looked like.`}</p>

      <SwipeCarousel imgs={sitePhotosLandscape} aspect={"aspect-video"} />

      <h2
        className={
          amatic.className + " my-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        Con Photos
      </h2>

      <SwipeCarousel imgs={groupPhotos} aspect={"aspect-square"} />
      <SwipeCarousel
        imgs={sitePhotosPortrait}
        aspect={"aspect-square object-bottom"}
      />
      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        Theme - Stone Soup 🥣
      </h2>
      <p className="my-8 fade-in">
        {`This conference is what we make of it! We are a group of left leaning people in a collective search for meaning. In effect there are no leaders, gurus, or experts. This conference will be what we make of it. Start practicing a song to play a coffee house! Dive deeper into one of your passions to share it as a workshop with the rest of us! Is there a spiritual blocker or question that you've been thinking about? A breakthrough that you'd like to share with others?`}
      </p>
      <p className="my-8 fade-in">
        {`At this conference we hope to remember our radical belief in people. Inspiring each other is the only way we're going to make it through these dispiriting times.`}
      </p>
      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        When? Aug 22-26, 2025 📅
      </h2>
      <p className="my-8 fade-in">
        {`It always feels like a big ask for people to take off work, but they did. Total attendance fluctuating as people cycled in and out for work, weddings, and other obligations.`}
      </p>
      <p className="my-8 fade-in">
        {`In the future we hope to expand to a week long conference! Every year we make it about one day longer.`}
      </p>
      {/* <div className="flex flex-col items-center mb-24">
        <CountDown />
      </div> */}
      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        How Much? - $160* 💳
      </h2>
      <p className="my-8 fade-in">
        {`Our goal is to make this conference accessible and affordable, especially since we hope that friends from around the country will fly in to attend. Costs are roughly 20 dollars for lodging and 20 dollars a day for food. We always hope to break even, at the very least!`}
      </p>
      <p className="my-8 fade-in">
        {`*We're asking $160 per person and half off for children, (14 years old and younger). `}{" "}
      </p>
      <p className="my-8 fade-in">
        <a className="link link-error" href="mailto:cludwell@gmail.com">
          If price might be a barrier to you attending always reach out to us.
        </a>
      </p>

      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        Workshops 👨‍🏫
      </h2>
      <p className="my-8 fade-in">
        {" "}
        {`I think I'm forgetting a few, but here are the ones that I attended!`}
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
            <tr>
              <td>Alec</td>
              <td>Fundamentals of AI</td>
              <td>What is AI? How is it going to change society?</td>
            </tr>
            <tr>
              <td>Meagan</td>
              <td>Move your Body</td>
              <td>Stretching and Yoga and Dancing</td>
            </tr>
            <tr>
              <td>Ella</td>
              <td>Creative Writing</td>
              <td>Creative Writing with some light guidance and sharing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
