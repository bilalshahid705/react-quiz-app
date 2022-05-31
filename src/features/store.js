import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
