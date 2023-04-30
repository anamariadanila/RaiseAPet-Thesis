import React from "react";
import { Box } from "@mui/material";

const BoxCount = ({ value, description }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "boxValue.main",
          width: "13rem",
          height: "9rem",
          borderRadius: "7px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "column",
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
          value
          {value}
        </Box>

        <Box
          sx={{
            bgcolor: "boxDescription.main",
            width: "13rem",
            height: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomRightRadius: "7px",
            borderBottomLeftRadius: "7px",
          }}
        >
          description
          {description}
        </Box>
      </Box>
    </>
  );
};

export default BoxCount;
