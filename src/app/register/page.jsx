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
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    conferenceId: 1,
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
  });

  const {
    photoConsent,
    emergencyName,
    emergencyNumber,
    emergencyRelation,
    emailList,
    textUpdates,
    dietaryRestrictions,
    allergies,
    notes,
    specialAccomodations,
    lodging,
  } = userData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const validate = () => {
    const err = {};
    if (!emergencyName || emergencyName.length < 6)
      err.emergencyName = "Please enter a name for emergency contact.";
    if (!emergencyNumber || emergencyNumber.length < 10)
      err.emergencyNumber = "Please enter a valid phone number.";
    if (!emergencyRelation || emergencyRelation.length < 3)
      err.emergencyRelation =
        "Please let us know your relationship to this person.";
    setErrors(err);
  };
  let booked = false;

  return (
    <>
      <div
        className={
          special.className + " p-16 bg-black max-w-screen-xl mx-auto leading-8"
        }
      >
        <h2 className={amatic.className + " mb-12 text-5xl"}>
          2024 Registration
        </h2>
        {booked && (
          <h2 className={amatic.className + " mb-12 text-5xl"}>
            {`✅We'll see you there!`}
          </h2>
        )}
      </div>
    </>
  );
}
