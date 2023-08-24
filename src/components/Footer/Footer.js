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
          to="https://www.instagram.com/senemrede"
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <InstagramIcon fontSize="large" />
        </Link>
        <Link
          to="https://twitter.com/senemrede"
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <TwitterIcon fontSize="large" />
        </Link>

        <Link
          to="https://github.com/emresimsek1"
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <GitHubIcon fontSize="large" />
        </Link>

        <Link
          to="https://www.linkedin.com/in/emre-şimşek" // i know, know
          style={{ padding: "0 1rem 0 1rem" }}
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  );
};
export default Footer;
