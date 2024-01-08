import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ video_id }) => {
  const trailer = useSelector((store)=>store.movies.trailerVideo)
  useMovieTrailer(video_id)
  
  return (
    <>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allowFullScreen="true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;full-screen"
      ></iframe>
    </>
  );
};

export default VideoBackground;
