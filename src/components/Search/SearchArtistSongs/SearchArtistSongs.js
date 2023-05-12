import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import { DisplayStyle, SongsStyle } from "./SearchArtistSongs.style";
import { Link } from "react-router-dom";

const SearchArtistSongs = ({ searchTracks }) => {
  const renderedSearchSong = searchTracks.map((results, index) => {
    if (index < 4) {
      return (
        <ButtonBase key={results.data.id} style={DisplayStyle}>
          <Link
            style={{ width: "100%" }}
            key={results.data.id}
            to={
              "/album/" +
              results.data.albumOfTrack.id +
              "/" +
              results.data.artists.items[0].uri.replace("spotify:artist:", "")
            }
          >
            <Grid container>
              <Grid item>
                <img
                  style={{ width: "55px" }}
                  src={results.data.albumOfTrack.coverArt.sources[0].url}
                  alt="album"
                ></img>
              </Grid>
              <Grid item style={SongsStyle}>
                {results.data.name}
              </Grid>
            </Grid>{" "}
          </Link>
        </ButtonBase>
      );
    }
  });

  return (
    <Grid item xs>
      <h2>Songs</h2>
      <Grid item xs>{renderedSearchSong}</Grid>
    </Grid>
  );
};
export default SearchArtistSongs;
