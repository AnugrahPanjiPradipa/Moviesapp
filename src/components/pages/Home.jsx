import React from "react";
import MovieCard from "../MovieCard";


const Home = () => {
  const movies = [
    { id: 1, title: "Panji", release_date: "2024" },
    { id: 2, title: "Njicong", release_date: "2024" },
    { id: 3, title: "Pan", release_date: "2024" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search your movies..." className="search-input" />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movies.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
