import { TrackNameDisplay ,GridStyle} from "./AlbumPopulerTracks.style";
import { ButtonBase, Grid } from "@mui/material";

const AlbumPopulerTracks = ({ resultArtistOverview, getMusicId }) => {
  const renderedArtistSongs =
    resultArtistOverview.artist.length !== 0
      ? resultArtistOverview.artist.discography.topTracks.items.map(
          (results, index) => {
            if (index < 5) {
              return (
                <Grid item xs
                  key={results.uid}
                  style={{ cursor: "pointer" }}
                  onClick={() =>getMusicId(results.track.id,results.track.album.coverArt.sources[1].url)}>
                  <ButtonBase variant="text" style={{width: "100%",}}>
                    <Grid container spacing={1} 
                    style={GridStyle}>
                      <Grid item xs style={{display: "flex",alignItems: "center",}}>
                        <Grid item xs={1}>
                          {index + 1}
                        </Grid>
                        <Grid item xs={3}>
                          <img src={results.track.album.coverArt.sources[1].url}
                            alt={"album"}
                          ></img>
                        </Grid>
                        <Grid item xs>
                          <Grid item xs  style={TrackNameDisplay}>
                              {results.track.name}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs
                        style={
                          window.matchMedia("(max-width: 700px)").matches
                            ? { display: "none" }
                            : { display: "flex" }}>
                        {results.track.playcount.replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ".")}
                      </Grid>
                      <Grid item xs={1}>
                        {(results.track.duration.totalMilliseconds / 600)
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{2})+(?!\d))/g, ":")}
                      </Grid>
                    </Grid>
                  </ButtonBase>
                </Grid>
              );
            }
          }
        )
      : "";

  return (
    <Grid item xs>
        <h2>Popular Tracks by {resultArtistOverview.artist.length !== 0
            ? resultArtistOverview.artist.profile.name
            : ""}
        </h2>
        {renderedArtistSongs}
    </Grid>
  );
};
export default AlbumPopulerTracks;
