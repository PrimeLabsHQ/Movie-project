import { useState, useRef, useEffect } from "react";
import "../app.css";
import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <div className="home">
      <form>
        <input className="searchInput" placeholder="Search for a movie..." />
        <button type="submit">Search 🔎</button>
      </form>
      <MovieList />
    </div>
  );
}
