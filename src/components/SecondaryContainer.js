import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector((store)=> store.movies.nowPlayingMovies);

  return (
    <div className='bg-black'>
      <div className='relative -mt-52 z-10'>
        <MovieList title="Now playing" movies={movies}/>
        <MovieList title="Trending" movies={movies}/>
        <MovieList title="Popular Movies" movies={movies}/>
        <MovieList title="Upcoming Movies" movies={movies}/>
        <MovieList title="Horror Movies" movies={movies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer