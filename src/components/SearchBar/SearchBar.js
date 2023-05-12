import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const history = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && message.trim() !== "") {
      history("/search/" + message);
    }
  };

  return (
    <Grid item xs style={{ margin: "1rem 0 2rem 0" }}>
      <TextField
        fullWidth
        label="Search"
        id="fullWidth"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default Search;
