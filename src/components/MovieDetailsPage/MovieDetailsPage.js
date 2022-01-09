import { useState, useEffect, lazy, Suspense } from "react";
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import PageHeading from "../PageHeading/PageHeading";
import * as bookShelfAPI from "../../services/movie-api";
import s from "./MovieDetailsPage.module.css";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  //   const BASE_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w300";

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    bookShelfAPI.fetchMovieById(movieId).then(setMovie);
    console.log("history", history);
    console.log("location", location);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/movies");
  };

  return (
    <>
      {/* <PageHeading text={`Movie ${movieId}`} /> */}
      {/* {console.log(movie)} */}

      {movie && (
        <>
          <button type="button" onClick={onGoBack}>
            {location?.state?.from?.label ?? "Go Back"}
          </button>

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

          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state.from },
            }}
          >
            Cast
          </NavLink>

          <br />

          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state.from },
            }}
          >
            Reviews
          </NavLink>

          <hr />
        </>
      )}

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
