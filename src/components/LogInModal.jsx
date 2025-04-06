import React, { useState, useEffect } from "react";
import IconExclamation from "./Icons/IconExclamation";
import Modal from "./Modal";
import { signIn } from "next-auth/react";
import IconBellAlert from "./Icons/IconBellAlert";
export default function LogInModal() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validate = () => {
    const err = [];
    if (!email || !email.includes("@") || !email.includes("."))
      err.push("Please enter a valid email.");
    if (!password || password.length < 6 || !password)
      err.push("Passwords must be at least 6 characters");
    setErrors(err);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
    if (errors.length) return;
    if (email && password) {
      await signIn("credentials", { email, password, action: "signin" });
    }
  };
  return (
    <>
      <button
        className="text-xs btn btn-ghost sm:text-base md:text-lg"
        onClick={() => setOpen(true)}
      >
        log in
      </button>
      <Modal open={open} setOpen={setOpen}>
        <h1 className={" text-center text-3xl font-bold mb-6 montserrat"}>
          Login
        </h1>
        <form className="p-5" onSubmit={handleSubmit}>
          {/* <div className="flex flex-row p-1 my-4 text-xs text-red-800 bg-pink-300 border-2 border-red-800 rounded-xl max-w-64">
            <span className="mr-2">
              <IconBellAlert />
            </span>
            Returning 2024 users, please create a new account.{" "}
          </div> */}
          <ul>
            {errors.map((error, i) => (
              <li
                key={`error${i}`}
                className="flex flex-row w-full p-3 my-3 bg-red-300 text-red-950 rounded-2xl fade-in"
              >
                <IconExclamation /> {error}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 ">
            <label
              className="font-bold md:text-xl text-cyan-500"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full max-w-xs input input-bordered input-primary"
            />
            <div></div>
            <label
              className="font-bold md:text-xl text-cyan-500 "
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
              className="w-full max-w-xs input input-bordered input-accent"
            />
          </div>
          <div className="flex flex-row justify-around mt-12">
            <button type="submit" className="text-xl btn btn-primary btn-wide">
              Log In
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
