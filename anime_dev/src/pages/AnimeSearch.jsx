import AnimeCard from "../components/AnimeCard";
import styles from "./LastUpdate.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Util } from "../hooks/Util";

const AnimeSearch = () => {
  const [animes, setAnimes] = useState([]);
  let { search } = useLocation();
  const {} = Util(AnimeSearch)

  search = search.slice(3);
  console.log(search);

  const url = `https://api.jikan.moe/v4/anime`;

  const getData = async () => {
    await axios
      .get(url, {
        params: {
          q: search,
          limit: 24,
        },
      })
      .then((res) => {
        console.log(res);

        setAnimes(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [search, url]);

  return (
    <div className={styles.LastUpdate__container}>
      <div className={styles.container__title}>
        <h2>Resultados para: {search}</h2>
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

export default AnimeSearch;
