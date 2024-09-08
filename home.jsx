// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Get an API key from TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
      setMovies(response.data.results);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
