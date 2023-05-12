import {
  TrackListDisplay,
  TitleDisplay,
  AlbumMusicInfo,
} from "./AlbumsTracks.style";
import { CopyrightDisplay } from "./AlbumsTracks.style";
import { ButtonBase, Grid } from "@mui/material";

const Album = ({ resultsAlbum, newTrack }) => {
  if (resultsAlbum.albums.length > 0) {
    const renderedSearchSong = resultsAlbum.albums[0].tracks.items.map(
      (results, index) => {
        if(index <15){
        return (
          <ButtonBase key={results.id} variant="text" style={{ width: "100%" }}>
            <Grid item xs style={TrackListDisplay} onClick={() => newTrack(null, null, results)}>
              <Grid item xs style={AlbumMusicInfo}>
                <Grid item xs={1} style={{ paddingRight: "1rem" }}>
                  {index + 1}
                </Grid>
                <Grid item xs={3}>{results.name}</Grid>
              </Grid>
              <Grid item xs={1} style={{ padding: "1rem" }}>
                {(results.duration_ms / 600)
                  .toFixed(0)
                  .replace(/\B(?=(\d{2})+(?!\d))/g, ":")}
              </Grid>
            </Grid>
          </ButtonBase>
        );
        }
      }
    );

    return (
      <Grid item xs>
        <Grid item xs style={TitleDisplay}>
          <Grid item xs={1} style={{ padding: "0 1rem 0 1rem" }}>
            <h2>#</h2>
          </Grid>
            <h2>Title</h2>
        </Grid>
        <hr></hr>
        <Grid item xs> {renderedSearchSong}</Grid>
        <Grid item xs style={CopyrightDisplay}>
          <h4>{resultsAlbum.albums[0].copyrights[0].text}</h4>
          <h4>{resultsAlbum.albums[0].release_date}</h4>
        </Grid>
      </Grid>
    );
  }
};
export default Album;
