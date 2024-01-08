import React from 'react';
import { IMG_CDN } from '../utils/constant';

const MovieCard = ({imgUrl}) => {
  return (
    <div className='w-48 pr-2'>
      <img src={IMG_CDN+imgUrl} alt="Movie Thumbnail"/>
    </div>
  )
}

export default MovieCard