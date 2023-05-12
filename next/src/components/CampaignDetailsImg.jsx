import React from "react";
import { Box, CardMedia } from "@mui/material";

const CampaignDetailsImg = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        sx={{ width: "450px", height: "400px", borderRadius: "15px" }}
      />
    </Box>
  );
};

export default CampaignDetailsImg;
