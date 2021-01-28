import { combineReducers, createStore } from "redux";
import timelineReducer from "../timeline";
import friendReducer from "../friend";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const store = createStore(reducer);

export default store;
