import { Amatic_SC, Special_Elite } from "next/font/google";
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
export default function AboutUs() {
  return (
    <div
      className={special.className + " p-16 bg-black max-w-screen-xl mx-auto leading-8"}
    >
      <h2 className={amatic.className + " mb-12 text-5xl"}>Who we are</h2>
      <p
        className={" my-8"}
      >{`We are a group of radicals and leftists who come out of Unitarian Universalist (UU) or UU adjacent spaces and conferences. Disillusioned by that community, which seemed like virtue signaling without principal, we as adults have struggled to find spiritual spaces that do not bear the authoritarianism of organized religion, or the appropriation, spiritual by-passing, and apolitical nature of what passes as "spirituality." You won't hear us saying corny shit like "low vibration frequency" 🤨. What the heck even is that?`}</p>

      <p className=" my-8">
        We are trying to build an intentional spiritual community, across
        generations, that is based on mutual aid, anti-oppression, and social
        solidarity. We embody this by:
      </p>

      <ul className="ml-12">
        <li className=" list-disc">Consensus decision making</li>
        <li className=" list-disc">Prefiguring the world we want to see</li>
        <li className=" list-disc">Workshops on collective liberation</li>
        <li className=" list-disc">Being present in the moment</li>
        <li className=" list-disc">Not policing each other</li>
        <li className=" list-disc">
          Intentionally disconnecting from technology
        </li>
        <li className=" list-disc">Being anti-racist</li>
      </ul>
      <h2 className={amatic.className + " my-12 text-5xl"}>What To Expect</h2>
      <p className=" my-8">{`This community is what we make of it. As this will be our first conference, we're still imagining what this could be. We've floated ideas of traveling the country together, going on a backpacking trip through a national park to an isolated hot spring, or staying in a haunted hotel on an isolated island. Everything here is a living document open to change with your participation. The general structure to expect is: `}</p>
      <ul className="ml-12">
        <li className=" list-disc">Summer camp, if summer camp were punk as fuck.</li>
        <li className=" list-disc">{`Cooking giant amounts of food and eating collective meals together.`}</li>
        <li className=" list-disc">{`Workshops on things we're passionate about during the day.`}</li>
        <li className=" list-disc">{`Evening worship, some reflection about this human experience, completely voluntary.`}</li>
        <li className=" list-disc">
          Break out groups, called touch groups, to foster building connections
          with other conferees.
        </li>
        <li className=" list-disc">{`A coffee house at the end of the conference, a time to play music, sing, or share some other performance, completely voluntary. In the past this has looked like a punk show in the middle of the woods.`}</li>
        {/* <li className=" list-disc">
          Intentionally disconnecting from technology
        </li>
        <li className=" list-disc">Being anti-racist</li> */}
      </ul>
      <p className=" my-8">Check out our plans for this year for specifics</p>
      <h2 className={amatic.className + " my-12 text-5xl"}>Agreements</h2>
      <p className=" my-8">Attendance implies consent to the following agreements. All agreements are open to review by the community.</p>
      <ul className="ml-12">
        <li className=" list-disc">{`Let's keep the conference inclusive to sober people and not bring substances`}</li>
        <li className=" list-disc">{`No weapons or violence`}</li>
        <li className=" list-disc">{`No bigotry`}</li>
        {/* <li className=" list-disc">{`Foc`}</li> */}



      </ul>
    </div>
  );
}
