import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionAreaStyle,  CardMediaStyle,  TypographyStyle,} from "./SearchTopResults.style";
import { CardActionArea, Grid } from "@mui/material";
const SearchTopResults = ({ searchArtists }) => {
  const renderedSearchArtists = () => {
    return (
      <Link
        to={
          "/artist/" + searchArtists[0].data.uri.replace("spotify:artist:", "")
        }
      >
        <Card sx={{ maxHeight: "20rem", minHeight: "13rem" }}>
          <CardActionArea style={CardActionAreaStyle}>
              <CardMedia
                style={CardMediaStyle}
                component="img"
                image={searchArtists[0].data.visuals.avatarImage.sources[0].url}
                alt="artist"
              />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={TypographyStyle}
            >
              {searchArtists[0].data.profile.name}
            </Typography>
          </CardActionArea>
        </Card>
      </Link>
    );
  };

  return (
    <Grid item xs>
      <h2>Top result</h2>
      <Grid item xs>{renderedSearchArtists()}</Grid>
    </Grid>
  );
};
export default SearchTopResults;
