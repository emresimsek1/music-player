import { Grid } from "@mui/material";
import {  artistDisplayMobile,  artistInfo,  artistImage,} from "./ArtistDetails.style.";
const ArtistDetails = ({ resultArtist }) => {
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
        <img
          src={
            resultArtist.artist.visuals.headerImage === null
              ? resultArtist.artist.visuals.avatarImage.sources[0].url
              : resultArtist.artist.visuals.headerImage.sources[0].url
          }
          style={artistImage}
          alt={"artist"}
        ></img>
      </Grid>
      <Grid item xs style={artistInfo}>
        <h1>{resultArtist.artist.profile.name}</h1>
        <h4>Monthly Listeners {resultArtist.artist.stats.monthlyListeners}</h4>
      </Grid>
    </Grid>
  );
};
export default ArtistDetails;
