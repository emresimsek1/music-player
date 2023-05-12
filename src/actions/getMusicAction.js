import { axios } from "../utils/axios";
import { GetMusicAction } from "../constants";

import RandomApi from "../components/api/randomApi";
const random = Math.floor(Math.random() * RandomApi.length);

export const getMusic = (term, trackImage, newTrack) => async (dispatch) => {
  // return function (dispatch) {

  if (!newTrack) {
    axios
      .get("tracks/", {
        params: { ids: term },
        headers: {
          "X-RapidAPI-Key": RandomApi[random],
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      })
      .then((response) => {

        response.data.tracks[0]["trackImage"] = trackImage;
         
        dispatch({ type: GetMusicAction.GET_MUSIC, payload: response.data.tracks[0] });
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    
    dispatch({ type: GetMusicAction.GET_MUSIC, payload: newTrack });
  }
  // };
};
/*
const AlbumActions = {
  searchAlbums,
};

export default AlbumActions;
*/
