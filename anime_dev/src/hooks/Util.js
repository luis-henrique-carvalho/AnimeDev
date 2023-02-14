import axios from "axios";
import { useState, useEffect } from "react";

export const Util = (url) => {
  const [anime, setAnime] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);
  const [pictures, setPictures] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  useEffect(() => {
    const getData = async (url) => {
      checkIfIsCancelled();
      window.scrollTo(0, 0);
      await axios
        .get(url)
        .then((res) => {
          const newId = res.data.data.mal_id;
          setId(newId);
          console.log(res.data);
          setAnime(res.data.data);
          //functions
          if (id !== null) {
            getRecommendations(id);
            getPictures(id);
          }
        })
        .catch((err) => setError(err.message));
    };

    const getPictures = async (id) => {
      checkIfIsCancelled();
      let urlLocal = `https://api.jikan.moe/v4/anime/${id}/pictures`;
      await axios
        .get(urlLocal)
        .then((res) => {
          setPictures(res.data.data);
        })
        .catch((err) => setError(err.message));
    };

    const getRecommendations = async (id) => {
      checkIfIsCancelled();
      let urlLocal = `https://api.jikan.moe/v4/anime/${id}/recommendations`;
      await axios
        .get(urlLocal)
        .then((res) => {
          setRecommendations(res.data.data);
        })
        .catch((err) => setError(err.message));
    };
    getData(url);

    
  }, [url, id]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { anime, recommendations, pictures, error };
};
