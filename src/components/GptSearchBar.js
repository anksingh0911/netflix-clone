import React,{useRef} from 'react';
import { useDispatch } from 'react-redux';
import { IoSearch } from "react-icons/io5";
import openAi from '../utils/openai';
import { addGptSearchMovies } from '../utils/gptSlice';
import { api_options } from '../utils/constant';

const GptSearchBar = () => {
  const dispatch =  useDispatch();
  const searchText = useRef(null);

  // search movie at TMDB
  const searchMoviesTMDB = async(movieName)=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,api_options);
    const movie = data.json()
    return movie.result;
  };

  const handleSearchClick = ()=>{
    // make an api call to make an api call to get a movie result
    let searchQuery  = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + "only give me 5 movies, comma separated like the example result given head: Example Result: Gadar, 1920, Evil";
    async function main() {
      const getMovieChoices = await openAi.chat.completions.create({
        messages: [{ role: 'user', content: searchQuery }],
        model: 'gpt-3.5-turbo-0613',
      });
      console.log(getMovieChoices.choices, 'hello')
      const getMoviesSuggestionList = getMovieChoices.choices?.[0]?.message?.content.split(",");
      const promiseArray = getMoviesSuggestionList.map((item)=> searchMoviesTMDB(item));
      const results = await Promise.all(promiseArray);
      dispatch(addGptSearchMovies({movieNames: getMoviesSuggestionList, movieResults:results}));
     }
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

export default GptSearchBar;