import React,{useRef} from 'react';
import { IoSearch } from "react-icons/io5";
import openAi from '../utils/openai';

const GptSearchBar = () => {
  const searchText = useRef(null);
  let searchQuery  = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + "only give me 5 movies, comma separated like the example result given head: Example Result: Gadar, 1920, Evil";
  async function main() {
    const getMovieChoices = await openAi.chat.completions.create({
      messages: [{ role: 'user', content: searchQuery }],
      model: 'gpt-3.5-turbo-0613',
    });
    console.log(getMovieChoices.choices, 'hello')
  }
  const handleSearchClick = ()=>{
    // make an api call to make an api call to get a movie result
    main()
    
  }
  return (
    <div className='flex justify-center relative top-4 z-10'>
      <form className='p-2 flex items-center w-[50%]' onSubmit={(e)=> e.preventDefault()}>
        <input type="text" ref={searchText} className='bg-white p-2 w-[100%] rounded-l-md shadow-md bottom-1' placeholder='What you want to see today!!'/>
        <button className='bg-red-700 p-3 text-white text-lg rounded-r-md'
          onClick={()=>handleSearchClick()}
        >
          <IoSearch />
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar