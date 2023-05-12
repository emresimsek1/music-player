import { Grid, Skeleton } from "@mui/material";
import {  artistDisplayMobile,  artistInfo,} from "./ArtistDetails.style.";
const ArtistDetailsSkeleton = () => {
  return (
    <Grid
      item
      xs
      style={
        window.matchMedia("(max-width: 700px)").matches
          ? artistDisplayMobile
          : { display: "flex" }
      }
    >
      <Grid item xs={3}>
      <Skeleton variant="circular" width={300} height={300} />
      </Grid>
      <Grid item xs style={artistInfo}>
        <h1><Skeleton variant="text" sx={{ width: "15rem" }} /></h1>
        <h4><Skeleton variant="text" sx={{ width: "5rem" }} /></h4>
      </Grid>
    </Grid>
  );
};
export default ArtistDetailsSkeleton;
