import { useState, useEffect } from "react";
import { NavLink, Route, useParams, useRouteMatch } from "react-router-dom";
import PageHeading from "../PageHeading/PageHeading";
import * as bookShelfAPI from "../../services/movie-api";
import s from "./MovieDetailsPage.module.css";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  //   const BASE_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    bookShelfAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {/* <PageHeading text={`Movie ${movieId}`} /> */}
      {console.log(movie)}

      {movie && (
        <>
          <div className={s.container}>
            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
            <div className={s.inner_block}>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h2>Overview</h2>
              <div>{movie.overview}</div>
              <h2>Genres</h2>
              <div>{movie.genres.map((genre) => `${genre.name} `)}</div>
            </div>
          </div>

          <hr />

          <NavLink to={`${url}/cast`}>Cast</NavLink>
          <br />
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>

          <hr />
        </>
      )}

      <Route path={`${path}/cast`}>
        <Cast movieId={movieId} />
      </Route>

      <Route path={`${path}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}
