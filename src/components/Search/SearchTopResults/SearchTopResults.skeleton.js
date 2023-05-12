import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Skeleton } from "@mui/material";
import {CardActionAreaStyle,TypographyStyle} from "./SearchTopResults.style"

const SearchTopResultsSkeleton = () => {
  const renderedSearchArtists = () => {
    return (
      <Card sx={{ maxHeight: "20rem", minHeight: "13rem" }}>
        <CardActionArea
         style={CardActionAreaStyle}>
          <Skeleton variant="circular" width={"10rem"} height={"10rem"} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={TypographyStyle}>
            <Skeleton variant="text" sx={{ width: "5rem" }} />
          </Typography>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <Grid item xs>
      <h2><Skeleton variant="text" sx={{ width: "5rem" }} /></h2>
      <Grid item xs>{renderedSearchArtists()}</Grid>
    </Grid>
  );
};
export default SearchTopResultsSkeleton;
