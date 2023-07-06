import AnimeCard from "../components/AnimeCard";
import styles from "./LastUpdate.module.css";
import { Util } from "../hooks/Util";
import { useEffect, useState } from "react";

const LastUpdate = () => {
  const [animes, setAnimes] = useState([]);
  const [viewMore, setViewMore] = useState(12);
  const [button, setButton] = useState("Ver Mais");
  const { getTopAnimes } = Util();

  useEffect(() => {
    getTopAnimes(5).then((res) => {
      setAnimes(res.data);
    });
  }, []);

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
      </div>
      {/* <div className={styles.LastUpdate__button}>
        <button onClick={handleButton}>{button}</button>
      </div> */}
    </div>
  );
};

export default LastUpdate;
