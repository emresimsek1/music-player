import * as React from "react";
import Box from "@mui/material/Box";
import {  MusicPlayerDisplay,  GridDisplay,  Controller,  TrackSlider,  VolumeControl, GridDisplayMobile, TrackSliderMobile,} from "./MusicController.style";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { useRef } from "react";
import { useSelector } from "react-redux";
import VolumeController from "../VolumeController/VolumeController";
import TrackViewer from "../TrackViewer/TrackViewer";
import ControlButtons from "../ControlButtons/ControlButtons";

const MusicPlayer = () => {
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
const store = useSelector((state) => state);
  const playerRef = useRef();

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  
  const resetPlayer = () => {
    setPosition(0);
    setPaused(false);
  };

  if (playerRef["current"] && store.music.preview_url) {
    if (playerRef.current.src !== store.music.preview_url) {
      playerRef.current.src = store.music.preview_url;
      setPaused(true);
      playerRef.current.play();
    }
  }
  const playAudio = (state) => {
    if (playerRef.current.src === store.music.preview_url) {
      if (state) {
        setPaused(true);
        playerRef.current.play();
      } else {
        setPaused(false);
        playerRef.current.pause();
      }
    } else {
      setPaused(true);
      playerRef.current.src = store.music.id ? store.music.preview_url : "";
      playerRef.current.play();
    }
  };

  const onProgress = (event) => {
    const currentTime = event.target.currentTime;
    setPosition(currentTime.toFixed(0));
  };

  const volumeValue = (newValue) => {
    playerRef.current.volume = newValue / 100;
  };

  const fastPass = (value) => {
    playerRef.current.currentTime += value;
  };
  return (
    <Box style={MusicPlayerDisplay}>
      <Grid
        container
        spacing={1}
 
        gridTemplateColumns="repeat(2, 1fr)"
        style={window.matchMedia("(max-width: 700px)").matches
        ? GridDisplayMobile:GridDisplay}
      >
        <Grid item xs={3} style={{padding:0}}>
          {store.music.id ? (
            <TrackViewer
              artistName={store.music.artists[0].name}
              trackName={store.music.name}
              trackImage={
                store.music.trackImage
                  ? store.music.trackImage
                  : store.album.albums[0].images[2].url
              }
            />
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs style={Controller}>
          <Grid item xs>
            <ControlButtons
              playAudio={playAudio}
              fastPass={fastPass}
              paused={paused}
            />
          </Grid>
          <Grid item xs style={window.matchMedia("(max-width: 700px)").matches
            ? TrackSliderMobile:TrackSlider}>
            <Grid item xs={1}>
              <h5 style={{ color: "white" }}>{formatDuration(position)}</h5>
            </Grid>
            <Grid item xs>
              <Slider
                style={{ color: "white" }}
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={30}
                onChange={(_, value) => (playerRef.current.currentTime = value)}
              />
            </Grid>
            <Grid
              item
              xs={1}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <h5 style={{ color: "white" }}>{"0:30"}</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid style={window.matchMedia("(max-width: 700px)").matches
            ? {display:"none"}:{display:"flex"}} item xs={3} sx={VolumeControl}>
          <VolumeController volumeValue={volumeValue} />
        </Grid>
      </Grid>

      <audio
        ref={playerRef}
        controls={false}
        onTimeUpdate={onProgress}
        onEnded={resetPlayer}
      ></audio>
    </Box>
  );
};
export default MusicPlayer;
