import { axios } from "../utils/axios";
import { PlayListAction } from "../constants";
import RandomApi from "../components/api/randomApi";
const random = Math.floor(Math.random() * RandomApi.length);

export const playListSearch = (term) => async (dispatch) => {
  axios
    .get("playlist_tracks/", {
      params: { id: term, offset: "0", limit: "8" },
      headers: {
        "X-RapidAPI-Key": RandomApi[random],
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    })
    .then((response) => {
      dispatch({ type: PlayListAction.SEARCH, payload: response.data.items });
    })
    .catch((error) => {
      console.log(error.message);
    });
};
