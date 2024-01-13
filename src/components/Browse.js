import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import usePopularSeries from '../hooks/usePopularSeries';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularSeries();
  const moviesData = useSelector((store)=> store?.movies?.nowPlayingMovies);
  const showGpt = useSelector((store)=> store?.gpt?.showGptSearch);

  if(!moviesData) return null;
  return (
    <>
      <Header/>
      {showGpt ? <GPTSearch/> : (
      <>
        <MainContainer/>
        <SecondaryContainer/>
        {/* 
          Main Container
            -VideoBackground
            -VideoTitle
          Secondary Container
            -MovieList * n
              -cards * n
        */}
      </>
      ) }
    </>
  )
}

export default Browse