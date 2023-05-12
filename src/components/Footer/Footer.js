import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { FooterDisplay, HrStyle } from "./Footer.style";
const Footer = () => {
  return (
    <Grid item xs style={FooterDisplay}>
      <hr style={HrStyle}></hr>
      <Grid item xs style={{ display: "flex", justifyContent: "center"}} >
        <h4>This site is built with react using spotify api.</h4>
      </Grid>
      <Grid item xs style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to="https://shorturl.at/aisC2"
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <InstagramIcon fontSize="large" />
        </Link>
        <Link
          to="https://shorturl.at/rKRV7"
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <TwitterIcon fontSize="large" />
        </Link>

        <Link
          to="https://shorturl.at/knGLX"
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <GitHubIcon fontSize="large" />
        </Link>

        <Link
          to="https://shorturl.at/mntNO"
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  );
};
export default Footer;
