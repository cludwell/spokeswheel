import { useState, useEffect } from "react";
import Modal from "./Modal";
import IconExclamation from "./Icons/IconExclamation";
import { signIn } from "next-auth/react";
export default function SignUpModal() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: new Date().t,
    email: "",
    password: "",
  });
  const { firstName, lastName, dateOfBirth, email, password, confirmPassword } =
    userData;

  const validate =  () => {
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
    return err;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors)
    if (validationErrors.length) return;
    else if (
      !errors.length &&
      email &&
      password &&
      firstName &&
      lastName &&
      dateOfBirth
    ) {
      await signIn("credentials", {
        ...userData,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        action: "signup",
      });
    }
  };
  return (
    <>
      <button className="btn btn-ghost text-xl" onClick={() => setOpen(true)}>
        sign up
      </button>
      <Modal open={open} setOpen={setOpen}>
        <div className="overflow-y-auto xl:overflow-visible max-h-[80vh] tex-base">
          <h1 className={" text-center text-3xl font-bold mb-6 montserrat"}>
            Sign Up
          </h1>
          <form className="p-5" onSubmit={handleSubmit}>

              {errors.map((error, i) => (
                <div
                  key={`error${i}`}
                  className=" w-full bg-red-300 text-red-950 rounded-2xl my-3 flex flex-row p-3 fade-in text-base"
                >
                  <IconExclamation /> {error}
                </div>
              ))}

            <div className="grid grid-cols-2 gap-4">
              <label className=" text-cyan-500 font-bold  " htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={handleChange}
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <label className=" text-cyan-500 font-bold  " htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={handleChange}
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <label
                className=" text-cyan-500 font-bold  "
                htmlFor="dateOfBirth"
              >
                Date Of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={handleChange}
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <label className=" text-cyan-500 font-bold  " htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <label
                className=" text-cyan-500 thasadith font-bold  "
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                required
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <label
                className=" text-cyan-500 thasadith font-bold  "
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
                className="input input-bordered input-accent w-full max-w-xs"
              />
            </div>
            <div className="flex flex-row justify-around mt-12">
              <button
                type="submit"
                className=" btn btn-primary btn-wide text-xl"
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
