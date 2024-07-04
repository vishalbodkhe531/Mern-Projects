import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useConversation from "../zustand/useConversation";
function useSendMessage() {
  const [loading, setLoading] = useState(false);

  const { message, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (messages) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ messages }),
      });

      const result = await res.json();
      console.log(result);

      if (result.message === false) throw new Error(result.error);
      setLoading(false);

      setMessages([...message, result]);
    } catch (error) {
      toast.error(error.message);
      console.log(`error while send message : ${error}`);
      setLoading(false);
    }
  };

  return { loading, sendMessage };
}

export default useSendMessage;
