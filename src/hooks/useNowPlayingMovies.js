import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/constant";

const useNowPlayingMovies = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    getMoviesList()
  },[]);

  const getMoviesList = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options)
    const movieData = await data.json()
    dispatch(addNowPlayingMovies(movieData?.results))
  }
}
export default useNowPlayingMovies;
