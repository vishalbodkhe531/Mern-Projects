import React, { useEffect, useState } from "react";
import useConversation from "../zustand/zustand";
import { useAuthContext } from "../context/AuthContext";

function getUserMessages() {
  const { selectedConversation, setMessages, messages } = useConversation();

  const { authUser } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const getAllMessages = async () => {
    setLoading(true);
    const response = await fetch(
      `/api/message/get-messages/${selectedConversation._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        credentials: "include",
        body: JSON.stringify({ senderId: authUser._id }),
      }
    );
    const responseBody = await response.json();

    setLoading(false);
    setMessages(responseBody);
    return responseBody;
  };

  useEffect(() => {
    if (selectedConversation?._id) getAllMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading, getAllMessages };
}

export default getUserMessages;
