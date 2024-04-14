"use client";
import { useEffect, useState } from "react";
import IconExclamation from "@/components/Icons/IconExclamation";
import PleaseSignIn from "@/components/PleaseSignIn";
import { useSession } from "next-auth/react";
import { useStore } from "@/store/ZustandProvider";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { amatic, special } from "../fonts";

export default function UpdateInfo() {
  const { data: session, status: loading } = useSession();
  const [errors, setErrors] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const router = useRouter();
  const { user, fetchUserData, updateUserInfo } = useStore((state) => ({
    user: state.user,
    fetchUserData: state.fetchUserData,
    updateUserInfo: state.updateUserInfo,
  }));

  useEffect(() => {
    const loadUser = async () => {
      fetchUserData();
      setHasLoaded(true);
    };
    if (session) loadUser();
  }, [session, fetchUserData]);

  const [userData, setUserData] = useState({
    firstName: user?.firstName ? user.firstName : "",
    lastName: user?.lastName ? user.lastName : "",
    dateOfBirth: user?.dateOfBirth ? user.dateOfBirth : new Date().toISOString,
    email: user?.email ? user.email : "",
    phoneNumber: user?.phoneNumber ? user?.phoneNumber : "null",
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

  useEffect(() => {
    setUserData({
      firstName: user?.firstName ? user.firstName : "",
      lastName: user?.lastName ? user.lastName : "",
      dateOfBirth: user?.dateOfBirth
        ? user.dateOfBirth.slice(0,10)
        : new Date().toISOString(),
      email: user?.email ? user.email : "",
      phoneNumber: user?.phoneNumber ? user?.phoneNumber : "null",
    });
  }, [
    user?.firstName,
    user?.lastName,
    user?.dateOfBirth,
    user?.email,
    user?.password,
    user?.confirmPassword,
    user?.phoneNumber,
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
    if (password && password.length < 6)
      err.push("Passwords must be at least 6 characters.");
    if (password != confirmPassword) err.push("Passwords do not match.");
    if (!firstName || !lastName) err.push("Please enter your name.");
    if (!dateOfBirth) err.push("Please enter your date of birth.");
    if (phoneNumber.length < 14) err.push("Please enter a valid phone number.");

    return err;
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    // console.log(errors)
    if (validationErrors.length) return;
    else if (
      !errors.length &&
      email &&
      password &&
      firstName &&
      lastName &&
      dateOfBirth
    ) {
      await updateUserInfo({
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        password,
        email,
      });
      await fetchUserData();
      router.push("/");
    }
  };
  if (!session) return <PleaseSignIn />;
  if (!hasLoaded) return <Loading />;

  // console.log('user info', userData)
  return (
    <div
      className={special.className + " p-16 max-w-screen-xl mx-auto leading-8"}
    >
      <h2 className={amatic.className + " mb-12 text-5xl fade-in"}>
        Update User Info
      </h2>
      <div className="text-base fade-in">
        <form
          className="flex flex-col items-center p-5"
          onSubmit={handleSubmit}
        >
          {errors.map((error, i) => (
            <div
              key={`error${i}`}
              className="flex flex-row w-full p-3 my-3 bg-red-300 text-red-950 rounded-2xl fade-in"
            >
              <IconExclamation /> {error}
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
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
              className="w-full max-w-xs input input-bordered input-primary"
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
              className="w-full max-w-xs input input-bordered input-secondary"
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
              className="w-full max-w-xs input input-bordered input-info"
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
              placeholder="(123) 456-7890"
              maxLength={14}
              required
              className="w-full max-w-xs input input-sm sm:input-md input-bordered input-secondary"
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
              className="w-full max-w-xs input input-bordered input-success"
            />
            <label
              className="font-bold text-cyan-500 thasadith"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="w-full max-w-xs input input-bordered input-warning"
            />
            <label
              className="font-bold text-cyan-500 thasadith"
              htmlFor="confirmPassword"
            >
              New Confirm Password
            </label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="w-full max-w-xs input input-bordered input-error"
            />
          </div>
          <div className="flex flex-row justify-around mt-12">
            <button type="submit" className="text-xl btn btn-primary btn-wide">
              Confirm Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
