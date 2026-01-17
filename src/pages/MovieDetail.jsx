import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetail() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`,
        );
        const data = await response.json();
        console.log(data);
        if (data.Response === "False") {
          setError(data.Error);
          setMovie(null);
        } else {
          setMovie(data);
          setError(null);
        }
      } catch (err) {
        setError(err.message);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieDetail();
  }, [id]);

  if (loading)
    return (
      <div className="movie-detail">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="movie-detail">
        <p>Error: {error}</p>
      </div>
    );
  if (!movie)
    return (
      <div className="movie-detail">
        <p>No movie found</p>
      </div>
    );

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img alt={movie.Title} src={movie.Poster} />
      <p>
        <strong>Genre:</strong> Action, Adventure, Sci-Fi
      </p>
      <p>
        <strong>Released:</strong> 27 Apr 2018
      </p>
      <p>
        <strong>Plot:</strong> The Avengers and their allies must be willing to
        sacrifice all in an attempt to defeat the powerful Thanos before his
        blitz of devastation and ruin puts an end to the universe.
      </p>
    </div>
  );
}
