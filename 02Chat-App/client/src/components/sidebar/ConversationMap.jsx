import React from "react";
import Conversation from "./Conversation";

function ConversationMap() {
  return (
    <>
      <div className="py-2 flex flex-col overflow-auto">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </>
  );
}

export default ConversationMap;
