import CountDown from "@/components/CountDown";
import { amatic, special } from "../fonts";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import site01 from "../../../public/images/photos/2024/site01.jpg";
import site02 from "../../../public/images/photos/2024/site02.jpg";
import site03 from "../../../public/images/photos/2024/site03.jpg";
import site04 from "../../../public/images/photos/2024/site04.jpg";
import site05 from "../../../public/images/photos/2024/site05.jpg";
import site06 from "../../../public/images/photos/2024/site06.jpg";
import site07 from "../../../public/images/photos/2024/site07.jpg";
import site08 from "../../../public/images/photos/2024/site08.jpg";
import site09 from "../../../public/images/photos/2024/site09.jpg";
import site10 from "../../../public/images/photos/2024/site10.jpg";
import site11 from "../../../public/images/photos/2024/site11.jpg";
import site12 from "../../../public/images/photos/2024/site12.jpg";
const seawoodImages01 = [
  site01,
  site02,
  site03,
  site04,
  site05,
  site06,
  site07,
  site08,
  site09,
  site10,
  site11,
  site12,
  
]
export default function Plans2026() {
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
        Location - Camp Seawood!{" "}
        <span className="">⛺</span>
      </h2>
      <p className="my-8 fade-in">
        {`WE'VE RESERVED A SITE! This year we are going to be returning to Camp Seawood. While it isn't as nice as Farnsworth, we felt the benefits of being close to the Boston metro area and the lower price will make it more accessible to much of community. This is a Girl Scout day camp and not an AirBnb, however that doesn't mean that staff won't be doing what we can to make you attendance comfortable and accessible. Please reach out to us about how we might accomodate any disabilities if we are able.`}
      </p>
      <p className="my-8 fade-in">
        {`Camp Seawood has two main lodges with 7 adirondacks available for rent. Communal sleeping is encouraged in the lodges as the adirondacks are a bit pricey and it makes the conference more afforable for everybody. Additionally, if you have a tent, dispersed camping is available. We will have ear plugs, power strips for charging devices, and other accomodations as well. The adirondacks are cute 3 walled structures, with the remaining side being screened, that have hand washing stations and latrines near by. They can each accomodate about 4 people.`}
      </p>
      <p className="my-8 fade-in">{`We recommend you think about bringing: `}</p>
      <ul className="ml-10 list-disc">
        <li>A sleeping bag, as there will NOT be bedding.</li>
        <li>
          A camping mattress, especially if comfort is often an issue for you.
        </li>
        <li>A towel and shower kit 🚿</li>
        <li>
          If you'd like more privacy, bring a tent/tarp for dispersed camping.
        </li>
        <li>A room divider or privacy screen, if that's your preference.</li>
        <li>
          Lawn chairs, inflatable couches, or that sort of camp/festival furniture.
        </li>
        <li>Art supplies! 🎨</li>
        <li>Musical instruments 🎸</li>
        {/* <li>A book you've read lately that's changed your life 📚</li> */}
      </ul>
      <p className="my-8 fade-in">{`If you have any questions please reach out to us! Please register in advance as it will allow us to rent additional facilities as needed. We kind of need to know by June 1st to rent additional facilities! `}</p>

      {/* <p className="my-8"></p> */}
      {/* <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        The Book Nook 📚
      </h2>
      <p className="my-8 fade-in">
        {" "}
        {`We're going to experiment with THE BOOK NOOK. (Stolen from a conference that is sadly no more). Please bring a book that has changed your life and perspective in order to share with everyone at the conference. Politically, spiritually, whatever! We're keeping it open ended!`}
      </p> */}
      <SwipeCarousel imgs={seawoodImages01} aspect={"aspect-square"}/>
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
        When? Aug 14-19 📅
      </h2>
      <p className="my-8 fade-in">
        {`We will be arriving Friday evening and leaving Wednesday morning! PLEASE PLEASE PLEASE, ask for time off work now or prepare to use your sick time 😉. I realize this is a big ask, but I promise it'll be worth it. Life is too short to spend it working all the time!`}
      </p>
      <p className="my-8 fade-in">
        {`In the future we hope to expand to a week long conference!`}
      </p>
      <div className="flex flex-col items-center mb-24">
        <CountDown />
      </div>
      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        How Much? - $220* 💳
      </h2>
      <p className="my-8 fade-in">
        {`Our goal is to make this conference accessible and affordable, especially since we hope that friends from around the country will fly in to attend. Costs are roughly 20 dollars for lodging and 20 dollars a day for food. We're hoping to break even 😰.`}
      </p>
      <p className="my-8 fade-in">
        {`*We're asking $220 per person and half off for children, (14 years old and younger). `}{" "}
      </p>
      <p className="my-8 fade-in">
        <a className="link link-error" href="mailto:cludwell@gmail.com">
          If price might be a barrier to you attending please reach out to us.
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
        {`Let us know what workshops you want to lead so we can update this!`}
      </p>

      {/* <div className="m-auto overflow-x-auto rounded-b-lg w-fit">
        <table className="table-xs sm:table-sm md:table-lg table-zebra bg-base-300 rounded-xl">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className="">
     
            <tr>
              <td>Sarah McMuffin</td>
              <td>Happy Accidents</td>
              <td>Tattoos for consenting adults! </td>
            </tr>
            <tr>
              <td>Matty</td>
              <td>Cryptids 101</td>
              <td>Sometimes the truth really is out there👹</td>
            </tr>
            <tr>
              <td>C</td>
              <td>An antifascist discussion</td>
              <td>
                We'll talk about definitions, theory, and wth even is this
                country?
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
