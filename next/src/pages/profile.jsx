import React, { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import { useAppContext } from "../context";
import DisplayCampaigns from "../components/DisplayCampaigns";
import { useSession } from "next-auth/react";
import DisplayOngs from "../components/DisplayOngs";
import { Box } from "@mui/material";
import Loader from "../components/Loader";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [ongs, setOngs] = useState([]);
  const { data: session, status } = useSession();

  const {
    address,
    contract,
    getUserCampaigns,
    getCampaignsByDonator,
    getOngsByDonator,
    getOngsByOwner,
  } = useAppContext();

  const fetchCampaigns = async () => {
    if (session?.user.user.type === "ONG") {
      setLoading(true);
      const data = await getUserCampaigns();
      setCampaigns(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const fetchDonators = async () => {
    if (session?.user.user.type === "Donator") {
      setLoading(true);
      const data = await getCampaignsByDonator(address?.toLowerCase());
      setCampaigns(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const fetchOngs = async () => {
    if (session?.user.user.type === "ONG") {
      setLoading(true);
      const data = await getOngsByOwner(address?.toLowerCase());
      setOngs(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract) fetchOngs();
  }, [contract, address]);

  const fetchOngsDonator = async () => {
    if (session?.user.user.type === "Donator") {
      setLoading(true);
      const data = await getOngsByDonator(address?.toLowerCase());
      setOngs(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract) fetchOngsDonator();
  }, [contract, address]);

  return (
    <>
      <Head>
        <title>RaiseAPet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // justifyContent: "center",
            // mt: "4rem",
            width: "100%",
          }}
        >
          {loading && <Loader />}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "center",
              // mt: "4rem",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <DisplayOngs
              title={
                session?.user.user.type === "ONG"
                  ? "My ONG"
                  : "ONGs I donated to"
              }
              loading={loading}
              ongs={ongs}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "center",
              // mt: "4rem",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <DisplayCampaigns
              title={
                session?.user.user.type === "ONG"
                  ? "My campaigns"
                  : "Campaigns I donated to"
              }
              loading={loading}
              campaigns={campaigns}
            />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default Profile;
