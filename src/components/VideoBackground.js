import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ video_id }) => {
  const trailer = useSelector((store)=>store.movies.trailerVideo)
  useMovieTrailer(video_id)
  
  return (
    <>
      <iframe
        src={"https://www.youtube.com/embed/"+trailer?.key+"?si=Qh0OwR6GkfJ4OXo7"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};

export default VideoBackground;
