import { PlayListAction } from "../constants";

const initialState = {
  items: [],
};
function playListReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case PlayListAction.SEARCH:
      return { 
        ...state,
        items: [...state.items, action.payload]
    }
    default:
      newState = state;
  }
  return newState;
}
export default playListReducer;
