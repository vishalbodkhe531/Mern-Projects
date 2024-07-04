import React from "react";
import ConversationMap from "./ConversationMap";
import useConversation from "../../zustand/useConversation";

function Conversation({ data, emoji, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === data._id;
  return (
    <>
      <div
        className={`flex  gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer mt-4 w-[22rem] ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(data)}
      >
        <div className="avatar online">
          <div className="rounded-full h-12">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{data.name}</p>
            <span>{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Conversation;
