"use client";
import { useEffect, useState } from "react";
import IconExclamation from "@/components/Icons/IconExclamation";
import { useSession } from "next-auth/react";
import PleaseSignIn from "@/components/PleaseSignIn";
import { useStore } from "@/store/ZustandProvider";
import { Special_Elite, Amatic_SC } from "next/font/google";
import UpdateSuccessful from "@/components/UpdateSuccessful";

const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
export default function UpdateRegistration() {
  const { data: session, status: loading } = useSession();
  const { bookings, updateBookingInfo } = useStore();
  const [errors, setErrors] = useState({});
  const [emailList, setEmailList] = useState(false);
  const [photoConsent, setPhotoConsent] = useState(false);
  const [textUpdates, setTextUpdates] = useState(false);
  const [updated, setUpdated] = useState(null);
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
    id,
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

  const booking = bookings.filter((b) => b.id == 1)[0];
  console.log("booking", userData);
  useEffect(() => {
    setUserData({
      emergencyName: booking?.emergencyName ? booking?.emergencyName : "",
      emergencyNumber: booking?.emergencyNumber ? booking?.emergencyNumber : "",
      emergencyRelation: booking?.emergencyRelation
        ? booking?.emergencyRelation
        : "",
      dietaryRestrictions: booking?.dietaryRestrictions
        ? booking?.dietaryRestrictions
        : "",
      allergies: booking?.allergies ? booking?.allergies : "",
      notes: booking?.notes ? booking?.notes : "",
      specialAccomodations: booking?.specialAccomodations
        ? booking?.specialAccomodations
        : "",
      lodging: booking?.lodging ? booking?.lodging : "",
    });
  }, [
    booking?.emergencyName,
    booking?.emergencyNumber,
    booking?.emergencyRelation,
    booking?.dietaryRestrictions,
    booking?.allergies,
    booking?.notes,
    booking?.specialAccomodations,
    booking?.lodging,
    bookings,
    booking?.emailList,
    booking?.photoConsent,
    booking?.textUpdates,
  ]);

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
      userData = {
        ...userData,
        emailList,
        photoConsent,
        textUpdates,
        id: booking?.id,
      };
      await updateBookingInfo(userData);
      setUpdated(true);
      window.location.href = "#header"
    }
  };

  if (!session) return <PleaseSignIn />;
  return (
    <div
      className={special.className + " p-16 max-w-screen-xl mx-auto leading-8"}
    >
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        Update 2024 Registration
      </h2>
      {updated ? (
        <UpdateSuccessful  />
      ) : (
        <form
          className=" flex flex-col items-center mx-auto w-3/4 fade-in"
          onSubmit={handleSubmit}
        >
          <div className=" flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className=" text-2xl">Emergency Contact </div>
            <div></div>
            <label className=" font-bold text-xl" htmlFor="emergencyName">
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
                className="input input-bordered input-primary w-full max-w-xs"
              />
              {errors && errors.emergencyName && (
                <div className=" bg-red-300 text-red-950 rounded-2xl my-3 flex flex-row p-3 fade-in w-80">
                  <IconExclamation /> {errors.emergencyName}
                </div>
              )}
            </div>
            <label className=" font-bold text-xl" htmlFor="emergencyNumber">
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
                className="input input-bordered input-secondary w-full max-w-xs"
              />
              {errors && errors.emergencyNumber && (
                <div className="bg-red-300 text-red-950 rounded-2xl my-3 flex flex-row p-3 fade-in w-80">
                  <IconExclamation /> {errors.emergencyNumber}
                </div>
              )}
            </div>

            <label className=" font-bold text-xl" htmlFor="emergencyRelation">
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
                className="input input-bordered input-accent w-full max-w-xs"
              />
              {errors && errors.emergencyRelation && (
                <div className=" bg-red-300 text-red-950 rounded-2xl my-3 flex flex-row p-3 fade-in w-80">
                  <IconExclamation /> {errors.emergencyRelation}
                </div>
              )}
            </div>
            <label
              className=" font-bold text-xl md:mt-8"
              htmlFor="dietaryRestrictions"
            >
              Dietary Restrictions
            </label>
            <div>
              <select
                className="select select-info w-full max-w-xs md:mt-8"
                type="text"
                name="dietaryRestrictions"
                id="dietaryRestrictions"
                value={dietaryRestrictions}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Please make a selection
                </option>{" "}
                <option value={"Omnivore"}>Omnivore</option>
                <option value={"Vegan"}>Vegan</option>
                <option value={"Vegetarian"}>Vegetarian</option>
              </select>
              {errors && errors.dietaryRestrictions && (
                <div className=" bg-red-300 text-red-950 rounded-2xl my-3 flex flex-row p-3 fade-in w-80">
                  <IconExclamation /> {errors.dietaryRestrictions}
                </div>
              )}
            </div>
            <label className=" font-bold text-xl md:mt-8" htmlFor="lodging">
              Lodging
            </label>
            <div>
              <select
                className="select select-info w-full max-w-xs md:mt-8"
                type="text"
                name="lodging"
                id="lodging"
                value={lodging}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Please make a selection
                </option>{" "}
                <option value={"Lodges"}>Lodges</option>
                <option value={"Adirondacks"}>Adirondacks</option>
              </select>
              {errors && errors.lodging && (
                <div className=" bg-red-300 text-red-950 rounded-2xl my-3 flex flex-row p-3 fade-in w-80">
                  <IconExclamation /> {errors.lodging}
                </div>
              )}
            </div>
            <label className=" font-bold text-xl" htmlFor="allergies">
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
              className=" font-bold text-xl"
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
            <label className=" font-bold text-xl" htmlFor="notes">
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
            <label className=" font-bold text-xl" htmlFor="photoConsent">
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
            <label className=" font-bold text-xl" htmlFor="textUpdates">
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
            <label className=" font-bold text-xl" htmlFor="emailList">
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
            className="btn btn-accent btn-wide mb-4 text-xl mt-12"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
