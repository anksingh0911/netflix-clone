import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/constant";

const usePopularMovies = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    getPopularMoviesList()
  },[]);

  const getPopularMoviesList = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', api_options)
    const movieData = await data.json()
    dispatch(addPopularMovies(movieData?.results))
  }
}
export default usePopularMovies;
