import { useState, useRef, useEffect } from "react";
import "../app.css";
import MovieList from "../components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const searchInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value.trim();
    if (query) fetchMovies(query);
  };
  const fetchMovies = async (query) => {
    setLoading(true);
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=${query}`,
    );
    const data = await response.json();
    setMovies(data.Search || []);
    console.log(data.Search);
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies("Avengers");
  }, []);
  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          className="searchInput"
          placeholder="Search for a movie..."
          ref={searchInputRef}
        />
        <button type="submit">Search 🔎</button>
      </form>
      {loading ? <h2>Loading...</h2> : <MovieList movies={movies} />}
    </div>
  );
}
