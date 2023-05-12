import {  CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AlbumInfo,
  AlbumInfoDisplay,
  AlbumInfoDisplayMobile,
} from "./AlbumDetail.style";
const AlbumDetail = ({ resultsAlbum }) => {
  if (resultsAlbum.albums.length > 0) {
    return (
      <Grid item xs style={
          window.matchMedia("(max-width: 700px)").matches
            ? AlbumInfoDisplayMobile
            : AlbumInfoDisplay
        }
      >
        <CardMedia
          sx={{ height: 222, width: 222 }}
          image={resultsAlbum.albums[0].images[1].url}
        />

        <Grid item xs style={AlbumInfo}>
          <Grid item xs>
            <h1>{resultsAlbum.albums[0].name}</h1>
          </Grid>
          <Grid item xs>
            <h3> {resultsAlbum.albums[0].release_date}</h3>
          </Grid>
          <Grid item xs>
            <Link to={"/artist/" + resultsAlbum.albums[0].artists[0].id}>
              <h2>{resultsAlbum.albums[0].artists[0].name}</h2>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};
export default AlbumDetail;
