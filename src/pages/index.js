
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MovieList from '../components/MovieList';
import Wishlist from './WishList';

export default function TopMovies({ movies }) {
  const [searchResults, setSearchResults] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);

  const handleSearchSubmit = (searchTerm) => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleLikeClick = (movie) => {
    if (!likedMovies.includes(movie)) {
      setLikedMovies([...likedMovies, movie]);
    }
  };

  const displayMovies = searchResults.length > 0 ? searchResults : movies;

  return (
    <div >
      <Navbar onSearchSubmit={handleSearchSubmit} likedMovies={likedMovies} />
      <MovieList movies={displayMovies} onLikeClick={handleLikeClick}/>
    </div>
  );
}

export async function getStaticProps() {
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'bc22006f38msh59176890a02f924p174fd3jsncef6d512b981',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const movies = response.data;
    return { props: { movies } };
  } catch (error) {
    console.error(error);
    return { props: { movies: [] } };
  }
}
