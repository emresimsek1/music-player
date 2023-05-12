import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardContentStyle, PlayListDisplayMobile ,CardMediaStyle} from "./SearchArtists.style";
import PlayListDisplay from "./SearchArtists.style";
import userPng from "../../../image/user.png";
const SearchArtists = ({ searchArtists }) => {
  const renderedSearchTopArtists = searchArtists.map((results) => {
    return (
      <Card
        key={results.data.uri.replace("spotify:artist:", "1")}
        sx={CardMediaStyle}
      >
        <CardActionArea>
          <Link
            to={"/artist/" + results.data.uri.replace("spotify:artist:", "")}
          >
            <CardMedia
              component="img"
              height="150"
              image={
                results.data.visuals.avatarImage === null
                  ? userPng
                  : results.data.visuals.avatarImage.sources[0].url
              }
              alt="artist"
            />
            <CardContent style={CardContentStyle}>
              {results.data.profile.name}
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    );
  });

  return (
    <Grid item xs>
      <h2>Artists</h2>
      <Grid item style={
          window.matchMedia("(max-width: 700px)").matches
            ? PlayListDisplayMobile
            : PlayListDisplay
        }
      >
        {renderedSearchTopArtists}
      </Grid>
    </Grid>
  );
};
export default SearchArtists;
