import React from "react";
import styles from "./News.module.css";
import axios from "axios";


const News = () => {
  return (
    <div className={styles.new__container}>
      <div className={styles.container__primary}>
        <h1>Ultimas novidades</h1>
        <h2>O que você vai assistir hoje?</h2>
      </div>
      <div className={styles.container__secundary_bg}>
        <div className={styles.container__secundary}>
          <div>
            <h1>ONE PUNCH MAN TERÁ 3 TEMPORADAS</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quam magni asperiores. Quod temporibus nesciunt iste laudantium
              illum esse mollitia officia obcaecati. Inventore iste voluptatibus
              nam ducimus eligendi? Laboriosam, maxime?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
