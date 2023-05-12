import { GetMusicAction } from "../constants";

const initialState = {
  music: [],
};

function albumReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GetMusicAction.GET_MUSIC:
      return action.payload;
    default:
      newState = state;
  }

  return newState;
}
export default albumReducer;
