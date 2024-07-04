import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function useSignUp() {
  const [loading, setLoading] = useState(false);

  const naivgate = useNavigate();

  const { setAuthUser } = useAuthContext();

  const signup = async ({
    name,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = {
      name,
      userName,
      password,
      confirmPassword,
      gender,
    };
    if (!success) {
      const handleInputErrors = ({
        name,
        userName,
        password,
        confirmPassword,
        gender,
      }) => {
        if (!name || !userName || !password || !confirmPassword || !gender) {
          return toast.error("Please fill in all fiedls");
        }

        if (password != confirmPassword) {
          return toast.error("Password do not match");
        }
      };
    }

    setLoading(true);

    try {
      const data = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          name,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const result = await data.json();

      if (result.success === false) {
        return toast.error(result.message);
      }

      if (result) {
        toast.success(result.message);
        localStorage.setItem("chat-user", JSON.stringify(result));
        naivgate("/sign-in");
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
}

export default useSignUp;
