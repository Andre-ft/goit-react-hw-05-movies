import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as bookShelfAPI from "../../services/movie-api";
import s from "./Cast.module.css";

// import { Link } from "react-router-dom";

export default function Cast({ movieId }) {
  //   const { authorId } = useParams();
  //   const author = authors.find((author) => author.id === Number(authorId));
  const IMG_URL = "https://image.tmdb.org/t/p/w300";

  const [castArray, setCastArray] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchCast(movieId).then((res) => setCastArray(res.cast));
  }, [movieId]);

  return (
    <>
      {console.log("castArray", castArray)}
      {castArray && (
        <ul>
          {castArray.map((info) => (
            <li key={info.id}>
              <h3>{info.name}</h3>
              <div className={s.img_block}>
                <img
                  src={`${IMG_URL}${info.profile_path}`}
                  alt={info.name}
                  className={s.img}
                />
              </div>
              <p>Character: {info.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
