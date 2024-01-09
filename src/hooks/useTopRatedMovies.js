import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/constant";

const useTopRatedMovies = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    getTopRatedMoviesList()
  },[]);

  const getTopRatedMoviesList = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', api_options)
    const movieData = await data.json()
    dispatch(addTopRatedMovies(movieData?.results))
  }
}
export default useTopRatedMovies;
