import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import useSignUp from "../../hooks/useSignUp";

function SignUp() {
  const [formData, setFormData] = useState(null);

  const { signup, loading } = useSignUp();

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [toggleGender, setToggleGender] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
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
              required
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
              required
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
              required
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
              required
              onChange={handleChangeInput}
            />
          </div>
          {/* <GenderCheckbox
            onCheckboxChange={handleGenderCheckBox}
            selectGender={genderInput.gender}
          /> */}
          {/* //Gender  */}

          <div className="flex">
            <div className="form-control">
              <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Male</span>
                <input
                  type="checkbox"
                  className="checkbox border-slate-900 checkbox-error"
                  value={"male"}
                  name="gender"
                  onChange={handleChangeInput}
                  onClick={() => setToggleGender("male")}
                  checked={toggleGender === "male"}
                />
              </label>
            </div>
            <div className="form-control">
              <label className={`label gap-2 cursor-pointer `}>
                <span className="label-text">Female</span>
                <input
                  type="checkbox"
                  className="checkbox border-slate-900 checkbox-accent"
                  value={"female"}
                  name="gender"
                  onChange={handleChangeInput}
                  onClick={() => setToggleGender("female")}
                  checked={toggleGender === "female"}
                  // onChange={() => onCheckboxChange("female")}
                />
              </label>
            </div>
          </div>

          <Link
            to={"/sign-in"}
            className=" hover:text-blue-600 mt-4 inline-block"
          >
            Already have an accout ?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-green-200 text-black hover:bg-green-300"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
