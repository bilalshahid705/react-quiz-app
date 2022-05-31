import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  difficultyLevel: "",
  questionsType: "",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
      state.category = action.payload;
    },
    setDifficultyValue: (state, action) => {
      state.difficultyLevel = action.payload;
    },
    setQuestionsType: (state, action) => {
      state.questionsType = action.payload;
    },
  },
});

export const { setCategoryValue, setDifficultyValue, setQuestionsType } =
  quizSlice.actions;

export default quizSlice.reducer;
