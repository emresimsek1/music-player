import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import { DisplayStyle, SongsStyle } from "./SearchArtistSongs.style";
import { Skeleton } from "@mui/material";
const SearchArtistSongsSkeleton = () => {
  const options = [];

  for (let i = 0; i <= 3; i++) {
    options.push(
      <ButtonBase key={i} style={DisplayStyle}>
        <Grid container>
          <Grid item marginBottom={0.5}>
            <Skeleton variant="rounded" width={54} height={54} />
          </Grid>
          <Grid item style={SongsStyle}>
            <Skeleton variant="text" sx={{ width: "5rem" }} />
          </Grid>
        </Grid>
      </ButtonBase>
    );
  }

  return (
    <Grid item xs>
      <h2><Skeleton variant="text" sx={{ width: "5rem" }} /></h2>
      <Grid item xs>{options}</Grid>
    </Grid>
  );
};
export default SearchArtistSongsSkeleton;
