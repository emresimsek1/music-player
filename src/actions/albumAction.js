import { axios } from "../utils/axios";
import { AlbumAction } from "../constants";
import RandomApi from "../components/api/randomApi";
import { setLoading } from "./appAction";

const random = Math.floor(Math.random() * RandomApi.length);
export const albumSearch = (term) => async (dispatch) => {
  dispatch(setLoading(false));
  axios
    .get("albums/", {
      params: { ids: term },
      headers: {
        "X-RapidAPI-Key": RandomApi[random],
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    })
    .then((response) => {
      dispatch({ type: AlbumAction.SEARCH, payload: response.data });
    })
    .catch((error) => {
      console.log(error.message);
    }).finally(() => {
      dispatch(setLoading(true));
    });
};
