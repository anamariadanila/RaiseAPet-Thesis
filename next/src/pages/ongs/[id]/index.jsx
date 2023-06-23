import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import MainLayout from "../../../layouts/MainLayout";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useAppContext } from "../../../context";
import Loader from "../../../components/Loader";
import TableDonatorsOng from "../../../components/TableDonatorsOng";
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
        <title>RaiseAPet</title>
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
                "@media(max-width: 1320px)": {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },
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
                  "@media(max-width: 1320px)": {
                    width: "50rem",
                    mr: "0rem",
                    mb: "2rem",
                  },
                  "@media(max-width: 1010px)": {
                    mr: "0rem",
                    mb: "2rem",
                    width: "40rem",
                  },
                  "@media(max-width: 815px)": {
                    width: "30rem",
                    mr: "0rem",
                    mb: "2rem",
                  },
                  "@media(max-width: 580px)": {
                    width: "100%",
                    mr: "0rem",
                    mb: "2rem",
                    ml: "1rem",
                  },
                }}
              >
                <Box sx={{ mb: "1rem", mt: "1rem" }}>
                  <Typography
                    variant="h4"
                    align="left"
                    sx={{
                      fontWeight: "bold",
                      fontSize: 25,
                      "@media(max-width: 1320px)": {
                        fontSize: "22px",
                      },
                      "@media(max-width: 1010px)": {
                        fontSize: "20px",
                      },
                    }}
                  >
                    Story
                  </Typography>
                </Box>
                <Box sx={{ pb: "2rem", pl: "0.8rem", pr: "0.8rem" }}>
                  <Typography
                    variant="h4"
                    align="center"
                    sx={{
                      fontSize: 18,
                      "@media(max-width: 815px)": {
                        fontSize: "16px",
                      },
                    }}
                  >
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
                  "@media(max-width: 1320px)": {
                    width: "50rem",
                  },
                  "@media(max-width: 1010px)": {
                    width: "40rem",
                  },
                  "@media(max-width: 815px)": {
                    width: "30rem",
                  },
                  "@media(max-width: 580px)": {
                    width: "100%",
                  },
                }}
              >
                <Box sx={{ mb: "1rem", mt: "1rem" }}>
                  <Typography
                    variant="h4"
                    align="left"
                    sx={{
                      fontWeight: "bold",
                      fontSize: 25,
                      "@media(max-width: 1320px)": {
                        fontSize: "22px",
                      },
                      "@media(max-width: 1010px)": {
                        fontSize: "20px",
                      },
                    }}
                  >
                    Donators
                  </Typography>
                </Box>

                {donators.length > 0 ? (
                  <TableDonatorsOng donators={donators} />
                ) : (
                  <Typography
                    align="center"
                    sx={{
                      fontSize: 18,
                      pb: "0.8rem",
                      "@media(max-width: 815px)": {
                        fontSize: "16px",
                      },
                    }}
                  >
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
