import PageHeading from "../components/PageHeading/PageHeading";
import { useEffect, useState } from "react";
import * as movieApi from "../services/movie-api";
import { NavLink, Link, Route, useRouteMatch } from "react-router-dom";

export default function HomePage() {
  const [trendingMovies, settrendingMovies] = useState(null);
  const { url } = useRouteMatch(); //используется для динамического определения текущего url

  useEffect(() => {
    movieApi.fetchTrendingMovies().then((res) => {
      // console.log("fetchTrendingMovies", res.results);
      settrendingMovies(res.results);
    });
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />

      {trendingMovies && (
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
