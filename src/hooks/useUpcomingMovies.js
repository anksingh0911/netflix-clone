import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMovies()
  }, [])
  
  const getUpcomingMovies = async()=>{
    const upcomingMovies = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", api_options);
    const data = await upcomingMovies.json()
    dispatch(addUpcomingMovies(data?.results))
  }
}
export default useUpcomingMovies;