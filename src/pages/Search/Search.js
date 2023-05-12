import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchAll } from "../../actions/searchAction";
import SearchAlbum from "../../components/Search/SearchAlbums/SearchAlbums";
import SearchArtistSongs from "../../components/Search/SearchArtistSongs/SearchArtistSongs";
import SearchArtists from "../../components/Search/SearchArtists/SearchArtists";
import SearchTopResults from "../../components/Search/SearchTopResults/SearchTopResults";
import SearchAlbumSkeleton from "../../components/Search/SearchAlbums/SearchAlbums.skeleton";
import SearchArtistSongsSkeleton from "../../components/Search/SearchArtistSongs/SearchArtistSongs.skeleton";
import SearchArtistsSkeleton from "../../components/Search/SearchArtists/SearchArtists.skeleton";
import SearchTopResultsSkeleton from "../../components/Search/SearchTopResults/SearchTopResults.skeleton";
import Grid from "@mui/material/Grid";

const Search = () => {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAll(params.searchItem));
  }, [dispatch, params]);

  const store = useSelector((state) => state);

  var res = Object.entries(store.search);

  return (
    <Grid item xs>
      <Grid item xs>
        <Grid
          container
          spacing={2}
          style={
            window.matchMedia("(max-width: 700px)").matches
              ? { display: "flex", flexDirection: "column" }
              : { display: "flex", flexDirection: "row" }
          }
        >
          <Grid item xs>
            <Grid className="artist-name">
              {res.length > 1 ? (
                <SearchTopResults searchArtists={store.search.artists.items} />
              ) : (
                <SearchTopResultsSkeleton  />
              )}
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid className="artists-song-list">
              {res.length > 1 ? (
                <SearchArtistSongs searchTracks={store.search.tracks.items} />
              ) : (
                <SearchArtistSongsSkeleton />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs>
        {res.length > 1 ? (
          <SearchAlbum searchAlbums={store.search.albums.items} />
        ) : (
          <SearchAlbumSkeleton  />
        )}
      </Grid>
      <Grid item xs>
        {" "}
        {res.length > 1 ? (
          <SearchArtists searchArtists={store.search.artists.items} />
        ) : (
          <SearchArtistsSkeleton />
        )}
      </Grid>
    </Grid>
  );
};
export default Search;
