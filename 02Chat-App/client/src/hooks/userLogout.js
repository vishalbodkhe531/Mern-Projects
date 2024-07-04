import React from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

function userLogout() {
  const { setAuthUser } = useAuthContext();

  const logoutUser = async () => {
    try {
      const data = await fetch("/api/user/logout-user");
      const result = await data.json();
      console.log(result);

      if (result.success === false) {
        return toast.error(result.message);
      }

      if (result) {
        toast.success(result.message);
        localStorage.setItem("chat-user", JSON.stringify(result));
        localStorage.removeItem("chat-user")
        setAuthUser(null);
        return;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { logoutUser };
}

export default userLogout;
