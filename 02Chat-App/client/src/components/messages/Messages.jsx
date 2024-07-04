import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import Skeletons from "../skeletons/Skeletons";
import useListenMessages from "../../hooks/useListenMessage";

function Messages() {
  const { message, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [message]);
  return (
    // <div className="flex-1">
    //   {message.map((item) => (
    //     <Message message={item} key={item._id} />
    //   ))}
    //   {loading && [...Array(3)].map((_, idx) => <Skeletons key={idx} />)}
    //   {!loading && message.length === 0 && (
    //     <p className="text-center">Send a message to start the conversation</p>
    //   )}
    // </div>
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        message.length > 0 &&
        message.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <Skeletons key={idx} />)}
      {!loading && message.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messages;
