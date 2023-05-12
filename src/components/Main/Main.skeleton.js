import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import {
  PlayListDisplayMobile,
  CardContentStyle,
  ArtistNameStyle,
  CardStyle,
} from "./Main.style";
import Test from "./Main.style";
import Skeleton from "@mui/material/Skeleton";

const MainSkeleton = () => {
  const options = [];
  for (let i = 0; i <= Math.floor(window.innerWidth / 206); i++) {
    options.push(
      <Card key={Math.random()} sx={CardStyle}>
        <CardActionArea>
          <Skeleton variant="rounded" width={150} height={150} />
          <CardContent style={CardContentStyle}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </CardContent>
        </CardActionArea>
        <CardActions style={{ padding: "12px" }}>
          <Grid item xs style={ArtistNameStyle}>
            <Skeleton variant="text" sx={{ width: "3rem", fontSize: "1rem" }} />
          </Grid>
        </CardActions>
      </Card>
    );
  }

  return (
    <Grid item xs>
      <h2>
        <Skeleton variant="text" sx={{ width: "25rem" }} />
      </h2>

      <Grid
        item
        xs
        style={
          window.matchMedia("(max-width: 700px)").matches
            ? PlayListDisplayMobile
            : Test
        }
      >
        {options}
      </Grid>
    </Grid>
  );
};
export default MainSkeleton;
