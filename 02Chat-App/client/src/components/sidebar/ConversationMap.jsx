import React from "react";
import Conversation from "./Conversation";
import useConversation from "../../hooks/getConversation";
import useGetConversation from "../../hooks/getConversation";
import { getRandomEmoji } from "../../utils/emojis";

function ConversationMap() {
  const { conversation, loading } = useGetConversation();

  // console.log(conversation);

  return (
    <>
      <div className="py-2 flex flex-col overflow-auto w-[23rem] h-[27rem]">
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          conversation.map((Item, idx) => (
            <Conversation
              key={Item._id}
              data={Item}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversation.length - 1}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ConversationMap;
