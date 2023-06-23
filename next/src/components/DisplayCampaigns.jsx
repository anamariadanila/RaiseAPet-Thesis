import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import loader from "../assets/loader.svg";
import { Box, Typography } from "@mui/material";
import CampaignCard from "./CampaignCard";
import ButtonConnect from "./ButtonConnect";
import Search from "./Search";

const DisplayCampaigns = ({ title, loading, campaigns }) => {
  const router = useRouter();

  const handleRoute = (campaign) => {
    router.push(
      {
        pathname: `/campaigns/${campaign.id}`,
        query: { campaign: campaign },
      },
      `/campaigns/${campaign.id}`
    );
  };

  const [end, setEnd] = useState(3);
  const [group, setGroup] = useState([]);
  const [count, setCount] = useState(3);

  const getGroup = () => {
    return campaigns?.slice(0, end);
  };

  useEffect(() => {
    setGroup(getGroup());
  }, [end, campaigns]);

  const campaignsTitle = campaigns?.map((campaign) => campaign.title);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          justifyContent: "center",
          flexDirection: "column",
          ml: "7rem",
          mr: "7rem",
          mb: "2rem",
          width: "90%",
          "@media(max-width: 600px)": {
            ml: "2rem",
            mr: "2rem",
            mb: "2rem",
          },
        }}
      >
        {/* <Search data={campaignsTitle} campaigns={campaigns} /> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <Typography
            sx={{ fontSize: "25px", fontWeight: "bold", color: "title.main" }}
          >
            {title} ({campaigns?.length})
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: "2rem",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            px: "5rem",
          }}
        >
          {/* {loading && (
            <img src={loader.src} alt="loader" width="100" height="100" />
          )} */}

          {!loading && campaigns?.length === 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "title.main",
                }}
              >
                No campaigns found
              </Typography>
            </Box>
          )}

          {!loading &&
            campaigns?.length > 0 &&
            group.map((campaign, i) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={campaign?.id}
              >
                <CampaignCard
                  {...campaign}
                  handleClick={() => handleRoute(campaign)}
                />
              </Box>
            ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "2rem",
          }}
        >
          {campaigns?.length > 0 && group.length < campaigns.length ? (
            <ButtonConnect
              title={"Load more"}
              btnType="button"
              handleClick={() => setEnd(end + count)}
            />
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default DisplayCampaigns;
