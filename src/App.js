import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";

// import HomePage from "./views/HomePage";
// import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
// import MoviesPage from "./components/MoviesPage/MoviesPage";
// import NotFoundView from "./views/NotFoundView";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

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
