import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const AnimeDetails = () => {
  const { id } = useParams();
  const url = `https://api.jikan.moe/v4/anime/${id}`;
  const [anime, setAnime] = useState()

  const getData = async () => {
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        setAnime(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(anime)

  return (
    <div>
      <div>
        <div>
          <h1></h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AnimeDetails;
