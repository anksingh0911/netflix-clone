import React from 'react'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import GptSearchBar from './GptSearchBar'

const GPTSearch = () => {
  return (
    <>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </>
  )
}

export default GPTSearch