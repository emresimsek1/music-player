import { axios } from "../utils/axios";
import { SearchAction } from "../constants";
import RandomApi from "../components/api/randomApi";
import { setLoading } from "./appAction";

const random = Math.floor(Math.random() * RandomApi.length);
export const searchAll = (term) => async (dispatch) => {
  if (term.indexOf("%20") > 0) {
    term = term.replace("%20", " ");
  }
  dispatch({ type: SearchAction.RESET });
  axios
    .get("search/", {
      params: {
        q: term,
        type: "multi",
        offset: "0",
        limit: "8",
        numberOfTopResults: "5",
      },
      headers: {
        "X-RapidAPI-Key": RandomApi[random],
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    })
    .then((response) => {
      dispatch({ type: SearchAction.SEARCH, payload: response.data });
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      dispatch(setLoading(true));
    });
};
