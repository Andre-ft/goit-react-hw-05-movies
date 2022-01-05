// const BASE_URL = 'http://localhost:4040';
const API_KEY = "9f0e1a5db1805e19173b01041df22dc3";
const BASE_URL = "https://api.themoviedb.org/3/";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
}

export function fetchReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}

export function fetchMoviesByQuery(query, page = 1) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?query=${query}&page=${page}&api_key=${API_KEY}`
  );
}
