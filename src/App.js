import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import(
    "./components/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName: "not-found-view" */)
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
