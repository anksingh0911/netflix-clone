import React from 'react'
import { IoSearch } from "react-icons/io5";
const GptSearchBar = () => {
  return (
    <div className='flex justify-center relative top-4 z-10'>
      <form className='p-2 flex items-center w-[50%]'>
        <input type="text" className='bg-white p-2 w-[100%] rounded-l-md shadow-md bottom-1' placeholder='What you want to see today!!'/>
        <button className='bg-red-700 p-3 text-white text-lg rounded-r-md'><IoSearch /></button>
      </form>
    </div>
  )
}

export default GptSearchBar