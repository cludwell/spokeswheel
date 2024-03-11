"use client";
import { useState } from "react";
import IconExclamation from "@/components/Icons/IconExclamation";
import { useSession } from "next-auth/react";
import PleaseSignIn from "@/components/PleaseSignIn";
import { useStore } from "@/store/ZustandProvider";
import { Special_Elite, Amatic_SC } from "next/font/google";
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
export default function Register() {
  const { data: session, status: loading } = useSession();
  const { bookings, createBooking } = useStore();
  const [errors, setErrors] = useState({});
  const [emailList, setEmailList] = useState(false);
  const [photoConsent, setPhotoConsent] = useState(false);
  const [textUpdates, setTextUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  let [userData, setUserData] = useState({
    conferenceId: 1,
    photoConsent: false,
    paid: false,
    emergencyName: "",
    emergencyNumber: "",
    emergencyRelation: "",
    emailList: false,
    textUpdates: false,
    dietaryRestrictions: "Please make a selection",
    allergies: "",
    notes: "",
    specialAccomodations: "",
    lodging: "",
  });

  const {
    emergencyName,
    emergencyNumber,
    emergencyRelation,
    dietaryRestrictions,
    allergies,
    notes,
    specialAccomodations,
    lodging,
  } = userData;
  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type == "checkbox") {
      let opposite = value;
      setUserData((prevState) => ({
        ...prevState,
        [name]: !opposite,
      }));
    }
    if (name === "emergencyNumber") {
      // Only format if the input name is 'emergencyNumber'
      const formattedPhoneNumber = formatPhoneNumber(value);
      setUserData((prevState) => ({
        ...prevState,
        [name]: formattedPhoneNumber, // Use the formatted number
      }));
    } else {
      // For all other inputs, use the value as-is
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const validate = () => {
    const err = {};
    if (!emergencyName || emergencyName.length < 6)
      err.emergencyName = "Please enter a name for emergency contact.";
    if (!emergencyNumber || emergencyNumber.length < 14)
      err.emergencyNumber = "Please enter a valid phone number.";
    if (!emergencyRelation || emergencyRelation.length < 3)
      err.emergencyRelation =
        "Please let us know your relationship to this person.";
    if (dietaryRestrictions.length < 5)
      err.dietaryRestrictions = "Please make a diet selection";
    setErrors(err);
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length) return;
    else {
      userData = { ...userData, emailList, photoConsent, textUpdates };
      await createBooking(userData);
      setSubmitted(true);
    }
  };
  let booked = bookings.filter((b) => b.conferenceId == 1);
  if (!session) return <PleaseSignIn />;
  return (
    <>
      <div
        className={
          special.className +
          " p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh]"
        }
      >
        <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
          2024 Registration At Camp Seawood!
        </h2>
        {!!booked.length || submitted ? (
          <div className="flex flex-col items-center justify-center w-full">
            <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
              {`✅We'll see you there!`}
            </h2>
            <p className="fade-in">{`Your registration is complete! We're looking forward to seeing you at the conference!`}</p>
          </div>
        ) : (
          <form
            className="flex flex-col items-center w-3/4 mx-auto fade-in"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
              <div className="text-2xl ">Emergency Contact </div>
              <div></div>
              <label className="text-xl font-bold " htmlFor="emergencyName">
                - Name
              </label>
              <div>
                <input
                  type="text"
                  name="emergencyName"
                  id="emergencyName"
                  value={emergencyName}
                  onChange={handleChange}
                  required
                  className="w-full max-w-xs input input-bordered input-primary"
                />
                {errors && errors.emergencyName && (
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-2xl fade-in w-80">
                    <IconExclamation /> {errors.emergencyName}
                  </div>
                )}
              </div>
              <label className="text-xl font-bold " htmlFor="emergencyNumber">
                - Number
              </label>
              <div>
                <input
                  type="tel"
                  name="emergencyNumber"
                  id="emergencyNumber"
                  value={emergencyNumber}
                  onChange={handleChange}
                  pattern="\(\d{3}\) \d{3}-\d{4}"
                  placeholder="(123) 456-7890"
                  maxLength={14}
                  required
                  className="w-full max-w-xs input input-bordered input-secondary"
                />
                {errors && errors.emergencyNumber && (
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-2xl fade-in w-80">
                    <IconExclamation /> {errors.emergencyNumber}
                  </div>
                )}
              </div>

              <label className="text-xl font-bold " htmlFor="emergencyRelation">
                - Relation
              </label>
              <div>
                <input
                  type="text"
                  name="emergencyRelation"
                  id="emergencyRelation"
                  value={emergencyRelation}
                  onChange={handleChange}
                  required
                  className="w-full max-w-xs input input-bordered input-accent"
                />
                {errors && errors.emergencyRelation && (
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-2xl fade-in w-80">
                    <IconExclamation /> {errors.emergencyRelation}
                  </div>
                )}
              </div>
              <label
                className="text-xl font-bold md:mt-8"
                htmlFor="dietaryRestrictions"
              >
                Dietary Restrictions
              </label>
              <div>
                <select
                  className="w-full max-w-xs select select-info md:mt-8"
                  type="text"
                  name="dietaryRestrictions"
                  id="dietaryRestrictions"
                  value={dietaryRestrictions}
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Please make a selection
                  </option>{" "}
                  <option value={"Omnivore"}>Omnivore</option>
                  <option value={"Vegan"}>Vegan</option>
                  <option value={"Vegetarian"}>Vegetarian</option>
                </select>
                {errors && errors.dietaryRestrictions && (
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-2xl fade-in w-80">
                    <IconExclamation /> {errors.dietaryRestrictions}
                  </div>
                )}
              </div>
              <label className="text-xl font-bold md:mt-8" htmlFor="lodging">
                Lodging
              </label>
              <div>
                <select
                  className="w-full max-w-xs select select-info md:mt-8"
                  type="text"
                  name="lodging"
                  id="lodging"
                  value={lodging}
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Please make a selection
                  </option>{" "}
                  <option value={"Lodges"}>Lodges</option>
                  <option value={"Adirondacks"}>Adirondacks</option>
                </select>
                {errors && errors.lodging && (
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-2xl fade-in w-80">
                    <IconExclamation /> {errors.lodging}
                  </div>
                )}
              </div>
              <label className="text-xl font-bold " htmlFor="allergies">
                Allergies
              </label>
              <textarea
                type="text"
                name="allergies"
                id="allergies"
                value={allergies}
                onChange={handleChange}
                placeholder="Are there any allergies that we should know about? Foods you cannot eat? Medications not to be given in an emergency? If not, you can just write - N/A"
                className="textarea textarea-warning min-h-40 w-80"
              />
              <label
                className="text-xl font-bold "
                htmlFor="specialAccomodations"
              >
                Special Accomodations
              </label>
              <textarea
                type="text"
                name="specialAccomodations"
                id="specialAccomodations"
                value={specialAccomodations}
                onChange={handleChange}
                placeholder="Are there any special accomodations we can try to make for you? Is there medication you need refrigerated? Accessibility concerns?"
                className="textarea textarea-error min-h-40 w-80"
              />
              <label className="text-xl font-bold " htmlFor="notes">
                Notes
              </label>
              <textarea
                type="text"
                name="notes"
                id="notes"
                value={notes}
                onChange={handleChange}
                placeholder="Is there anything else you'd like us to know? Could you use a ride from Logan Airport? "
                className="textarea textarea-primary min-h-40 w-80"
              />
              <label className="text-xl font-bold " htmlFor="photoConsent">
                Photo Consent
              </label>
              <input
                type="checkbox"
                className="toggle toggle-success"
                name="photoConsent"
                id="photoConsent"
                value={photoConsent}
                onChange={() => setPhotoConsent((prev) => !prev)}
              />
              <label className="text-xl font-bold " htmlFor="textUpdates">
                Text Updates
              </label>
              <input
                type="checkbox"
                className="toggle toggle-warning"
                name="textUpdates"
                id="textUpdates"
                value={textUpdates}
                onChange={() => setTextUpdates((prev) => !prev)}
              />
              <label className="text-xl font-bold " htmlFor="emailList">
                Email List
              </label>
              <input
                type="checkbox"
                className="toggle toggle-info"
                name="emailList"
                id="emailList"
                value={emailList}
                onChange={() => setEmailList((prev) => !prev)}
              />
            </div>
            <button
              className="mt-12 mb-4 text-xl btn btn-accent btn-wide"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}
