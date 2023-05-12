import { combineReducers } from "redux";
import albumReducer from "./albumReducer";
import artistReducer from "./artistReducer";
import playListReducer from "./playListReducer";
import searchReducer from "./searchReducer";
import getMusicReducer from "./getMusicReducer";
import appReducer from "./appReducer";

export const rootReducer = combineReducers({
  app:appReducer,
  album: albumReducer,
  main: playListReducer,
  artist: artistReducer,
  search: searchReducer,
  music: getMusicReducer,
});
