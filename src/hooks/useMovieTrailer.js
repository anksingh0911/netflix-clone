import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (video_id)=>{

  const dispatch = useDispatch()
  const getVideo = async () => {
    const movieVideo = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        video_id +
        "/videos?language=en-US",
      api_options
    );
    const data = await movieVideo.json();
    const filterData = data.results.filter((item) => item.type === "Trailer");
    const getTrailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(getTrailer))
  };
  useEffect(() => {
    getVideo();
  }, []);
}

export default useMovieTrailer;