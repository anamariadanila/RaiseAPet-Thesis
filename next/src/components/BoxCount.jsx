import React from "react";
import { Box, Typography } from "@mui/material";

const BoxCount = ({ value, description }) => {
  return (
    <Box
      sx={{
        bgcolor: "createCampBg.main",
        width: "6rem",
        height: "7rem",
        borderRadius: "7px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        mb: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "60%",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ fontWeight: "bold", fontSize: "24px" }}
        >
          {value}
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "boxDescription.main",
          width: "6rem",
          height: "2.7rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottomRightRadius: "7px",
          borderBottomLeftRadius: "7px",
        }}
      >
        <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BoxCount;
