import React from "react";
import { BiLogOut } from "react-icons/bi";
function LogoutBtn() {
  return (
    <div className="absolute bottom-10">
      <BiLogOut className="w-6 h-6 cursor-pointer" />
    </div>
  );
}

export default LogoutBtn;
