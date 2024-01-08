import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log(movies)
  return (
    <div className='px-2'>
       <h1 className='py-3 text-white text-xl'>{title}</h1>
      <div className='flex overflow-scroll'> 
        <div className='flex'>
          {movies.map((movie)=> (
            <MovieCard key={movie?.id} imgUrl={movie.poster_path}/>
          ))}
        </div>
        </div>
    </div>
  )
}

export default MovieList