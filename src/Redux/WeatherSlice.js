import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    searchData: [],
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
  },
});

export const { addSearchData, deleteSearchData } = weatherSlice.actions;
export default weatherSlice.reducer;
