import React from "react";
import loader from "../assets/loader.svg";
import { Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 10,
      }}
    >
      <img src={loader.src} alt="loader" width="100" height="100" />
      <Typography variant="h5" sx={{ fontSize: "22px" }}>
        Loading...
        <br />
        Please wait
      </Typography>
    </Box>
  );
};

export default Loader;
