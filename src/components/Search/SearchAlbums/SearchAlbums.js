import { Link } from "react-router-dom";
import {  PlayListDisplayMobile,  CardContentStyle,  CardMediaStyle,} from "./SearchAlbums.style";
import PlayListDisplay from "./SearchAlbums.style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
const SearchAlbums = ({ searchAlbums }) => {
  const renderedSearchAlbum = searchAlbums.map((results) => {
    return (
      <Card
        key={results.data.uri.replace("spotify:album:", "")}
        sx={CardMediaStyle}
      >
        <CardActionArea>
          <Link
            to={
              "/album/" +
              results.data.uri.replace("spotify:album:", "") +
              results.data.artists.items[0].uri.replace("spotify:artist:", "/")
            }
          >
            <CardMedia
              component="img"
              height="150"
              image={results.data.coverArt.sources[0].url}
              alt="album"
            />
            <CardContent style={CardContentStyle}>
              {results.data.name}
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    );
  });

  return (
    <Grid item xs>
      <h2> Albums</h2>
      <Grid item xs style={
          window.matchMedia("(max-width: 700px)").matches
            ? PlayListDisplayMobile
            : PlayListDisplay
        }
      >
        {renderedSearchAlbum}
      </Grid>
    </Grid>
  );
};
export default SearchAlbums;
