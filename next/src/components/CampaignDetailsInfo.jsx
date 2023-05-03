import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Identicon from "react-identicons";

const CampaignDetailsInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        width: "70%",
        ml: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 25 }}
        >
          Title
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "80%",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 14 }}
        >
          Status
        </Typography>

        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 14 }}
        >
          Days left
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "80%",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 14 }}
        >
          <Identicon size={25} string="text" bg="white" />
          {/* la string trebuie pusa adresa pt a fi unica si a genera imagini diferite */}
          Creator
        </Typography>

        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 14 }}
        >
          Nr donatori
        </Typography>
      </Box>
      <Box>bara</Box>
    </Box>
  );
};

export default CampaignDetailsInfo;
