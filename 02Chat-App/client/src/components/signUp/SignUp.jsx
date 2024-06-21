import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";

function SignUp() {
  const [formData, setFormData] = useState(null);

  // const [passwordErr,setPasswordErr] = useState("");

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderCheckBox = (gender) => {};

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await data.json();
    // if(result.message === )
    console.log(result);
  };

  return (
    <div className="h-screen p-4 flex justify-center items-center text-white">
      <div className="bg-white p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl p-5">Login ChatApp</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label className="lable p-2">
              <span>Name</span>
            </label>
            <input
              type="text"
              placeholder="enter user"
              className="w-full input input-bordered h-13"
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span>User Name</span>
            </label>
            <input
              type="text"
              placeholder="enter user name"
              className="w-full input input-bordered h-13"
              name="userName"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="enter password"
              className="w-full input input-bordered h-13"
              name="password"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span> Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="enter confirm password"
              className="w-full input input-bordered h-13"
              name="confirmPassword"
              onChange={handleChangeInput}
            />
          </div>
          <GenderCheckbox />
          <Link
            to={"/sign-in"}
            className=" hover:text-blue-600 mt-4 inline-block"
          >
            Already have an accout ?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 bg-green-200 text-black hover:bg-green-300">
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
