import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import MusicController from "../../components/MusicController/MusicController/MusicController";
const Layout = () => {
  return (
    <Container className="layout-container">
      <SearchBar />

      <Outlet />
      <Footer />
      <MusicController />
    </Container>
  );
};

export default Layout;
