import React, { useState, useEffect } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const API_KEY = '68e66c60';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${API_URL}s=Avengers`); 
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Movie Challenge 🍿</h1>
      <Carousel>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} 
            alt={movie.Title} 
            style={{ maxHeight: '350px', maxWidth: '300px' }}/>
            <p>{movie.Title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
