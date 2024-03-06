"use client";
import { useEffect, useState } from "react";
import { Special_Elite, Amatic_SC } from "next/font/google";
import IconExclamation from "@/components/Icons/IconExclamation";
import PleaseSignIn from "@/components/PleaseSignIn";
import { useSession } from "next-auth/react";
import { useStore } from "@/store/ZustandProvider";
const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});
export default function UpdateInfo() {
  const { data: session, status: loading } = useSession();
  const [errors, setErrors] = useState([]);
  const { user, fetchUserData } = useStore((state) => ({
    user: state.user,
    fetchUserData: state.fetchUserData,
  }));

  useEffect(() => {
    const loadUser = async () => {
      fetchUserData();
    };
    if (session) loadUser();
  }, [session, fetchUserData]);

  const [userData, setUserData] = useState({
    firstName: user?.firstName ? user.firstName : "",
    lastName: user?.lastName ? user.lastName : "",
    dateOfBirth: user?.dateOfBirth ? user.dateOfBirth : new Date().toISOString,
    email: user?.email ? user.email : "",
    password: "",
  });
  const { firstName, lastName, dateOfBirth, email, password, confirmPassword } =
    userData;

  useEffect(() => {
    setUserData({
      firstName: user?.firstName ? user.firstName : "",
      lastName: user?.lastName ? user.lastName : "",
      dateOfBirth: user?.dateOfBirth
        ? user.dateOfBirth
        : new Date().toISOString,
      email: user?.email ? user.email : "",
    });
  }, [
    user?.firstName,
    user?.lastName,
    user?.dateOfBirth,
    user?.email,
    user?.password,
    user?.confirmPassword,
  ]);

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
      await signIn("credentials", {
        ...userData,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        action: "signup",
      });
    }
  };
  if (!session) return <PleaseSignIn />;
  return (
    <div
      className={special.className + " p-16 max-w-screen-xl mx-auto leading-8"}
    >
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        Update User Info
      </h2>
      <div className=" text-base fade-in ">
        <form
          className="p-5 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          {errors.map((error, i) => (
            <div
              key={`error${i}`}
              className=" w-full bg-red-300 text-red-950 rounded-2xl my-3 flex flex-row p-3 fade-in"
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
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <label className=" text-cyan-500 font-bold  " htmlFor="dateOfBirth">
              Date Of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChange}
              required
              className="input input-bordered input-info w-full max-w-xs"
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
              className="input input-bordered input-success w-full max-w-xs"
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
              className="input input-bordered input-warning w-full max-w-xs"
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
              className="input input-bordered input-error w-full max-w-xs"
            />
          </div>
          <div className="flex flex-row justify-around mt-12">
            <button type="submit" className=" btn btn-primary btn-wide text-xl">
              Confirm Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
