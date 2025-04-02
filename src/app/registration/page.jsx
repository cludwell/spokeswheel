"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useStore } from "@/store/ZustandProvider";
import { useRouter } from "next/navigation";
import IconExclamation from "@/components/Icons/IconExclamation";
import PleaseSignIn from "@/components/PleaseSignIn";
import IconInfo from "@/components/Icons/IconInfo";
import Loading from "@/components/Loading";
import StripeDirection from "@/components/StripeDirection";
import SuccessMessage from "@/components/SuccessMessage";
import { amatic, special } from "../fonts";
export default function Register() {
  const { data: session, status: loading } = useSession();
  const { bookings, createBooking, fetchUsersBookings, user } = useStore();
  const [errors, setErrors] = useState({});
  const [emailList, setEmailList] = useState(false);
  const [photoConsent, setPhotoConsent] = useState(false);
  const [textUpdates, setTextUpdates] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  let [userData, setUserData] = useState({
    conferenceId: 2,
    photoConsent: false,
    paid: false,
    emergencyName: "",
    emergencyNumber: "",
    emergencyRelation: "",
    emailList: false,
    textUpdates: false,
    dietaryRestrictions: "",
    allergies: "",
    notes: "",
    specialAccomodations: "",
    lodging: "",
    paymentAmount: 0,
    paymentIntentId: null,
    paymentMethodId: null,
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
    paymentAmount,
  } = userData;

  useEffect(() => {
    if (user?.dateOfBirth)
      setUserData((prev) => ({
        ...prev,
        paymentAmount:
          new Date(user?.dateOfBirth) >= new Date("2011-08-22T00:00:00.000Z")
            ? 82.32
            : 164.64,
      }));
  }, [user?.dateOfBirth]);

  const booked = bookings.filter((b) => b.conferenceId == 2)[0];

  useEffect(() => {
    const loadData = async () => {
      fetchUsersBookings();
      setLoaded(true);
    };
    loadData();
    if (booked && booked?.paid == true)
      router.push("/registration/success");
  }, [fetchUsersBookings, bookings, router]);

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
        [name]: formattedPhoneNumber,
      }));
    } else {
      // For all other inputs, use the value as-is
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
        // paymentAmount: lodging == "Adirondacks" ? 125 : 105,
      }));
    }
  };

  const validate = () => {
    const err = {};
    if (!emergencyName || emergencyName.length < 6)
      err.emergencyName = "Please enter a full name for emergency contact.";
    if (!emergencyNumber || emergencyNumber.length < 14)
      err.emergencyNumber = "Please enter a valid phone number.";
    if (!emergencyRelation || emergencyRelation.length < 3)
      err.emergencyRelation =
        "Please let us know your relationship to this person.";
    if (!dietaryRestrictions)
      err.dietaryRestrictions = "Please make a diet selection.";
    if (!lodging) err.lodging = "Please select lodging accomodations.";
    setErrors(err);
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.values(validationErrors).length > 0) return;
    else {
      userData = { ...userData, emailList, photoConsent, textUpdates };
      await createBooking(userData);
    }
  };
  // find one registration and check paid status
  if (!session) return <PleaseSignIn />;
  if (!loaded) return <Loading />;
  // console.log("reg form",user?.dateOfBirth)
  return (
    <>
      <div
        className={
          special.className +
          " p-4 sm:p-16 max-w-screen-xl mx-auto leading-8 min-h-[50vh]"
        }
      >
        <h2
          className={amatic.className + " mb-12 text-4xl sm:text-5xl fade-in"}
        >
          2025 Registration At Camp Farnsworth!
        </h2>
        {booked && booked?.paid == false ? (
          <StripeDirection
            id={session.user.id}
            dateOfBirth={user?.dateOfBirth}
          />
        ) : booked && booked.paid == true ? (
          <SuccessMessage />
        ) : (
          <form
            className="flex flex-col items-center w-3/4 mx-auto fade-in"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
              <div className="divider"></div> <div className="divider"></div>
              <div className="text-xl ">Emergency Contact </div>
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
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-xl fade-in w-80">
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
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-xl fade-in w-80">
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
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-xl fade-in w-80">
                    <IconExclamation /> {errors.emergencyRelation}
                  </div>
                )}
              </div>
              <div className="divider"></div> <div className="divider"></div>
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
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-xl fade-in w-80">
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
                  <option value={"Cabins"}>Cabins</option>
                  <option value={"Tent Camping"}>Tent Camping</option>
                </select>
                {errors && errors.lodging && (
                  <div className="flex flex-row p-3 my-3 bg-red-300 text-red-950 rounded-xl fade-in w-80">
                    <IconExclamation /> {errors.lodging}
                  </div>
                )}
                <div className="flex flex-row p-3 my-3 text-sm leading-6 bg-yellow-300 border-2 border-yellow-900 rounded-xl text-yellow-950 fade-in w-80">
                  <span className="block mr-1">
                    <IconInfo />
                  </span>{" "}
                  On site camping is available if you bring a tent. The
                  Tovariche Cabins range in capacity from 2-8 people. If you
                  have a strong preference for who you want to stay with please
                  mention in the notes!
                </div>
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
                placeholder="Is there anything else you'd like us to know? Do you need a ride from Logan? Who are you sharing a cabin with?"
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
              <div className="divider mr-[-1rem] sm:block hidden"></div>
              <div className="divider "></div>
              <p className="flex flex-row text-xl font-bold ">Total</p>
              <p className="flex flex-row text-xl ">${paymentAmount}</p>
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
