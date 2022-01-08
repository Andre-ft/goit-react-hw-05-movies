import {
  NavLink,
  Link,
  Route,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

export default function MoviesList({ list }) {
  const { url } = useRouteMatch(); //используется для динамического определения текущего url
  const location = useLocation();

  return (
    <ul>
      {list.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `${url}/${movie.id}`,
              state: { from: { location, label: "Back to Movies search" } },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
