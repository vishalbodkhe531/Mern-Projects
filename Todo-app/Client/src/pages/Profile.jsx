import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { deleteUser, logoutUser } from "../app/features/userSlice";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);

  const [updateUser, setUpdateUser] = useState(false);
  const [userData, setUserData] = useState(currentUser);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deleteHandler = async () => {
    const data = await fetch(`/api/user/delete/${currentUser._id}`, {
      method: "DELETE",
    });
    const result = await data.json();

    if (result) {
      dispatch(deleteUser(result));
      toast.success(result.message, {
        duration: 3000,
        style: { borderRadius: "10px" },
      });
      navigate("/");
      return;
    }
  };

  const logoutHandler = async () => {
    const data = await fetch("/api/user/logout");

    const result = await data.json();

    if (result) {
      dispatch(logoutUser(result));
      toast.success(result.message, {
        duration: 3000,
        style: { borderRadius: "10px" },
      });
    }
    navigate("/");
    return;
  };

  const handleUpdateProfile = async () => {
    setUpdateUser(true);
    try {
      if (updateUser) {
        const data = await fetch(`/api/user/update/${currentUser._id}`, {
          type: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({
            email: currentUser.email,
            name: currentUser.name,
          }),
        });
        const result = await data.json();
        console.log(result);
      }

      if (updateUser) {
        setUpdateUser(false);
      }
    } catch (error) {
      console.log(`Error while fetch update user : ${error}`);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-200 to-blue-300 h-[93vh]">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-[cursive]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto rounded-full"
              src={currentUser.profilePic}
              alt="Your Company"
              title="logo"
            />
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase">
              Profile
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="name"
                    //  autoComplete="email"
                    readOnly={!updateUser}
                    value={userData.name}
                    onChange={(e) => setUserData(e.target.value)}
                    required
                    //   onChange={handleInputs}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    autoComplete="current-password"
                    required
                    readOnly={!updateUser}
                    value={userData.email}
                    onChange={(e) => setUserData(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>

              <div>
                <button
                  // type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                  onClick={handleUpdateProfile}
                >
                  {updateUser ? "DONE" : "EDIT PROFILE"}
                </button>
              </div>
              <hr className="h-[2px] bg-white" />
            </div>

            <p className="mt-10 flex justify-between items-center">
              <button
                className="cursor-pointer bg-gray-600 text-white p-1 rounded-md"
                onClick={deleteHandler}
              >
                Delete Account
              </button>
              <button
                className="cursor-pointer bg-gray-600 text-white p-1 rounded-md"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
