import React from 'react'
import { IoInformation, IoInformationCircle, IoPlay } from "react-icons/io5";
const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[40vh] w-screen aspect-video px-5 absolute bg-gradient-to-r from-black'>
      <div className='w-1/4 text-white'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-sm'>{overview}</p>
      <div className='flex'>
        <button className='bg-white text-black px-5 flex items-center rounded-md py-2 mr-1 mt-2 text-md hover:bg-opacity-70'>
          <IoPlay className='mr-2 text-2xl'/> Play
        </button>
        <button className='bg-gray-700 px-5 text-white flex items-center rounded-md py-2 ml-1 mt-2 text-md'>
         <IoInformationCircle className='mr-2 text-2xl'/> More Info
        </button>
      </div>
      </div>
    </div>
  )
}

export default VideoTitle