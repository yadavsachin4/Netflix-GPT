import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showgptSearch = !state.showgptSearch;
    },
  },
});

export const { toggleGptSearchView } = GptSlice.actions;

export default GptSlice.reducer;
