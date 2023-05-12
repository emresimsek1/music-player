import Main from "../../components/Main/Main";
import MainSkeleton from "../../components/Main/Main.skeleton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playListSearch } from "../../actions/playListAction";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playListSearch("37i9dQZEVXbIVYVBNw9D5K"));
    dispatch(playListSearch("37i9dQZEVXbMDoHDwVN2tF"));
    dispatch(playListSearch("37i9dQZF1DX18jTM2l2fJY"));
  }, [dispatch]);

  const store = useSelector((state) => state);
  const listCount = store.main.items.length;

  return (
    <Grid item xs>
      <Container fixed>
        <Grid item xs style={{ margin: "1rem 0 2rem 0" }}>
          {listCount > 0 ? (
            <Main responsePlayList={store.main.items[0]} />
          ) : (
            <MainSkeleton />
          )}
        </Grid>
        <Grid item xs style={{ margin: "1rem 0 2rem 0" }}>
          {listCount > 1 ? (
            <Main responsePlayList={store.main.items[1]} />
          ) : (
            <MainSkeleton />
          )}
        </Grid>
        <Grid item xs style={{ margin: "1rem 0 2rem 0" }}>
          {listCount > 2 ? (
            <Main responsePlayList={store.main.items[2]} />
          ) : (
            <MainSkeleton  />
          )}
        </Grid>
      </Container>
    </Grid>
  );
};
export default Home;
