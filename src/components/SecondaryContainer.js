import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector((store)=> store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store)=> store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store)=> store?.movies?.upcomingMovies);
  const popularSeries = useSelector((store)=> store?.series?.popularSeries);
  
  return (
    <div className='bg-black'>
      <div className='relative md:-mt-52 z-10'>
        <MovieList title="Upcoming Movies" movies={upcomingMovies}/>
        <MovieList title="Top Rated" movies={topRatedMovies}/>
        <MovieList title="Popular Movies" movies={popularMovies}/>
        <MovieList title="Popular Series" movies={popularSeries}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;