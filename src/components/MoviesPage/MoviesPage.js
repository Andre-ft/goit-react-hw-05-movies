import s from "./MoviesPage.module.css";
import { useState, useEffect } from "react";
import Searchbar from "../Searchbar";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import MoviesList from "../MoviesList/MoviesList";
import * as moviesAPI from "../../services/movie-api";
import { useHistory, useLocation } from "react-router-dom";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const getQueryFromSearchParams =
    new URLSearchParams(location.search).get("query") ?? "";

  const handleFormSubmit = (newQuery) => {
    // console.log(query);
    setQuery(newQuery);
  };

  useEffect(() => {
    setQuery(getQueryFromSearchParams);
  }, []);

  useEffect(() => {
    console.log("query", query);
    if (query.trim() === "") return;
    moviesAPI.fetchMoviesByQuery(query).then((res) => setList(res.results));
    history.push({ ...location, search: `query=${query}` });
  }, [query]);

  useEffect(() => {
    console.log("list", list);
  }, [list]);

  return (
    <div className={s.MoviesPage} style={{ maxWidth: 1170, margin: "0 auto" }}>
      <Searchbar onSubmit={handleFormSubmit} />
      {list && <MoviesList list={list} />}
      {/* <ImageGallery query={query} getImageURL={getActiveImageURL} /> */}
      {/* {activeImageURL && (
        <Modal onClose={toggleModal} imageURL={activeImageURL}>
          <img src={activeImageURL} alt={query} />
        </Modal>
      )} */}

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default MoviesPage;
