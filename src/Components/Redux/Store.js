import { createStore } from "redux";
import { combineReducers } from "redux";
import { Reducer } from "./Reducer";

const reducers = combineReducers({
  Reducer,
});

export const Store = createStore(reducers);
