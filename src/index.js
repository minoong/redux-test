import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from "./timeline/state";
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from "./friend/state";
import FriendMain from "./container/FriendMain";
import TimelineMain from "./container/TimelineMain";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

// store.dispatch(addTimeline({ id: 1, desc: "TEST1" }));
// store.dispatch(addTimeline({ id: 2, desc: "TEST2" }));
// store.dispatch(increaseNextPage());
// store.dispatch(editTimeline({ id: 2, desc: "TEST3" }));
// store.dispatch(removeTimeline({ id: 1 }));

// store.dispatch(addFriend({ id: 1, name: "아이유" }));
// store.dispatch(addFriend({ id: 2, name: "테스트2" }));
// store.dispatch(editFriend({ id: 2, name: "zzz" }));
// store.dispatch(removeFriend({ id: 1 }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <FriendMain />
        <TimelineMain />
      </>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
