import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addPopularSeries } from "../utils/seriesSlice";

const usePopularSeries = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getPopularSeriesList()
  },[]);

  const getPopularSeriesList = async()=>{
    const seriesList = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', api_options);
    const data = await seriesList.json();
    dispatch(addPopularSeries(data.results))
  }
};
export default usePopularSeries;