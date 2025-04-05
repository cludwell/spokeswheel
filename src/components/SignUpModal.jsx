import { useState } from "react";
import Modal from "./Modal";
import IconExclamation from "./Icons/IconExclamation";
import { signIn } from "next-auth/react";
export default function SignUpModal() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),
    email: "",
    password: "",
    phoneNumber: "",
  });
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
    confirmPassword,
    phoneNumber,
  } = userData;

  const validate = () => {
    const err = [];
    if (
      !email ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.length < 6
    )
      err.push("Please enter a valid email.");
    if (!password || password.length < 6)
      err.push("Passwords must be at least 6 characters.");
    if (password != confirmPassword) err.push("Passwords do not match.");
    if (!firstName || !lastName) err.push("Please enter your name.");
    if (!dateOfBirth) err.push("Please enter your date of birth.");
    if (phoneNumber.length < 14) err.push("Please enter a valid phone number.");
    return err;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "phoneNumber") {
      const formattedPhoneNumber = formatPhoneNumber(value);
      setUserData((prev) => ({
        ...prev,
        [name]: formattedPhoneNumber,
      }));
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
    // console.log("userdata", userData);
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (validationErrors.length) return;
    else if (
      !errors.length &&
      email &&
      password &&
      firstName &&
      lastName &&
      dateOfBirth
    ) {
      // console.log('USER DATA GOING IN============', userData)
      await signIn("credentials", {
        ...userData,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        action: "signup",
      });
    }
  };
  return (
    <>
      <button
        className="text-xs btn btn-ghost sm:text-base md:text-lg"
        onClick={() => setOpen(true)}
      >
        sign up
      </button>
      <Modal open={open} setOpen={setOpen}>
        <div className="overflow-y-auto max-h-[80vh]  ">
          <h1 className={" text-center text-xl sm:text-3xl font-bold mb-6"}>
            Sign Up
          </h1>
          <form className="p-5" onSubmit={handleSubmit}>
            {errors.map((error, i) => (
              <div
                key={`error${i}`}
                className="flex flex-row w-full p-3 my-3 text-base bg-red-300 text-red-950 rounded-2xl fade-in"
              >
                <IconExclamation /> {error}
              </div>
            ))}

            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
              <label className="font-bold text-cyan-500" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={handleChange}
                required
                className="w-full max-w-xs input input-sm sm:input-md input-bordered input-primary"
              />
              <label className="font-bold text-cyan-500" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={handleChange}
                required
                className="w-full max-w-xs input input-sm sm:input-md input-bordered input-secondary"
              />
              <label className="font-bold text-cyan-500" htmlFor="dateOfBirth">
                Date Of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={handleChange}
                required
                className="w-full max-w-xs input input-sm sm:input-md input-bordered input-accent"
              />
              <label className="font-bold text-cyan-500" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full max-w-xs input input-sm sm:input-md input-bordered input-info"
              />
              <label className="font-bold text-cyan-500" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
                pattern="\(\d{3}\) \d{3}-\d{4}"
                placeholder="(555) 555-5555"
                maxLength={14}
                required
                className="w-full max-w-xs input input-sm sm:input-md input-bordered input-secondary"
              />
              <label className="font-bold text-cyan-500" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                required
                className="w-full max-w-xs input input-sm sm:input-md input-bordered input-error"
              />
              <label
                className="font-bold text-cyan-500"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
                className="w-full max-w-xs input input-sm sm:input-md input-bordered input-warning"
              />
            </div>
            <div className="flex flex-row justify-around mt-12">
              <button
                type="submit"
                className="text-xl btn btn-primary btn-wide "
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
