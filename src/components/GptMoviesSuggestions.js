import React from 'react';
import { useSelector } from 'react-redux';
import {IMG_CDN} from '../utils/constant';
import MovieCard from './MovieCard';

const GptMoviesSuggestions = () => {
  const {moviesNames, searchedMovies} =  useSelector((store)=> store?.gpt);
  
  return (
    <div className="bg-black/70 w-[70%] m-auto rounded-md p-2 pb-4 mt-3 z-10 ">
      <p className="text-xl text-center font-semibold m-3 text-white">Search result for movie {moviesNames[0]}</p>
      <div className="flex gap-2 justify-center items-center flex-wrap">
        {searchedMovies.length && ( 
          <>
            {searchedMovies[0]?.map((item)=>(
              <>
                {item.poster_path && (
                  <MovieCard imgUrl={item.poster_path}/>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
export default GptMoviesSuggestions;