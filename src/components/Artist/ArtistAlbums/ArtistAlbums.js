import {PlayListDisplayMobile,CardContentStyle,CardStyle,} from "./ArtistAlbums.style";
import PlayListDisplay from "./ArtistAlbums.style";
import { Link } from "react-router-dom";
import {Card,CardActionArea,CardContent,CardMedia,Grid,} from "@mui/material";
const ArtistAlbums = ({ resultArtist }) => {
  const renderedArtistAlbums = resultArtist.artist.discography.albums.items.map(
    (results) => {
      return (
        <Card key={results.releases.items[0].id} sx={CardStyle}>
          <CardActionArea>
            <Link to={"/album/" +results.releases.items[0].id +"/" +resultArtist.artist.id}>
              <CardMedia component="img" height="150"
                image={
                  results.releases.items[0].coverArt === null
                    ? ""
                    : results.releases.items[0].coverArt.sources[0].url
                } alt="album"/>
              <CardContent style={CardContentStyle}>
                {results.releases.items[0].name}
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      );
    }
  );

  return (
    <Grid item xs> 
    {resultArtist.artist.discography.albums.items.length !== 0 ? (
      <Grid>
      <h2>Popular Albums by {resultArtist.artist.profile.name}</h2>
      <Grid item xs style={window.matchMedia("(max-width: 700px)").matches
      ? PlayListDisplayMobile
      : PlayListDisplay}>
       {renderedArtistAlbums}
      </Grid>
      </Grid>) :""}
    </Grid>
  );
};
export default ArtistAlbums;
