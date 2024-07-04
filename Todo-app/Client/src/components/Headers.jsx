import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsMastodon } from "react-icons/bs";

function Headers() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {/* <nav className="bg-gray-800 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex flex-1 bg-red-900 items-center sm:items-stretch sm:justify-start text-white text-lg sm:m-1">
              <div className="flex flex-shrink-0 items-center mr-10">
                <BsMastodon size="1.50em" />
                Task-Master
              </div>
              <div className="flex items-center  space-x-4 text-white text-sm ">
                <Link to={"/"}>
                  <div className="hover:shadow-xl p-1 hover:bg-white hover:shadow-white/90 hover:text-black hover:rounded-full">
                    Home
                  </div>
                </Link>
                <Link to={"/about"}>
                  <div className="hover:shadow-xl p-1 hover:bg-white hover:shadow-white/90 hover:text-black hover:rounded-full sm:flex hidden">
                    About
                  </div>
                </Link>
                <Link to={"/todo"}>
                  {" "}
                  <div className="hover:shadow-xl p-1 hover:bg-white hover:shadow-white/90 hover:text-black hover:rounded-full">
                    Task
                  </div>
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="text-white">
                {currentUser ? (
                  <Link to={"/profile"}>
                    <img
                      src={currentUser.profilePic}
                      alt="profile"
                      className="h-8 rounded-full bg-white p-[1px]"
                    />
                  </Link>
                ) : (
                  <button className="bg-blue-500 p-1 rounded-md hover:shadow-xl hover:bg-blue-600 hover:shadow-white/70">
                    <Link to={"/sign-in"}>Sign In</Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <nav className="flex justify-between items-center bg-slate-800 text-white h-16">
        <div className="">
          <div className="flex flex-shrink-0 items-center ml-4">
            <BsMastodon size="1.50em" />
            Task-Master
          </div>
        </div>
        <div className="flex mr-2">
          <Link to={"/"}>
            <div className="hover:shadow-xl p-1 hover:bg-white hover:shadow-white/90 hover:text-black hover:rounded-full mr-3">
              Home
            </div>
          </Link>
          <Link to={"/about"}>
            <div className="hover:shadow-xl p-1 hover:bg-white hover:shadow-white/90 hover:text-black hover:rounded-full sm:flex hidden mr-3">
              About
            </div>
          </Link>
          <Link to={"/todo"}>
            {" "}
            <div className="hover:shadow-xl p-1 hover:bg-white hover:shadow-white/90 hover:text-black hover:rounded-full mr-4">
              Task
            </div>
          </Link>

          {currentUser ? (
            <Link to={"/profile"}>
              <img
                src={currentUser.profilePic}
                alt="profile"
                className="h-8 rounded-full bg-white p-[1px]"
              />
            </Link>
          ) : (
            <button className="bg-blue-500 p-1 rounded-md hover:shadow-xl hover:bg-blue-600 hover:shadow-white/70 mr-5">
              <Link to={"/sign-in"}>Sign In</Link>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Headers;
