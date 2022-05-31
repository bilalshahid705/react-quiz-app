import { combineReducers } from "redux";
import quizSlice from "./quizSlice";
import scoreSlice from "./scoreSlice";

const appReducer = combineReducers({
  quiz: quizSlice,
  score: scoreSlice,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
