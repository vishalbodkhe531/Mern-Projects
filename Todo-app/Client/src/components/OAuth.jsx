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

      const data = await fetch("/api/user/googlelogin", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
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
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          className="mx-auto h-24 w-auto"
          src={result.photoURL}
          alt="Your Company"
          title="logo"
        /> */}
        {/* <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase">
          Sign in
        </h2> */}
      </div>
      <button
        className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed"
        onClick={handleGoogleBtn}
        // loading={}
        disabled={loading}
      >
        {loading ? "LOADING..." : "SIGN WITH GOOGLE"}
      </button>
    </>
  );
};

export default OAuth;

// import React from "react";
// import { useSelector } from "react-redux";
// import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// import { app } from "../firebase";

// function OAuth() {
//   const { currentUser } = useSelector((state) => state.user);

//   const handleGoogleBtn = async () => {
//     try {
//       const Provider = new GoogleAuthProvider();
//       const Auth = getAuth(app);
//       const result = await signInWithPopup(Provider, Auth);

//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="">
//       <button
//         className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed"
//         onClick={handleGoogleBtn}
//       >
//         SIGN WITH GOOGLE
//       </button>
//     </div>
//   );
// }

// export default OAuth;
