import React from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";

function SignUp() {
  return (
    <div className="h-screen p-4 flex justify-center items-center text-white">
      <div className="bg-white p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl p-5">Login ChatApp</h1>
        <form action="">
          <div>
            <label className="lable p-2">
              <span>Name</span>
            </label>
            <input
              type="text"
              placeholder="enter user"
              className="w-full input input-bordered h-13"
            />
          </div>
          <div>
            <label className="lable p-2">
              <span>User Name</span>
            </label>
            <input
              type="text"
              placeholder="enter password"
              className="w-full input input-bordered h-13"
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
            />
          </div>
          <div>
            <label className="lable p-2">
              <span> Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="enter password"
              className="w-full input input-bordered h-13"
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
