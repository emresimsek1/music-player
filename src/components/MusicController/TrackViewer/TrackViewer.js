import * as React from "react";
import Box from "@mui/material/Box";
import {ArtistNameStyle} from "./TrackViewer.style"
import { CardContent, CardMedia, Typography } from "@mui/material";

const MusicPlayer = ({ artistName, trackName, trackImage }) => {
  return (
    <Box style={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 64, height: 64, background: "gray" }}
        image={trackImage}
        alt=" "
      />

      <CardContent sx={{ padding: "9px 0 0 9px" }}>
        <Typography component="div" color="white" variant="title" style={window.matchMedia("(max-width: 700px)").matches
            ? ArtistNameStyle:{display:"flex"}}>
          {artistName}
        </Typography>
        <Typography variant="subtitle2" color="white" component="div" style={window.matchMedia("(max-width: 700px)").matches
          ? ArtistNameStyle:{display:"flex"}} >
          {trackName}
        </Typography>
      </CardContent>
    </Box>
  );
};
export default MusicPlayer;
