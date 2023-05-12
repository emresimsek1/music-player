import { ButtonBase, Grid, Skeleton } from "@mui/material";
import { TrackNameDisplay } from "./ArtistSongs.style";

const ArtistSongsSkeleton = () => {
  const options = [];

  for (let i = 0; i <= 10; i++) {
    options.push(
      <Grid item xs key={i} className="artist-music" style={{ cursor: "pointer" }}>
        <ButtonBase
          variant="text"
          style={{
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={1}
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "GraublauWeb",
            }}
          >
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

              <Grid item xs={3} paddingBottom={0.5}>
                <Skeleton variant="rounded" width={64} height={64} />
              </Grid>

              <Grid item xs style={TrackNameDisplay}>
                    <Skeleton variant="text" sx={{ width: "5rem" }} />
              </Grid>
            </Grid>
            <Grid item xs id="track-play-count">
              <Skeleton variant="text" sx={{ width: "5rem" }} />
            </Grid>
            <Grid item xs={1}>
              <Skeleton variant="text" sx={{ width: "5rem" }} />
            </Grid>
          </Grid>
        </ButtonBase>
      </Grid>
    );
  }

  return (
    <Grid item xs>
      <h2>
        <Skeleton variant="text" sx={{ width: "5rem" }} />
      </h2>
      <Grid item xs>{options}</Grid>
    </Grid>
  );
};
export default ArtistSongsSkeleton;
