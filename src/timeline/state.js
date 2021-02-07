import createItemsLogic from "../common/createItemsLogic";
import createReducer from "../common/createReducer";
import mergeReducers from "../common/mergeReducers";

export const types = {
  INCREASE_NEXT_PAGE: "timeline/INCREASE_NEXT_PAGE",
  REQUEST_LIKE: "timeline/REQUEST_LIKE",
  ADD_LIKE: "timeline/ADD_LIKE",
  SET_LOADING: "timeline/SET_LOADING",
};

const { add, remove, edit, reducer: timelineReducer } = createItemsLogic(
  "timelines"
);

export const actions = {
  addTimeline: add,
  removeTimeline: remove,
  editTimeline: edit,
  increaseNextPage: () => ({ type: types.INCREASE_NEXT_PAGE }),
  requestLike: (timeline) => ({ type: types.REQUEST_LIKE, timeline }),
  addLike: (timelineId, value) => ({ type: types.ADD_LIKE, timelineId, value }),
  setLoading: (isLoading) => ({
    type: types.SET_LOADING,
    isLoading,
  }),
};

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;

const INITIAL_STATE = { nextPage: 0, isLoading: false };
const reducer = createReducer(INITIAL_STATE, {
  [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
  [types.ADD_LIKE]: (state, action) => {
    const timeline = state.timeline.find(
      (item) => item.id === action.timelineId
    );

    if (timeline) {
      timeline.likes += action.value;
    }
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
});

const reducers = [reducer, timelineReducer];
export default mergeReducers(reducers);
