/* eslint-disable jsx-a11y/alt-text */
import { TrackNameDisplay, GridStyle } from "./AlbumPopulerTracks.style";
import { ButtonBase, Grid, Skeleton } from "@mui/material";

const Album = () => {
  const options = [];

  for (let i = 0; i <= 4; i++) {
    options.push(
      <Grid item xs key={i} style={{ cursor: "pointer" }}>
        <ButtonBase
          variant="text"
          style={{
            width: "100%",
          }}
        >
          <Grid container spacing={1} style={GridStyle}>
            <Grid
              item
              xs
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={1}>
                <Skeleton variant="text" sx={{ width: "2rem" }} />
              </Grid>

              <Grid item xs={3} height={70}>
                <Skeleton variant="rectangular" width={64} height={64} />
              </Grid>

              <Grid item xs>
                <Grid item xs style={TrackNameDisplay}>
                  <Skeleton variant="text" sx={{ width: "12rem" }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs id="track-play-count">
              <Skeleton variant="text" sx={{ width: "5rem" }} />
            </Grid>
            <Grid item xs={1}>
              <Skeleton variant="text" sx={{ width: "2rem" }} />
            </Grid>
          </Grid>
        </ButtonBase>
      </Grid>
    );
  }

  return (
    <Grid item xs>
      <h2>
        <Skeleton variant="text" sx={{ width: "10rem" }} />
      </h2>
      {options}
    </Grid>
  );
};
export default Album;
