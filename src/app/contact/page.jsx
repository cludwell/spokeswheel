import { amatic, special } from "../fonts";

export default function ContactUs() {
  return (
    <div
      className={`${special.className} p-4 sm:p-16 max-w-screen-xl mx-auto leading-8 min-h-screen `}
    >
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        Contact Us
      </h2>
      <p className="my-8 ">
        {`Questions? Suggestions? Would you like to participate in the planning? We need your help! We can't emphasis enough that this conference is what each one of us brings to it. Please think about planning a workshop, a worship, or start practicing a few songs to perform. If you would like to participate we need help with the following roles.`}
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
      <p className="my-8 ">
        {`I believe that at the moment Sarah Mc is our workshop coordinator. The workshops that will be available will be the ones that attendees plan! So please think if there is something you would like to share? A report back from an important demonstration or protest? A history of a niche subject? Making pottery from foraged clay? `}
      </p>
      <p className="my-8 ">
        {`I'll put Sarah's email here once I get consent from her.`}
      </p>
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        Reflections Coordinator
      </h2>
      <p className="my-8 ">
        {`Each night, we're planning on having guided meditations, reflections, or some spaces we've been in have called them worships. These require community input! If you or a few others would like to lead a reflection please reach out to Meghan, our Reflections Coordinator.`}
      </p>
      <p className="my-8 ">
        {`Meghan can be reached at mkguilfoyle90@gmail.com`}
      </p>
      <h2 className={amatic.className + " mb-12 text-5xl"}>Meal Coordinator</h2>
      <p className="my-8 ">
        {`Jared will be coordinating food for us! If you have any dietary restrictions or concerns you can reach Jared at jareddefrancesco@gmail.com`}
      </p>
    </div>
  );
}
