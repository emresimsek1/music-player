import { AlbumAction } from "../constants";

const initialState = {
  albums: [],
};

function albumReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case AlbumAction.SEARCH:
      return action.payload;
      case AlbumAction.RESET:
        return initialState;
    default:
      newState = state;
  }

  return newState;
}
export default albumReducer;
