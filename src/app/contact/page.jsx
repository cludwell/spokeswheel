import { amatic, special } from "../fonts";

export default function ContactUs() {

  return (
    <div
      className={
        special.className + "p-4 sm:p-16 max-w-screen-xl mx-auto leading-8 fade-in min-h-screen"
      }
    >
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>Contact Us</h2>
      <p className="my-8 ">
        {`Questions? Suggestions? Would you like to participate in the planning? We need your help! We can't emphasis enough that this con is what each one of us brings to it. Please think about planning a workshop, a worship, or start practices a few songs to perform. If you would like to participate we need help with the following roles`}
      </p>
      <ul className="m-8 fade-in">
        <li className="list-disc ">Yearbook Coordinator</li>
        <li className="list-disc ">Member at Large</li>
      </ul>
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>Website </h2>
      <p className="my-8 ">
        For any technical problems with registration or the website, please
        email me at cludwell@gmail.com
      </p>
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        Workshop Coordinator
      </h2>
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        Worship Coordinator
      </h2>
      <h2 className={amatic.className + " mb-12 text-5xl"}>Meal Coordinator</h2>
    </div>
  );
}
