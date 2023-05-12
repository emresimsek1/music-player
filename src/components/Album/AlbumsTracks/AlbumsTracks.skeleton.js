import {
  TrackListDisplay,
  TitleDisplay,
  AlbumMusicInfo,
} from "./AlbumsTracks.style";
import { CopyrightDisplay } from "./AlbumsTracks.style";

import { ButtonBase, Grid, Skeleton } from "@mui/material";
const Album = () => {
  const options = [];
  for (let i = 0; i <= 15; i++) {
    options.push(
      <ButtonBase key={i} variant="text" style={{ width: "100%" }}>
        <Grid item xs style={TrackListDisplay}>
          <Grid item xs style={AlbumMusicInfo}>
            <Grid item xs={1} style={{ paddingRight: "1rem" }}>
              <Skeleton variant="text" sx={{ width: "1rem" }} />
            </Grid>

            <Grid item xs>
              <Skeleton variant="text" sx={{ width: "15rem" }} />
            </Grid>
          </Grid>

          <Grid item xs={1} style={{ padding: "1rem" }}>
            <Skeleton variant="text" sx={{ width: "2rem" }} />
          </Grid>
        </Grid>
      </ButtonBase>
    );
  }

  return (
    <Grid item xs>
      <Grid item xs style={TitleDisplay}>
        <Grid item xs style={{ padding: "0 1rem 0 1rem" }}>
          <h2>
            <Skeleton variant="text" sx={{ width: "5rem" }} />
          </h2>
        </Grid>
        <h2>
          <Skeleton variant="text" sx={{ width: "5rem" }} />
        </h2>
      </Grid>
      <hr></hr>
      <Grid item xs> {options}</Grid>
      <Grid item xs style={CopyrightDisplay}>
        <h4>
          <Skeleton variant="text" sx={{ width: "20rem" }} />
        </h4>
        <h4>
          <Skeleton variant="text" sx={{ width: "10rem" }} />
        </h4>
      </Grid>
    </Grid>
  );
};
export default Album;
