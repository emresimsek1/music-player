import { AppAction } from "../constants";

export function setLoading(state) {
  return {
    type: AppAction.SET_LOADING,
    payload: state,
  };
}

