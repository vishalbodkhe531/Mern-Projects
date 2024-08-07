import React, { useEffect, useRef } from "react";
import Message from "./Message";
import getUserMessages from "../../hooks/getUserMessages";
import useConversation from "../../zustand/zustand";
import Skeletones from "../skeletons/Skeletones";

function Messages() {
  const { messages, loading } = getUserMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <>
      <div className="px-4 flex-1 overflow-auto">
        {!loading &&
          messages.length > 0 &&
          messages.map((messages) => (
            <div className="" ref={lastMessageRef}>
              <Message key={messages._id} message={messages} />
            </div>
          ))}
        {loading && [...Array(3)].map((_, idx) => <Skeletones key={idx} />)}
        {!loading && messages.length === 0 && (
          <p className="text-center">
            Send a message to start the conversation
          </p>
        )}
      </div>
    </>
  );
}

export default Messages;
