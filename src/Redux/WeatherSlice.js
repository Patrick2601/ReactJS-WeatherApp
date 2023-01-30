import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    allData: [],
    searchData: [],
    favData: [],
    state: false,
    city: {},
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
      // console.log('565656',action.payload);
    },
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
      state.favData = state.allData.filter((e) => e.id !== action.payload);
      state.allData = state.favData.filter((e) => e.id !== action.payload);
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
  setCity,
  addSearchData,
  deleteSearchData,
  addToFavData,
  filterFavData,
  deleteFavData,
  setState,
} = weatherSlice.actions;
export default weatherSlice.reducer;
