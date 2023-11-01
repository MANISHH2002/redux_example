import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import reducers from "./reducer/index";
export * as actionCreators from "./action-creation/index";

const store = configureStore({
  reducer: reducers // Make sure you pass the 'reducer' key
}, {}, applyMiddleware(thunk));

export default store;