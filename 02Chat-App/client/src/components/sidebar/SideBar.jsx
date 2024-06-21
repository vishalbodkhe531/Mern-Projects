import React from "react";
import SearchInput from "./SearchInput";
import ConversationMap from "./ConversationMap";
import LogoutBtn from "./LogoutBtn";

function SideBar() {
  return (
    <div className="w-[20rem] border-slate-500 flex flex-col">
      <div className="flex">
        <SearchInput />
      </div>
      <div className="divider px-3"></div>
      <div className="">
        <ConversationMap />
      </div>
      <div className="">
        <LogoutBtn />
      </div>
    </div>
  );
}

export default SideBar;
