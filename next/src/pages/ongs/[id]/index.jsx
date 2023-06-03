import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import MainLayout from "../../../layouts/MainLayout";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useAppContext } from "../../../context";
import Loader from "../../../components/Loader";
import TableDonatorsOng from "../../../components/TableDonatorsOng";
import OngDetailsImg from "../../../components/OngDetailsImg";
import OngDetailsInfo from "../../../components/OngDetailsInfo";

const OngDetails = () => {
  const [loading, setLoading] = useState(false);
  const [donators, setDonators] = useState([]);
  const [ongs, setOngs] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  const { getDonatorsOng, contract, address, getOngs } = useAppContext();

  const fetchOngs = async () => {
    setLoading(true);
    const data = await getOngs();
    setOngs(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchOngs();
  }, [address, contract]);

  const fetchDonators = async () => {
    const data = await getDonatorsOng(id);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  return (
    <>
      <Head>
        <title>Ong Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Container sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mb: "3rem",
            }}
          >
            {loading && <Loader />}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                mt: "1rem",
                width: "100%",
              }}
            >
              <OngDetailsInfo />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: "3rem",
              }}
            >
              <Box
                sx={{
                  bgcolor: "textBg.main",
                  borderRadius: "15px",
                  width: "450px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mr: "2rem",
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
                    {ongs[id]?.description}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  bgcolor: "textBg.main",
                  borderRadius: "15px",
                  width: "850px",
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
                  <TableDonatorsOng donators={donators} />
                ) : (
                  <Typography align="center" sx={{ fontSize: 18 }}>
                    No donators yet
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </MainLayout>
    </>
  );
};

export default OngDetails;
