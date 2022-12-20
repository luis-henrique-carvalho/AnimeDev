import React from "react";
import style from "./AnimeCard.module.css";
import { Card } from "../styles";

const AnimeCard = ({ anime }) => {
  let img = anime.images.jpg.image_url;
  return (
    <div className={style.card}>
      <Card img={img}>
        <div className={style.card__image}>
          <h2>Episodio {anime.episodes}</h2>
        </div>
      </Card>
      <h2 className={style.card__title}>{anime.title}</h2>
    </div>
  );
};

export default AnimeCard;
