import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    allData: [],
    searchData: [],
    favData: [],
    state: false,
  },
  reducers: {
    addSearchData: (state, action) => {
      const cities = state.searchData.map((e) => e.name);
      if (cities.includes(action.payload.name)) {
        console.log("City already exist");
      } else {
        state.searchData.push(action.payload);
      }
    },
    deleteSearchData: (state, action) => {
      state.searchData = [];
    },
    addToFavData: (state, action) => {
      const cities = state.favData.map((e) => e.name);
      if (cities.includes(action.payload.name)) {
        console.log("City already exist");
      } else {
        state.allData.push(action.payload);
        state.favData.push(action.payload);
      }
    },
    filterFavData: (state, action) => {
      state.favData = state.allData.filter((e) => e.name !== action.payload);
    },
    deleteFavData: (state, action) => {
      state.favData = [];
      state.allData = [];
    },
    setState: (state, action) => {
      state.state = !state.state;
    },
  },
});

export const {
  addSearchData,
  deleteSearchData,
  addToFavData,
  filterFavData,
  deleteFavData,
  setState,
} = weatherSlice.actions;
export default weatherSlice.reducer;
