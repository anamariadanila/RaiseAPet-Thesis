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
        "@media(max-width: 750px)": {
          width: "4.5rem",
          height: "6rem",
        },
        "@media(max-width: 570px)": {
          width: "4rem",
          height: "5rem",
        },
        "@media(max-width: 410px)": {
          width: "3.3rem",
          height: "5rem",
        },
        "@media(max-width: 330px)": {
          width: "2.7rem",
          height: "4.4rem",
        },
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
          sx={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            "@media(max-width: 570px)": {
              fontSize: "1.2rem",
            },
          }}
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
          "@media(max-width: 750px)": {
            width: "4.5rem",
            height: "2.7rem",
          },
          "@media(max-width: 570px)": {
            width: "4rem",
            height: "1.9rem",
          },
          "@media(max-width: 410px)": {
            width: "3.3rem",
            height: "1.9rem",
          },
          "@media(max-width: 330px)": {
            width: "2.7rem",
            height: "1.95rem",
          },
        }}
      >
        <Typography
          textAlign="center"
          sx={{
            fontWeight: "bold",
            "@media(max-width: 750px)": {
              fontSize: "0.9rem",
            },
            "@media(max-width: 570px)": {
              fontSize: "0.7rem",
            },
            "@media(max-width: 400px)": {
              fontSize: "0.6rem",
            },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BoxCount;
