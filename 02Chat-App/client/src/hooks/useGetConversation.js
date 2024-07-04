import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function useGetConversation() {
  const [loading, setLoading] = useState(false);

  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/user`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getConversation();
  }, []);
  return { loading, conversation };
}

export default useGetConversation;
