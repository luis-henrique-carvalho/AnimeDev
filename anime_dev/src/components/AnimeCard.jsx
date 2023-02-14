import React from "react";
import style from "./AnimeCard.module.css";
import { Card } from "../styles";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime, animeHelp = null }) => {
  let img = anime.images.jpg.image_url;
  return (
    <Link to={`../anime/${anime.mal_id}`} className={style.card}>
      {animeHelp ? (
        <>
          <Card img={img}>
            <div className={style.card__image}>
              <h2>Episodios {animeHelp.mal_id}</h2>
            </div>
          </Card>
          <h2 className={style.card__title}>{animeHelp.title}</h2>
        </>
      ) : (
        <>
          <Card img={img}>
            <div className={style.card__image}>
              <h2>Episodios {anime.episodes}</h2>
            </div>
          </Card>
          <h2 className={style.card__title}>{anime.title}</h2>
        </>
      )}
    </Link>
  );
};

export default AnimeCard;
