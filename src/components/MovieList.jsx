import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  if (movies.length === 0) {
    return <h2>No movies found</h2>;
  }
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
      <MovieCard />
    </div>
  );
}
