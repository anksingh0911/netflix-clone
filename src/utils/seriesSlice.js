import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState:{
    popularSeries: null,
  },
  reducers:{
    addPopularSeries:(state, action)=>{
      state.popularSeries = action.payload
    }
  }
});
export const {addPopularSeries} = seriesSlice.actions;
export default seriesSlice.reducer;
