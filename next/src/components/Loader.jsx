import React from "react";
import loader from "../assets/loader.svg";
import { Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "space-around",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 10,
        backgroundColor: "rgba(0,0,0.1,0.3)",
        width: "100%",
        height: "100%",
        position: "fixed",
        inset: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyItems: "space-around",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={loader.src} alt="loader" width="100" height="100" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "22px" }} align="center">
            Loading...
            <br />
            Please wait
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
