/* eslint-disable jsx-a11y/alt-text */
import { Card, CardActionArea, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import {CardContentStyle,CardStyle,PlayListDisplayMobile,} from "./AlbumOtherArtists.style";
import PlayListDisplay from "./AlbumOtherArtists.style";
const Album = ({ resultArtistOverview }) => {
  const renderedOtherArtist =
    resultArtistOverview.artist.length !== 0
      ? resultArtistOverview.artist.relatedContent.relatedArtists.items.map(
          (results) => {
            return (
              <Card key={results.id} sx={CardStyle}>
                <CardActionArea>
                  <Link to={"/artist/" + results.id}>
                    <CardMedia
                      component="img"
                      width="150"
                      height="150"
                      image={
                        results.visuals.avatarImage === null
                          ? ""
                          : results.visuals.avatarImage.sources[0].url
                      }
                      alt="artist"
                    />
                    <CardContent style={CardContentStyle}>
                      {results.profile.name}
                    </CardContent>
                  </Link>{" "}
                </CardActionArea>{" "}
              </Card>
            );
          }
        )
      : "";

  return (
    <Grid item xs>
      <h2>Fans Also Like</h2>
      <Grid item xs style={
          window.matchMedia("(max-width: 700px)").matches
            ? PlayListDisplayMobile
            : PlayListDisplay}>
        {renderedOtherArtist}
      </Grid>
    </Grid>
  );
};
export default Album;
