import {  Card,  CardActionArea,  CardContent,  Grid,  Skeleton,} from "@mui/material";
import { PlayListDisplayMobile, CardContentStyle,CardStyle } from "./ArtistOther.style";
import PlayListDisplay from "./ArtistOther.style";
const ArtistOtherSkeleton = () => {
  const options = [];

  for (let i = 0; i <= Math.floor(window.innerWidth / 206); i++) {
    options.push(
      <Card key={i} sx={CardStyle}>
        <CardActionArea>
          <Skeleton variant="rounded" width={150} height={150} />
          <CardContent style={CardContentStyle}>
            <Skeleton variant="text" sx={{ width: "5rem" }} />
          </CardContent>
        </CardActionArea>{" "}
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
export default ArtistOtherSkeleton;
