import { amatic, special } from "../fonts";
export default function AboutUs() {
  return (
    <div
      className={
        special.className + " p-4 sm:p-16 max-w-screen-xl mx-auto leading-5 md:leading-8 text-xs sm:text-sm"
      }
    >
      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        Who we are
      </h2>
      <p
        className={" my-8 fade-in"}
      >{`We are a group of left leaning folks in a collective search for meaning. Many of us grew up in Unitarian Universalist (UU) or UU adjacent spaces and conferences. Disillusioned by that community, as adults we have struggled to find spiritual spaces that do not bear the authoritarianism of organized religion, celebrate spiritual bypassing (using spiritual ideas and practices to avoid facing psychological wounds caused by capitalism, the state, patriarchy, etc.) or the appropriative practices of what passes as "spirituality." You won't hear us saying corny stuff like "low vibration frequency" 🤨. What the heck even is that?`}</p>

      <p className="my-8 fade-in">
        {`These are scary times that we're living through. How do we maintain a radical belief in people when half the country is willing to overlook an active genocide, and the other half willing to excuse fascism? In these atomizing and alienating conditions it's never been more important to build and nurture community. `}
      </p>
      <p className="my-8 fade-in">
        {`We understand this is a hard sell, asking people to take off work to take a risk on a experience they probably have misgivings about. I probably would not be involved with this community myself, if not for the luck of discovering these people and the lightning in a bottle-like experiences we shared together. Has there ever been an experience you've had that changed your life? A zine by an anonymous author? A punk show in somebody's basement? Do you remember the scepticism you had on the first page? The stifling heat of others' bodies while music pummeled your ears? If the opportunity for such an experience presented itself again, would you recognize it?`}
      </p>

      <p className="my-8 fade-in">
        {`We are trying to build an intentional spiritual community, across
        generations, that is based on mutual aid, anti-oppression, and social
        solidarity. We embody this through:`}
      </p>

      <ul className="ml-4 fade-in">
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">👩🏾‍🤝‍🧑🏻</div>
          <div>Consensus decision making</div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">🌎</div>
          <div>Prefiguring the world we want to see</div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">✊</div>
          <div>Workshops on collective liberation</div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">🎁</div>
          <div>Being present in the moment</div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">🚨</div>
          <div>Not policing each other</div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">👨🏼‍💻</div>
          <div>Intentionally disconnecting from technology</div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">🤝🏼</div>
          <div>Being anti-racist</div>
        </li>
      </ul>
      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        What To Expect
      </h2>
      <p className="my-8 ">{`This community is what we make of it. Think of it as a stone soup, where everyone  brings something to contribute. As this will be our second conference, we're still imagining what this could be. We've floated ideas of traveling the country together, going on a backpacking trip through a national park to an isolated hot spring, or staying in a haunted hotel on an island. Everything here is a living document open to change with your participation. The general structure to expect is: `}</p>
      <ul className="ml-4 ">
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">🏕</div>
          <div className="">
            Summer camp for all ages if summer camp were punk rock AF.
          </div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">👨🏼‍🍳</div>
          <div>
            {`Cooking giant amounts of food and eating collective meals together.`}
          </div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">👩🏼‍🏫</div>
          <div>
            {`Workshops on things we're passionate about during the day.`}
          </div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">🧘‍♂️</div>
          <div>
            {`Evening worship/mediation, some reflection about this human experience, completely voluntary.`}
          </div>
        </li>
        <li className="flex flex-row" my-2>
          <div className="w-6 mx-2 ">👨‍👩‍👦‍👦</div>
          <div>
            {`Break out groups, called family groups, to foster building connections
          with other conferees.`}
          </div>
        </li>
        <li className="flex flex-row my-2">
          <div className="w-6 mx-2 ">🎸</div>
          <div>
            {`A coffee house at the end of the conference, a time to play music, sing, or share some other performance, completely voluntary. In the past this has looked like a punk show in the middle of the woods.`}
          </div>
        </li>
      </ul>

      <p className="my-8 ">
        <a className="link link-primary" href="plans2025">
          Check out our plans for this year for specifics
        </a>
      </p>
      <h2
        className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }
      >
        Agreements
      </h2>
      <p className="my-8 ">
        Attendance implies consent to the following agreements. All agreements
        are open to review by the community.
      </p>
      <ul className="ml-12">
        <li className="list-disc ">{`Let's keep the conference inclusive to sober people and not bring substances`}</li>
        <li className="list-disc ">{`No weapons or violence`}</li>
        <li className="list-disc ">{`No bigotry`}</li>
        <li className="list-disc ">{`We're an intergenerational conference. If there are little ones, we all look after their safety.`}</li>
      </ul>
    </div>
  );
}
