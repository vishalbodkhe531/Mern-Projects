import React from "react";
import { BiLogOut } from "react-icons/bi";
import userLogout from "../../hooks/userLogout";
function LogoutBtn() {
  const { logoutUser } = userLogout();

  const handleLogoutBtn = () => {
    logoutUser();
  };

  return (
    <div className="">
      <BiLogOut className="w-6 h-6 cursor-pointer" onClick={handleLogoutBtn} />
    </div>
  );
}

export default LogoutBtn;
