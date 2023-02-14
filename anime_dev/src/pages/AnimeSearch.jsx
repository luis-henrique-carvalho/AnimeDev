import AnimeCard from "../components/AnimeCard";
import styles from "./LastUpdate.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const LastUpdate = () => {
  const [animes, setAnimes] = useState([]);

  const [searchParams] = useSearchParams();
  
  const url = `https://api.jikan.moe/v4/anime?q=${searchParams}`;

  const getData = async () => {
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        setAnimes(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [searchParams,url]);

  return (
    <div className={styles.LastUpdate__container}>
      <div className={styles.container__title}>
        <h2>Resultados para: {searchParams}</h2>
      </div>
      <div className={styles.container__cards}>
        {animes &&
          animes.map((anime, id) => (
            <>
              <AnimeCard key={id} anime={anime} />{" "}
            </>
          ))}
      </div>
    </div>
  );
};

export default LastUpdate;
