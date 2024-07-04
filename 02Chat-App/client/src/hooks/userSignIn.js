import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function userSignIn() {
  const naivgate = useNavigate();

  const { setAuthUser } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const signin = async (userName, password) => {
    const success = {
      userName,
      password,
    };
    if (!success) {
      const handleInputErrors = ({ userName, password }) => {
        if (!userName || !password) {
          return toast.error("Please fill in all fiedls");
        }
      };
    }
    setLoading(true);

    try {
      const data = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(userName, password),
      });
      const result = await data.json();
      console.log(result);

      if (result.success === false) {
        setLoading(false);
        return toast.error(result.message);
      }

      if (result) {
        toast.success(`Welcome ${result.name}`);
        localStorage.setItem("chat-user", JSON.stringify(result));
        naivgate("/");
        setAuthUser(result);
        setLoading(false);

        return;
      }
    } catch (error) {
      // console.log(`Error while login user : ${error}`);
      toast.error(error.message);
      setLoading(false);
    }
  };
  return { signin, loading };
}

export default userSignIn;
