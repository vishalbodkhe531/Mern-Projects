import useConversation from "../zustand/zustand";
import { useState } from "react";

const sendMessage = () => {
  const { selectedConversation, setMessages, messages } = useConversation();

  const [loading, setLoading] = useState(false);

  const userMesssage = async (formData) => {
    setLoading(true);
    const response = await fetch(
      `/api/message/send-message/${selectedConversation._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        credentials: "include",
        body: JSON.stringify({ message: formData }),
      }
    );

    const responseBody = await response.json();
    if (!response.ok) {
      setLoading(false);
      throw new Error(responseBody.message);
    }
    // setMessages([...messages, responseBody.messages]);
    setLoading(false);
  };
  return { userMesssage, loading };
};

export default sendMessage;
