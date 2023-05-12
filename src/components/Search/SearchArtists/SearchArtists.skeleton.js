import Card from "@mui/material/Card";
import { CardActionArea, Grid, Skeleton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardContentStyle, PlayListDisplayMobile,CardMediaStyle } from "./SearchArtists.style";
import PlayListDisplay from "./SearchArtists.style";
const SearchArtistsSkeleton = () => {
  const options = [];

  for (let i = 0; i <= Math.floor(window.innerWidth / 206); i++) {
    options.push(
      <Card key={i} sx={CardMediaStyle}>
        <CardActionArea>
          <Skeleton variant="rounded" width={150} height={150} />
          <CardContent style={CardContentStyle}>
            <Skeleton variant="text" sx={{ width: "2rem" }} />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Grid item xs>
        <h2><Skeleton variant="text" sx={{ width: "5rem" }} /></h2>
        <Grid item xs
          className="search-artists-container"
          style={
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
export default SearchArtistsSkeleton;
