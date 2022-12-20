import AnimeCard from "../components/AnimeCard";
import styles from "./LastUpdate.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
const url = `https://api.jikan.moe/v4/top/anime`;

const LastUpdate = () => {
  const [animes, setAnimes] = useState([]);
  const [viewMore, setViewMore] = useState(12);
  const [button, setButton] = useState("Ver Mais");

  const handleButton = () => {
    if (viewMore === 24) {
      setViewMore(12);
      setButton("Ver menos");
    } else {
      setViewMore(24);
      setButton("Ver menos");
    }
  };

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
  }, []);

  console.log(animes);

  return (
    <div className={styles.LastUpdate__container}>
      <div className={styles.container__title}>
        <h2>Melhores Avaliações</h2>
      </div>
      <div className={styles.container__cards}>
        {animes &&
          animes.map((anime, id) => (
            <>{id < viewMore ? <AnimeCard key={id} anime={anime} /> : <></>}</>
          ))}
        <button onClick={handleButton}>{button}</button>
      </div>
    </div>
  );
};

export default LastUpdate;
