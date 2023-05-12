import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import {  PlayListDisplayMobile,  CardContentStyle,  ArtistNameStyle,CardStyle} from "./Main.style";

import PlayListDisplay from "./Main.style";
const Main = ({ responsePlayList }) => {
  const renderedResults = responsePlayList
    ? responsePlayList.map((result) => {
     
        return (
          <Card
            key={result.track.id}
            sx={CardStyle}
          >
            <CardActionArea>
              <Link
                to={
                  "/album/" +
                  result.track.album.id +
                  "/" +
                  result.track.artists[0].id
                }
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={result.track.album.images[0].url}
                  alt="green iguana"
                />
                <CardContent style={CardContentStyle}>
                  {result.track.name}
                </CardContent>
              </Link>
            </CardActionArea>
            <CardActions style={{ padding: "12px" }}>
              <Link to={"/artist/" + result.track.artists[0].id}>
                <Grid item className="artist-name" style={ArtistNameStyle}>
                  {result.track.artists[0].name}
                </Grid>
              </Link>
            </CardActions>
          </Card>
        );
      })
    : "";

  return (
    <Grid item xs>
      <h1 style={{ paddingLeft: "0.5rem" }}>Most Played in Turkey </h1>
      <Grid item xs
        style={
          window.matchMedia("(max-width: 700px)").matches
            ? PlayListDisplayMobile
            : PlayListDisplay
        }
      >
        {renderedResults}
      </Grid>
    </Grid>
  );
};
export default Main;
