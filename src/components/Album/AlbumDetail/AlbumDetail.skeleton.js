/* eslint-disable jsx-a11y/alt-text */
import {  Grid, Skeleton } from "@mui/material";
import {  AlbumInfo,  AlbumInfoDisplay,  AlbumInfoDisplayMobile,} from "./AlbumDetail.style";
const AlbumDetailSkeleton = () => {
  return (
    <Grid item xs style={
        window.matchMedia("(max-width: 700px)").matches
          ? AlbumInfoDisplayMobile
          : AlbumInfoDisplay
      }
    >
      <Skeleton variant="rectangular" width={222} height={222} />
      <Grid item style={AlbumInfo}>
        <Grid item xs>
          <h1>
            <Skeleton variant="text" sx={{ width: "20rem" }} />{" "}
          </h1>
        </Grid>
        <Grid>
          <h3>
            <Skeleton variant="text" sx={{ width: "15rem" }} />{" "}
          </h3>
        </Grid>
        <Grid item xs>
          <h2>
            <Skeleton variant="text" sx={{ width: "15rem" }} />{" "}
          </h2>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AlbumDetailSkeleton
