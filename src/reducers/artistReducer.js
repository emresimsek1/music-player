import { ArtistAction } from "../constants";

const initialState = {
  artist: [],
};

function artistReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ArtistAction.SEARCH:
      return action.payload;
      case ArtistAction.RESET:
        return initialState;
    default:
      newState = state;
  }  

  return newState;
}
export default artistReducer;
