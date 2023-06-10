import React, { useState, useEffect } from "react";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useAppContext } from "../context";
import { useSession } from "next-auth/react";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import DeleteModal from "./DeleteModal";
import UpdateCampaign from "./UpdateCampaign";

const CampaignDetailsImg = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  const router = useRouter();
  const id = router.query.id;

  const { contract, address, getCampaigns, payoutCampaign } = useAppContext();

  const fetchCampaigns = async () => {
    setLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const handlePayout = async () => {
    await payoutCampaign(campaigns[id]?.id.toString());
    router.push("/campaigns");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        "@media(max-width: 1010px)": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "400px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "@media(max-width: 1010px)": {
              width: "100%",
              height: "250px",
              mt: "1rem",
            },
            "@media(max-width: 550px)": {
              width: "17rem",
              height: "250px",
              mt: "1rem",
              ml: "1rem",
              justifyContent: "center",
              alignItems: "center",
            },
            "@media(max-width: 430px)": {
              width: "13rem",
              height: "230px",
              mt: "1rem",
              ml: "1rem",
              justifyContent: "center",
              alignItems: "center",
            },
            "@media(max-width: 330px)": {
              width: "12rem",
              height: "200px",
              mt: "1rem",
              // ml: "1rem",
            },
            "@media(max-width: 300px)": {
              width: "10.5rem",
              height: "170px",
              mt: "1rem",
              ml: "1rem",
            },
          }}
          src={campaigns[id]?.image}
        />
      </Box>

      <Box
        sx={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          "@media(max-width: 1010px)": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          },
        }}
      >
        {session?.user?.user?.address.toLowerCase() === campaigns[id]?.owner ? (
          campaigns[id]?.status !== 3 ? (
            campaigns[id]?.status === 1 ? (
              <IconButton color="secondary" onClick={handlePayout}>
                <PaymentsOutlinedIcon
                  sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
                />
              </IconButton>
            ) : campaigns[id]?.status !== 4 ? (
              <>
                <UpdateCampaign campaignsSent={campaigns} />
                <DeleteModal campaignsSent={campaigns} />
              </>
            ) : (
              <>
                <Box
                  sx={{
                    backgroundColor: "#b3b1b5",
                    borderRadius: "30px",
                    width: "40%",
                    height: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 17,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Campaign Closed
                  </Typography>
                </Box>
              </>
            )
          ) : null
        ) : null}
      </Box>
    </Box>
  );
};

export default CampaignDetailsImg;
