import React, { useEffect, useState } from "react";
// import { signIn } from "next-auth/react";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/store";
// import { logInRequest } from "@/store/session";

export default function LogInModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = [];
  //   const dispatch = useDispatch();

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
      await dispatch(logInRequest({ email, password }));
    }
  };

  const demoSignIn = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email: "jerry@seinmail.com",
      password: "password",
    });

    window.my_modal_2.close();
  };

  useEffect(() => {
    const myModal2 = document.getElementById("my_modal_2");
    if (myModal2) window.my_modal_2 = myModal2;
  }, []);

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
