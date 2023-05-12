import { SearchAction } from "../constants";

const initialState = {
  search: [],
};

function searchReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SearchAction.SEARCH:
      return action.payload;
      case SearchAction.RESET:
        return initialState;
    default:
      newState = state;
  }

  return newState;
}
export default searchReducer;
