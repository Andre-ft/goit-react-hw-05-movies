import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
// import AuthorsView from './views/AuthorsView';
// import BooksView from './views/BooksView';
// import BookDetailsView from './views/BookDetailsView';
import NotFoundView from "./views/NotFoundView";

export default function App() {
  return (
    <Container>
      <AppBar />

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

        {/* <Route path="/authors">
          <AuthorsView />
        </Route>

        <Route path="/books" exact>
          <BooksView />
        </Route>

        <Route path="/books/:bookId">
          <BookDetailsView />
        </Route> */}
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

// export default function App() {
//   return (
//     <Container>
//       <AppBar />

//       <Switch>
//         <Route path="/" exact>
//           <HomeView />
//         </Route>

//         <Route path="/authors">
//           <AuthorsView />
//         </Route>

//         <Route path="/books" exact>
//           <BooksView />
//         </Route>

//         <Route path="/books/:bookId">
//           <BookDetailsView />
//         </Route>

//         <Route>
//           <NotFoundView />
//         </Route>
//       </Switch>
//     </Container>
//   );
// }
