import React from 'react'
import { bg_url } from '../utils/constant'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import GptSearchBar from './GptSearchBar'

const GPTSearch = () => {
  return (
    <>
      <div className='absolute -z-10'>
        <img src={bg_url} className="h-screen w-screen object-cover" alt="BackgroundImage"/>
      </div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </>
  )
}

export default GPTSearch