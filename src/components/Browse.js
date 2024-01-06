import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';

const Browse = () => {
  useNowPlayingMovies();
  const moviesData = useSelector((store)=> store?.movies?.nowPlayingMovies);
  if(!moviesData) return null;
  return (
    <>
      <Header/>
      <div>
        <MainContainer/>
        {/* 
          Main Container
            -VideoBackground
            -VideoTitle
          Secondary Container
            -MovieList * n
              -cards * n
          
        */}
      </div>
    </>
  )
}

export default Browse