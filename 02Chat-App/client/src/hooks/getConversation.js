import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function getConversation() {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  // const {message,selectedConversation,setSelectedConversation} = useConversation()

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const data = await fetch(`/api/user`);
        const result = await data.json();

        if (result.success === false) {
          setLoading(false);
          return toast.error(result.message);
        }

        if (result) {
          setLoading(false);
          setConversation(result);
          return;
        }
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    };
    getConversation();
  }, []);
  return { loading, conversation };
}

export default getConversation;
