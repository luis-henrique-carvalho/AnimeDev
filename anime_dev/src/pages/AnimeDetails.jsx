
import axios from "axios";
import { CardDetails } from "../styles";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Util } from "../hooks/Util";

const AnimeDetails = () => {
  const { id } = useParams();
  const url = `https://api.jikan.moe/v4/anime/${id}`;
  const { anime, recommendations } = Util(url);

  console.log(anime)

  // const [anime, setAnime] = useState();
  // const [pictures, setPictures] = useState([]);
  // const [recommendations, setRecommendations] = useState([]);

  // const getPictures = async (id) => {
  //   const url = `https://api.jikan.moe/v4/anime/${id}/pictures`;
  //   await axios
  //     .get(url)
  //     .then((res) => {
  //       setPictures(res.data.data);
  //     })
  //     .catch((err) => {});
  // };

  // const getRecommendations = async (id) => {
  //   const url = `https://api.jikan.moe/v4/anime/${id}/recommendations`;
  //   await axios
  //     .get(url)
  //     .then((res) => {
  //       setRecommendations(res.data.data);
  //     })
  //     .catch((err) => {});
  // };

  // useEffect(() => {
  //   const getData = async () => {
  //     window.scrollTo(0, 0);

  //     await axios
  //       .get(url)
  //       .then((res) => {
  //         const id = res.data.data.mal_id;
  //         getPictures(id);
  //         getRecommendations(id);
  //         setAnime(res.data.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   getData()
  // }, [id]);

  console.log(recommendations);

  return (
    <>
      {anime && (
        <CardDetails imgView={anime.images.jpg.large_image_url}>
          <div className="view__container">
            <div className="view__media">
              <h1>{anime.title}</h1>
              <div>
                <div></div>
              </div>
            </div>
            <div className="view__aside">
              <div className="asside__titulo">
                <h2>Mais assistidos</h2>
              </div>
              <div className="aside_card">
                {recommendations &&
                  recommendations.map((rec, id) => (
                    <>
                      {id < 4 && (
                        <Link
                          key={rec.entry.mal_id}
                          to={`/anime/${rec.entry.mal_id}`}
                        >
                          <div>
                            <img src={rec.entry.images.jpg.image_url} alt="" />
                          </div>
                          <div className="aside__title">
                            <h2>{rec.entry.title}</h2>
                            <p>Lançamento</p>
                          </div>
                        </Link>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </CardDetails>
      )}
    </>
  );
};

export default AnimeDetails;
