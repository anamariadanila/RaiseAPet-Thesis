import React from "react";
import { Box, CardMedia } from "@mui/material";
import cat from "../assets/cat.jpeg";
import cat2 from "../assets/cat2.jpeg";

const CampaignDetailsImg = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        src={cat2.src}
        sx={{ width: "450px", height: "400px", borderRadius: "15px" }}
      />
    </Box>
  );
};

export default CampaignDetailsImg;
