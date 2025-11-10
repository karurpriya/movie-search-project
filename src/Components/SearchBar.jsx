import React, { useState } from "react";
import MovieCard from "./MovieCard";
const SearchBar = () => {
  const [movie, setMovieName] = useState("");
  const [year, setYear] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=41a34d80&s=${movie}&y=${year}`
    );
    const data = await response.json();
    console.log("Movie details update", data);
    setMovieDetails(data);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter the Movie title: </label>
        <input
          type="text"
          placeholder="Enter movie name"
          value={movie}
          onChange={(e) => setMovieName(e.target.value)}
          required
        />
        <br />
        <label>Enter the Year: </label>
        <input
          type="number"
          placeholder="Enter year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <button type="submit">Search</button>
      </form>

      {/* Render movie results */}
     {movieDetails && movieDetails.Search ? (
  <div>
    <h3>Results:</h3>
    <div  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px"
  }}>
      {movieDetails.Search.map((m, index) => (
        <MovieCard key={index} movie={m} />
      ))}
    </div>
  </div>
) : (
  movieDetails && <p>No movies found.</p>
)}

      
    </div>
  );
};

export default SearchBar;
