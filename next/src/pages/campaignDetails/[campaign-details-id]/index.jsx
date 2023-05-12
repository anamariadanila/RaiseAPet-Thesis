import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import CampaignDetailsImg from "../../../components/CampaignDetailsImg";
import MainLayout from "../../../layouts/MainLayout";
import { Typography } from "@mui/material";
import CampaignDetailsInfo from "../../../components/CampaignDetailsInfo";
import { useRouter } from "next/router";
import { useAppContext } from "../../../context";
import { ethers } from "ethers";
import { days } from "../../../utils/functions";

const CampaignDetails = () => {
  const router = useRouter();
  const { donateToCampaig, getDonators, contract, address } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  // const remainingDays = days(state.deadline);
  // console.log(remainingDays);
  console.log(router.asPath);

  const fetchDonators = async () => {
    const data = await getDonators(router.query.id);

    setDonators(data);
  };

  // useEffect(() => {
  //   if (contract) fetchDonators();
  // }, [contract, address]);

  // const handleDonate = async () => {
  //   setIsLoading(true);

  //   await donate(state.id, amount);

  //   router.push("/");
  //   setIsLoading(false);
  // };

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
          <Box sx={{ ml: "8rem", mr: "5rem", mt: "3rem", width: "80%" }}>
            <Typography
              variant="h4"
              align="left"
              sx={{ fontWeight: "bold", fontSize: 25 }}
            >
              Story
            </Typography>
            <Typography variant="h4" align="left" sx={{ fontSize: 18 }}>
              descrierea
            </Typography>
          </Box>
          <Box sx={{ ml: "8rem", mr: "5rem", mt: "3rem", width: "80%" }}>
            Tabel
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default CampaignDetails;
