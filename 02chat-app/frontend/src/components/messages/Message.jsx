import React from "react";
import { useAuthContext } from "../../context/AuthContext";

function Message(message) {
  const userData = message.message;

  const { authUser } = useAuthContext();
  const fromMe = userData.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <>
      <div className={`chat ${chatClassName} mt-3`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component "
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className={`chat-bubble text-white pb-2 ${bubbleBgColor}`}>
          {userData.messages}
        </div>
        {/* <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formattedTime}
        </div> */}
      </div>
    </>
  );
}

export default Message;
