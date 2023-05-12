import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMusic } from "../../actions/getMusicAction";
import { albumSearch } from "../../actions/albumAction";
import { useEffect } from "react";
import { artistSearch } from "../../actions/artistAction";
import AlbumDetail from "../../components/Album/AlbumDetail/AlbumDetail";
import AlbumDetailSkeleton from "../../components/Album/AlbumDetail/AlbumDetail.skeleton";
import AlbumOtherArtists from "../../components/Album/AlbumOtherArtists/AlbumOtherArtists";
import AlbumOtherArtistsSkeleton from "../../components/Album/AlbumOtherArtists/AlbumOtherArtists.skeleton";
import AlbumPopulerTracks from "../../components/Album/AlbumPopulerTracks/AlbumPopulerTracks";
import AlbumPopulerTracksSkeleton from "../../components/Album/AlbumPopulerTracks/AlbumPopulerTracks.skeleton";
import AlbumsTracks from "../../components/Album/AlbumsTracks/AlbumsTracks";
import AlbumsTracksSkeleton from "../../components/Album/AlbumsTracks/AlbumsTracks.skeleton";
import { Grid } from "@mui/material";

const Album = () => {
  const paramList = useParams();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(albumSearch(paramList.albumId));
    dispatch(artistSearch(paramList.artistId));
  }, [dispatch, paramList]);

  const getMusicId = (musicId, trackImage, newTrack) => {
    dispatch(getMusic(musicId, trackImage, newTrack));
  };
  const loading = store.app.loading;

  return (
    <Grid item xs>
      <Grid item xs>
        {loading ? (
          <AlbumDetail resultsAlbum={store.album} />
        ) : (
          <AlbumDetailSkeleton />
        )}
      </Grid>
      <Grid item xs>
        {loading ? (
          <AlbumsTracks resultsAlbum={store.album} newTrack={getMusicId} />
        ) : (
          <AlbumsTracksSkeleton />
        )}
      </Grid>
      <Grid item xs>
        {loading ? (
          <AlbumPopulerTracks
            resultArtistOverview={store.artist}
            getMusicId={getMusicId}
          />
        ) : (
          <AlbumPopulerTracksSkeleton />
        )}
      </Grid>
      <Grid item xs>
        {loading ? (
          <AlbumOtherArtists resultArtistOverview={store.artist} />
        ) : (
          <AlbumOtherArtistsSkeleton />
        )}
      </Grid>
    </Grid>
  );
};
export default Album;
