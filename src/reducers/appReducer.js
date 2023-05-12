import { AppAction } from "../constants";
const initialState = {
  loading: false,
};

function appReducer(state = initialState, action) {
  let newState = state;

  switch (action.type) {
    case AppAction.SET_LOADING: {
      newState = (state, { loading: action.payload });
      break;
    }
    default: {
      break;
    }
  }
  return newState;
}
export default appReducer;
