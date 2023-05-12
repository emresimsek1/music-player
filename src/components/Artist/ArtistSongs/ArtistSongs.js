import { ButtonBase, Grid } from "@mui/material";
import { TrackNameDisplay, GridDisplay } from "./ArtistSongs.style";

const ArtistSongs = ({ resultArtist, getMusicId }) => {
  const renderedArtistSongs =
    resultArtist.artist.discography.topTracks.items.map((results, index) => {
      return (
        <Grid item xs
          key={results.uid}
          style={{ cursor: "pointer" }}
          onClick={() =>
            getMusicId(
              results.track.id,
              results.track.album.coverArt.sources[1].url
            )
          }
        >
          <ButtonBase
            variant="text"
            style={{
              width: "100%",
            }}
          >
            <Grid container spacing={1} style={GridDisplay}>
              <Grid
                item
                xs
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid item xs={1}>
                  {index + 1}
                </Grid>

                <Grid item xs={3}>
                  <img
                    className="img"
                    src={results.track.album.coverArt.sources[1].url}
                    alt={"album"}
                  ></img>
                </Grid>

                <Grid item xs>
                  <Grid item xs style={TrackNameDisplay}>
                      {results.track.name}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs
                style={
                  window.matchMedia("(max-width: 700px)").matches
                    ? { display: "none" }
                    : { display: "flex" }
                }
              >
                {results.track.playcount.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
    });

  return (
    <Grid item xs>
      <h2>Top Tracks by {resultArtist.artist.profile.name}</h2>
      <Grid item xs>{renderedArtistSongs}</Grid>
    </Grid>
  );
};
export default ArtistSongs;
