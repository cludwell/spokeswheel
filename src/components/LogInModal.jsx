import React, { useState, useEffect } from "react";
import getScrollbarWidth from "./_scrollbarWidth";
import IconExclamation from "./Icons/IconExclamation";
import Modal from "./Modal";

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

  const toggleModal = () => {
    const modal = document.getElementById("my_login_modal");
    if (!isModalOpen) modal.showModal();
    else modal.close();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button className="btn btn-ghost text-xl" onClick={() => setOpen(true)}>
        log in
      </button>
      <Modal open={open} setOpen={setOpen}>
        <h1 className={" text-center text-3xl font-bold mb-6 montserrat"}>
          Login
        </h1>
        <form className="p-5">
          <ul>
            {errors.map((error, i) => (
              <li
                key={`error${i}`}
                className=" w-full bg-red-300 text-red-950 rounded-2xl my-3 flex flex-row p-3 fade-in"
              >
                <IconExclamation /> {error}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <label className=" text-cyan-500 font-bold text-xl" htmlFor="email">
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
            <div>

            </div>
            <label
              className=" text-cyan-500 thasadith font-bold text-xl"
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
          </div>
          <div className="flex flex-row justify-around mt-24">
            <button type="submit" className=" btn btn-primary btn-wide text-xl">
              Log In
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
