import React from "react";
import SearchInput from "./SearchInput";
import ConversationMap from "./ConversationMap";
import LogoutBtn from "./LogoutBtn";

function SideBar() {
  return (
    <>
      <div className="w-[20rem] border-slate-500 flex flex-col relative">
        <div className="flex">
          <SearchInput />
        </div>
        <div className="divider px-3"></div>
        <div className="">
          <ConversationMap />
        </div>
      </div>
      <div className="mt-2">
        <LogoutBtn />
      </div>
    </>
  );
}

export default SideBar;
