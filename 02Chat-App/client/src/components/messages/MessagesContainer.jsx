import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";

function MessagesContainer() {
  // const isChatSelected = false;
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="md:min-w-[450px] flex flex-col text-lg">
            <div className="">
              <span className="">To:</span>
              <span className="font-semibold text-white ml-3 text-lg">
                {selectedConversation.name}
              </span>
            </div>
            <div className="sm:h-[15rem] md:h-[30rem] overflow-auto px-6">
              <Messages />
            </div>
          </div>
          <div className="">
            <MessageInput />
          </div>
        </>
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
