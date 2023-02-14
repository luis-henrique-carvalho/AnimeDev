import AnimeCard from "../components/AnimeCard";
import styles from "./Episodes.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Episodes = ({ uid, animeHelp }) => {
  const [animes, setAnimes] = useState([]);

  const getEpisode = async (uid) => {
    const url = `https://api.jikan.moe/v4/anime/${uid}/episodes`;
    await axios
      .get(url)
      .then((res) => {
        setAnimes(res.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getEpisode(uid);
  }, [uid]);

  console.log(animes);

  return (
    animes && (
      <>
        <div className={styles.LastUpdate__container}>
          <div className={styles.container__title}>
            <h2>Lista de episódios</h2>
          </div>
          <div className={styles.container__cards}>
            {animes &&
              animes.map((anime, id) => (
                <>
                  <AnimeCard key={id} anime={animeHelp} animeHelp={anime} />
                </>
              ))}
          </div>
        </div>
      </>
    )
  );
};

export default Episodes;
