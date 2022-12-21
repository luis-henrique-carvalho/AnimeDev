import { CardDetails } from "../styles";
import { Link, useParams } from "react-router-dom";
import { Util } from "../hooks/Util";

const AnimeDetails = () => {
  const { id } = useParams();
  const url = `https://api.jikan.moe/v4/anime/${id}`;
  const { anime, recommendations } = Util(url);
  console.log(anime);

  return (
    <>
      {anime && (
        <CardDetails imgView={anime.images.jpg.large_image_url}>
          <div className="view__container">
            <div className="view__media">
              <h1>{anime.title}</h1>
              <div>
                <img src={anime.images.jpg.large_image_url} alt={anime.title} />
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
            {/* fim aside */}
          </div>
          <div className="details__container">
            <div className="details__img">
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </div>
            <div className="details__text">
              <div className="details__text-title">
                <div>
                  <h3>Título :</h3> <span>{anime.title} </span>{" "}
                </div>
                <div>
                  <h3>Estudio :</h3>
                  {anime.studios.map((studio) => (
                    <span key={studio.mal_id}>{studio.name} </span>
                  ))}
                </div>
                <div>
                  <h3>Gênero :</h3>
                  {anime.genres.map((gen) => (
                    <span key={gen.mal_id}>{gen.name} </span>
                  ))}
                </div>
                <div>
                  <h3>Total Episódios :</h3> <span>{anime.episodes} Ep</span>{" "}
                </div>
              </div>
              <div className="details__text-sinopse">
                <h3>Sinopse</h3>
                <p>{anime.synopsis}</p>
              </div>
            </div>
          </div>
        </CardDetails>
      )}
    </>
  );
};

export default AnimeDetails;
