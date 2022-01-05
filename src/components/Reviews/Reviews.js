import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as bookShelfAPI from "../../services/movie-api";
import s from "./Reviews.module.css";

// import { Link } from "react-router-dom";

export default function Reviews({ movieId }) {
  //   const { authorId } = useParams();
  //   const author = authors.find((author) => author.id === Number(authorId));
  const IMG_URL = "https://image.tmdb.org/t/p/w300";

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchReviews(movieId).then((res) => setReviews(res.results));
  }, [movieId]);

  return (
    <>
      {console.log("reviews", reviews)}
      {reviews && reviews.length > 0 && (
        <ul>
          {reviews.map((review) => (
            <li key={review.created_at}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews && reviews.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
