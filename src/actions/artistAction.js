import { axios } from "../utils/axios";
import { ArtistAction } from "../constants";
import RandomApi from "../components/api/randomApi";
const random = Math.floor(Math.random() * RandomApi.length);
export const artistSearch = (term) => async (dispatch) => {
  dispatch({ type: ArtistAction.RESET });
  axios
    .get("artist_overview/", {
      params: { id: term },
      headers: {
        "X-RapidAPI-Key": RandomApi[random],
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    })
    .then((response) => {
      dispatch({ type: ArtistAction.SEARCH, payload: response.data.data });
    })
    .catch((error) => {
      console.log(error.message);
    });
};
