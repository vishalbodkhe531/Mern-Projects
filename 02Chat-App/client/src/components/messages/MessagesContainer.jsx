import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

function MessagesContainer() {
  const isChatSelected = false;

  return (
    <>
      {!isChatSelected ? (
        <NoChatSelected />
      ) : (
        <div className="md:min-w-[450px] flex flex-col ">
          <div className="">
            <span className="">To:</span>
            <span className="">Ram Naik</span>
          </div>
          <Messages />
          <MessageInput />
        </div>
      )}
    </>
  );
}

export default MessagesContainer;

const NoChatSelected = () => {
  // const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Ram❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
