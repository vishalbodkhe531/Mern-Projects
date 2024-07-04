import React, { useState } from "react";
import { Link } from "react-router-dom";
import userSignIn from "../../hooks/userSignIn";

function SignIn() {
  const [formData, setFormData] = useState(null);
  const { signin, loading } = userSignIn();

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(formData);
  };

  return (
    <>
      <div className="h-screen p-4 flex justify-center items-center text-white">
        <div className="bg-white p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <h1 className="text-3xl p-5">Login ChatApp</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="lable p-2">
                <span>User Name</span>
              </label>
              <input
                type="text"
                placeholder="enter user"
                name="userName"
                // value={formData}
                onChange={handleChangeInput}
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
                // value={formData}
                name="password"
                onChange={handleChangeInput}
                className="w-full input input-bordered h-13"
              />
            </div>
            <Link
              to={"/sign-up"}
              className=" hover:text-blue-600 mt-4 inline-block"
            >
              Don't have an accout ?
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
    </>
  );
}

export default SignIn;
