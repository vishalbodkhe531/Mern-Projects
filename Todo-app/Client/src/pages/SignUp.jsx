import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useDispatch } from "react-redux";

function SignUp() {
  const [formData, setFormData] = useState({});

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // dispatch(setLoading(true));
      setLoading(true);
      const data = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await data.json();

      if (result.success === false) {
        // dispatch(setLoading(false));
        setLoading(false);
        return toast.error(result.message, {
          duration: 3000,
          style: { borderRadius: "10px", fontFamily: "cursive" },
        });
      }
      if (result) {
        // dispatch(setLoading(false));
        toast.success(result.message, {
          duration: 3000,
          style: { borderRadius: "10px", fontFamily: "cursive" },
        });
      }
      navigate("/");
    } catch (error) {
      // dispatch(setLoading(false));
      setLoading(false);
      console.log(`Error while register : ${error}`);
    }
  };

  return (
    <>
      <div className="h-[90vh] bg-gradient-to-r from-gray-200 to-blue-300 font-[cursive]">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-0 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
              title="logo"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase">
              Sign up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    autoComplete="given-name"
                    required
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                >
                  {loading ? `LOADING...` : `SIGN UP`}
                </button>
              </div>
              <hr />
              {/* <div>
                <OAuth />
              </div> */}
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              New member?{" "}
              <Link
                to="/sign-in"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-lg"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
