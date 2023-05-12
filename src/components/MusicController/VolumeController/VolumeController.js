import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

const VolumeController = ({volumeValue}) => {
  const [value, setValue] = React.useState(13);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    volumeValue(newValue);
  };
  return (
    <Box sx={{ width: "12rem" }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown sx={{ color: "white" }} />
        <Slider
          sx={{
            color: "white",
          }}
          aria-label="Volume"
          value={value}
          onChange={handleChange}
        />
        <VolumeUp sx={{ color: "white" }} />
      </Stack>
    </Box>
  );
};
export default VolumeController;
