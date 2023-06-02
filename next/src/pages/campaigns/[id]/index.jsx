import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import CampaignDetailsImg from "../../../components/CampaignDetailsImg";
import MainLayout from "../../../layouts/MainLayout";
import { Typography } from "@mui/material";
import CampaignDetailsInfo from "../../../components/CampaignDetailsInfo";
import { useRouter } from "next/router";
import { useAppContext } from "../../../context";
import Loader from "../../../components/Loader";
import TableDonators from "../../../components/TableDonators";

const CampaignDetails = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  const { getDonators, contract, address, getCampaigns } = useAppContext();

  const fetchCampaigns = async () => {
    setLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const fetchDonators = async () => {
    const data = await getDonators(id);

    setDonators(data);
    console.log("donators", donators);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  return (
    <>
      <Head>
        <title>Campaign Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {loading && <Loader />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              ml: "8rem",
              mr: "5rem",
              mt: "3rem",
              width: "80%",
            }}
          >
            <CampaignDetailsImg />

            <CampaignDetailsInfo />
          </Box>

          <Box
            sx={{
              ml: "8rem",
              mr: "5rem",
              mt: "3rem",

              width: "80%",
            }}
          >
            <Box
              sx={{
                bgcolor: "textBg.main",
                borderRadius: "15px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ mb: "1rem", mt: "1rem" }}>
                <Typography
                  variant="h4"
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: 25 }}
                >
                  Story
                </Typography>
              </Box>
              <Box sx={{ pb: "2rem" }}>
                <Typography variant="h4" align="center" sx={{ fontSize: 18 }}>
                  {campaigns[id]?.description}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              ml: "8rem",
              mr: "5rem",
              mt: "3rem",

              width: "80%",
            }}
          >
            <Box
              sx={{
                bgcolor: "textBg.main",
                borderRadius: "15px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ mb: "1rem", mt: "1rem" }}>
                <Typography
                  variant="h4"
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: 25 }}
                >
                  Donators
                </Typography>
              </Box>
              {donators.length > 0 ? (
                <TableDonators donators={donators} />
              ) : (
                <Typography align="center" sx={{ fontSize: 18 }}>
                  No donators yet
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default CampaignDetails;
