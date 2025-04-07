import { amatic, special } from "../fonts";

export default function ContactUs() {
  return (
    <div
    className={
      special.className + " p-4 sm:p-16 max-w-screen-xl mx-auto leading-5 md:leading-8 text-xs sm:text-sm"
    }
    >
      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        Contact Us
      </h2>
      <p className="my-8 fade-in">
        {`Questions? Suggestions? Would you like to participate in the planning? We need your help! We can't emphasis enough that this conference is what each one of us brings to it. Please think about planning a workshop, a meditation/worship, or start practicing a few songs to perform. As an organization we're rather ad hoc at the moment but you're welcome to reach out about joining our meetings if interested. If you would like to participate we need help with the following roles.`}
      </p>
      <ul className="m-8 fade-in">
        <li className="list-disc ">{`Yearbook Coordinator - Do you have a DSLR? Any interest in documenting the growth of this community?`}</li>
        <li className="list-disc ">
          Member at Large - Would handle various oddball tasks
        </li>
      </ul>
      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        Website{" "}
      </h2>
      <p className="my-8 fade-in">
        {`For any technical problems with registration or the website, please
        email me at `}
        <a className="link link-error" href="mailto:cludwell@gmail.com">
          cludwell@gmail.com
        </a>
      </p>
      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        Workshop Coordinator
      </h2>
      <p className="my-8 fade-in">
        {`Sarah Mc is our workshop coordinator. The workshops that will be available will be the ones that attendees plan! So please think if there is something you would like to share? A report back from an important demonstration or protest? A history of a niche subject? Making pottery from foraged clay? `}
      </p>
      <p className="my-8 ">
        {`You can reach Sarah at `}
        <a className="link link-primary " href="mailto:smcmullen719@gmail.com">
          smcmullen719@gmail.com
        </a>
      </p>
      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        Reflections Coordinator
      </h2>
      <p className="my-8 ">
        {`Each night, we're planning on having guided meditations, reflections, or some spaces we've been in have called them worships. If this sounds weird, we encourage you to check it out at lease once. They're totally voluntary. These also require community input! If you or a few others would like to lead a reflection please reach out to Meghan, our Reflections Coordinator.`}
      </p>
      <p className="my-8 ">
        {`Meghan can be reached at `}
        <a className="link link-accent" href="mailto:mkguilfoyle90@gmail.com">
          mkguilfoyle90@gmail.com
        </a>
      </p>
      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        Meal Coordinator
      </h2>
      <p className="my-8 ">
        {`Jared will be coordinating food for us! If you have any dietary restrictions or concerns you can reach Jared at `}
        <a
          className="link link-warning"
          href="mailto:jareddefrancesco@gmail.com"
        >
          jareddefrancesco@gmail.com
        </a>
      </p>
      <h2         className={
          amatic.className + " mb-6 sm:mb-12 text-4xl sm:text-5xl fade-in"
        }>
        Family Group Coordinator
      </h2>
      <p className="my-8 ">
        {`We also need volunteers for people to lead family groups! If you have any experience or interest please reach out to Matty! Family groups are a space to break the ice with other conferees.`}
      </p>
      <p className="my-8 ">
        {`Please reach out to Matty at `}
        <a
          className="link link-secondary"
          href="mailto:matthewpatrickmorin@gmail.com"
        >
          matthewpatrickmorin@gmail.com
        </a>
      </p>
      <div className="m-auto overflow-x-auto rounded-b-lg w-fit">
        <table className="table-xs sm:table-sm md:table-lg table-zebra bg-base-300 rounded-xl">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* row 2 */}
            <tr>
              <td>Matty Mo</td>
              <td>Family Groups</td>
              <td>
                <a
                  className="link link-secondary"
                  href="mailto:matthewpatrickmorin@gmail.com"
                >
                  matthewpatrickmorin@gmail.com
                </a>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Meghan</td>
              <td>Reflections</td>
              <td>
                <a
                  className="link link-accent"
                  href="mailto:mkguilfoyle90@gmail.com"
                >
                  mkguilfoyle90@gmail.com
                </a>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>Jared</td>
              <td>Food</td>
              <td>
                <a
                  className="link link-warning"
                  href="mailto:jareddefrancesco@gmail.com"
                >
                  jareddefrancesco@gmail.com
                </a>
              </td>
            </tr>
            {/* row 5 */}
            <tr>
              <td>Chris</td>
              <td>Website</td>
              <td>
                <a className="link link-error" href="mailto:cludwell@gmail.com">
                  cludwell@gmail.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
