import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import PlayArrowRounded from "@mui/icons-material/PlayCircle";
import PauseRounded from "@mui/icons-material/PauseCircle";

const MusicPlayer = ({ playAudio, fastPass, paused }) => {
  return (
    <Box style={{ display: "flex" }}>
      <IconButton
        sx={{ color: "white" }}
        aria-label="previous song"
        onClick={() => fastPass(-5)}
      >
        <FastRewindRounded fontSize="large" htmlColor={"white"} />
      </IconButton>
      <IconButton
        sx={{ color: "white" }}
        aria-label={paused ? "play" : "pause"}
      >
        {paused ? (
          <div className="false">
            <PauseRounded
              id="false"
              sx={{ fontSize: "3rem" }}
              htmlColor={"white"}
              onClick={() => playAudio(false)}
            />
          </div>
        ) : (
          <div className="true">
            <PlayArrowRounded
              id="true"
              sx={{ fontSize: "3rem" }}
              htmlColor={"white"}
              onClick={() => playAudio(true)}
            />
          </div>
        )}
      </IconButton>
      <IconButton
        sx={{ color: "white" }}
        aria-label="next song"
        onClick={() => fastPass(+5)}
      >
        <FastForwardRounded fontSize="large" htmlColor={"white"} />
      </IconButton>
    </Box>
  );
};
export default MusicPlayer;
