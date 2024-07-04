import { useEffect } from "react";

import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sound/notification.mp3";
import { useSocketContext } from "../context/SocateContext.jsx";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { message, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...message, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, message]);
};
export default useListenMessages;
