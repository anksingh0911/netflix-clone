import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState:{
    showGptSearch: false,
    searchedMovies: null,
    moviesNames: null
  },

  reducers:{
    gptToggleSearchView:(state, action)=>{
      state.showGptSearch = !state.showGptSearch
    },
    addGptSearchMovies:(state, action)=>{
      const {movieNames, movieResults} = action.payload;
      state.moviesNames = movieNames;
      state.searchedMovies = movieResults;
    }
  },
});
export const {gptToggleSearchView, addGptSearchMovies} = gptSlice.actions;
export default gptSlice.reducer;