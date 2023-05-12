import {
  PlayListDisplayMobile,
  CardContentStyle,
  CardMediaStyle,
} from "./SearchAlbums.style";
import PlayListDisplay from "./SearchAlbums.style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Grid, Skeleton } from "@mui/material";
const SearchAlbumsSkeleton = () => {
  const options = [];

  for (let i = 0; i <= Math.floor(window.innerWidth / 206); i++) {
    options.push(
      <Card key={i} sx={CardMediaStyle}>
        <Skeleton variant="rounded" width={150} height={150} />
        <CardActionArea>
          <CardContent style={CardContentStyle}>
            <Skeleton variant="text" sx={{ width: "2rem" }} />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Grid item xs>
      <h2>
        <Skeleton variant="text" sx={{ width: "5rem" }} />
      </h2>
      <Grid item xs style={
          window.matchMedia("(max-width: 700px)").matches
            ? PlayListDisplayMobile
            : PlayListDisplay
        }
      >
        {options}
      </Grid>
    </Grid>
  );
};
export default SearchAlbumsSkeleton;
