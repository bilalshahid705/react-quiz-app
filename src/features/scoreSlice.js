import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

export const scoreSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setScoreValue: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { setScoreValue } = scoreSlice.actions;

export default scoreSlice.reducer;
