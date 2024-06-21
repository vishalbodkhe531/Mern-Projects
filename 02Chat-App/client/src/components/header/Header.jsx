import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between pt-5">
        <div className="font-semibold text-xl">Chat-Manager</div>
        <ul className="flex justify-between w-[30rem]">
          <Link to={"/"}>
            <li>HOME</li>
          </Link>
          <Link to={"/"}>
            <li>ABOUT</li>
          </Link>
          <Link to={"/"}>
            <li>CONTACT-US</li>
          </Link>
        </ul>
        <div className="w-10 mx-6">
          <Link to={"/sign-in"}>
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
