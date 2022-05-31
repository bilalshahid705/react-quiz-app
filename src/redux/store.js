import { createStore, applyMiddleware, compose } from "redux";
import logger, { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";

const logger = createLogger({
  predicate: () => (process.env === "production" ? false : true),
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
