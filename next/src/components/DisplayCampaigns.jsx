import React from "react";
import { useRouter } from "next/router";
import loader from "../assets/loader.svg";
import { Box, Typography } from "@mui/material";
import CampaignCard from "./CampaignCard";
import { daysLeft } from "../utils/functions";

const DisplayCampaigns = ({ title, loading, campaigns }) => {
  const router = useRouter();
  const handleRoute = (campaign) => {
    router.push(`/campaign-details`, { state: campaign });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          justifyContent: "center",
          flexDirection: "column",
          ml: "7rem",
          mb: "2rem",
          width: "100%",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}
        >
          <Typography
            sx={{ fontSize: "25px", fontWeight: "bold", color: "white.main" }}
          >
            {title} ({campaigns.length})
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: "2rem",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {loading && (
            <img src={loader.src} alt="loader" width="100" height="100" />
          )}

          {!loading && campaigns.length === 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white.main",
                }}
              >
                No campaigns found
              </Typography>
            </Box>
          )}

          {!loading &&
            campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <Box>
                <CampaignCard
                  key={campaign.id}
                  {...campaign}
                  handleClick={() => handleRoute(campaign)}
                />
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default DisplayCampaigns;
