import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store)=> store.movies.nowPlayingMovies);
  if(!movies) return;
  const titledMovies = movies[0]
  console.log(titledMovies,'titleMovie');

  const {original_title , overview, id} = titledMovies;

  return (
    <div className='pt-[80px] px-5'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground video_id={id}/>
    </div>
  )
}

export default MainContainer