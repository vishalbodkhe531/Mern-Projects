import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

function MessagesContainer() {
  return (
    <>
      <div className="md:min-w-[450px] flex flex-col ">
        <div className="">
          <span className="">To:</span>
          <span className="">Ram Naik</span>
        </div>
        <Messages />
        <MessageInput />
      </div>
    </>
  );
}

export default MessagesContainer;
