import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { artistSearch } from "../../actions/artistAction";
import { getMusic } from "../../actions/getMusicAction";
import { useEffect } from "react";
import ArtistAlbums from "../../components/Artist/ArtistAlbums/ArtistAlbums";
import ArtistDetails from "../../components/Artist/ArtistDetails/ArtistDetails";
import ArtistOther from "../../components/Artist/ArtistOther/ArtistOther";
import ArtistSongs from "../../components/Artist/ArtistSongs/ArtistSongs";
import ArtistAlbumsSkeleton from "../../components/Artist/ArtistAlbums/ArtistAlbums.skeleton";
import ArtistDetailsSkeleton from "../../components/Artist/ArtistDetails/ArtistDetails.skeleton";
import ArtistOtherSkeleton from "../../components/Artist/ArtistOther/ArtistOther.skeleton";
import ArtistSongsSkeleton from "../../components/Artist/ArtistSongs/ArtistSongs.skeleton";
import { Grid } from "@mui/material";

const Artist = () => {
  const artist = useParams();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(artistSearch(artist.artistId));
  }, [dispatch, artist]);

  const getMusicId = (musicId, trackImage) => {
    dispatch(getMusic(musicId, trackImage));
  };

  var loading = Object.entries(store.artist.artist);

  return (
    <Grid item xs>
      <Grid className="artist-details">
        {loading.length > 0 ? (
          <ArtistDetails resultArtist={store.artist} />
        ) : (
          <ArtistDetailsSkeleton />
        )}
      </Grid>
      <Grid item xs>
        {loading.length > 0 ? (
          <ArtistSongs resultArtist={store.artist} getMusicId={getMusicId} />
        ) : (
          <ArtistSongsSkeleton />
        )}
      </Grid>
      <Grid item xs>
        {loading.length > 0 ? (
          <ArtistAlbums resultArtist={store.artist}/>
        ) : (
          <ArtistAlbumsSkeleton />
        )}
      </Grid>
      <Grid item xs>
        {loading.length > 0 ? (
          <ArtistOther resultArtist={store.artist} />
        ) : (
          <ArtistOtherSkeleton />
        )}
      </Grid>
    </Grid>
  );
};
export default Artist;
