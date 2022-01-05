import { NavLink, Link, Route, useRouteMatch } from "react-router-dom";

export default function MoviesList({ list }) {
  const { url } = useRouteMatch(); //используется для динамического определения текущего url

  return (
    <ul>
      {list.map((movie) => (
        <li key={movie.id}>
          <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
