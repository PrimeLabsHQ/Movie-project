import { useState, useRef, useEffect } from "react";
import "../app.css";
import MovieList from "../components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=${query}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
    console.log(data.Search);
  };
  useEffect(() => {
    fetchMovies("Avengers");
  });
  return (
    <div className="home">
      <form>
        <input className="searchInput" placeholder="Search for a movie..." />
        <button type="submit">Search 🔎</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
