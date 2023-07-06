import { useState, useEffect } from "react";
import api from "../utils/api";

export const Util = () => {
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const getTopAnimes = async (page) => {
    checkIfIsCancelled();
    try {
      const response = await api.get(`/top/anime?page=${page}`);
      console.log(response)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return { getTopAnimes };
};
