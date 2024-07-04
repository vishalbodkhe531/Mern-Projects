import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInFailuer,
  signInStart,
  signInSuccess,
} from "../app/features/userSlice";
import { API } from "../main";

const OAuth = () => {
  const naviget = useNavigate();

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const handleGoogleBtn = async () => {
    try {
      dispatch(signInStart(true));

      const Provider = new GoogleAuthProvider();

      const auth = getAuth(app);

      const result = await signInWithPopup(auth, Provider);
      console.log(result);

      const data = await fetch(`${API}/api/user/googlelogin`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        credentials : "include",
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          profilePic: result.user.photoURL,
        }),
      });

      const API_result = await data.json();
      console.log(API_result);

      if (API_result) {
        dispatch(signInSuccess(API_result));
        toast.success(`Welcome , ${API_result.name}`, {
          duration: 3000,
          style: { borderRadius: "10px" },
        });
        naviget("/");
        result;
      }

      if (API_result.Message === false) {
        dispatch(signInFailuer(false));
        toast.error(API_result.Message, {
          duration: 3000,
          style: { borderRadius: "10px" },
        });

        naviget("/");
        return;
      }
    } catch (error) {
      console.log(`Error while google Authentication : ${error}`);
    }
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
      <button
        className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed"
        onClick={handleGoogleBtn}
        disabled={loading}
      >
        {loading ? "LOADING..." : "SIGN WITH GOOGLE"}
      </button>
    </>
  );
};

export default OAuth;
