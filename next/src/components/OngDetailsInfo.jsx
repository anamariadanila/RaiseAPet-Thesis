import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Identicon from "react-identicons";
import { useAppContext } from "../context";
import Container from "@mui/material/Container";
import BoxCount from "./BoxCount";
import { useRouter } from "next/router";
import ButtonConnect from "./ButtonConnect";
import Loader from "./Loader";
import OngDetailsImg from "./OngDetailsImg";
import { truncate } from "../utils/functions";

const OngDetailsInfo = () => {
  const router = useRouter();
  const { id } = router.query;

  const [ongs, setOngs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [donators, setDonators] = useState([]);
  const [amount, setAmount] = useState("");

  const {
    address,
    contract,
    getDonatorsOng,
    getOngs,
    donateToOng,
    getCampaignsByOwner,
  } = useAppContext();

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

  const handleDonate = async () => {
    setLoading(true);
    await donateToOng(id, amount);
    router.push("/ongs");
    setLoading(false);
  };

  const handleGetCampaignsByOng = async () => {
    setLoading(true);
    await getCampaignsByOwner(ongs[id]?.owner);
    // router.push("/ongs");
    setLoading(false);
  };

  useEffect(() => {
    if (contract) handleGetCampaignsByOng();
  }, [contract, address]);

  return (
    <Container
      sx={{
        bgcolor: "containerBg.main",
        height: "450px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "15px",
        flexWrap: "wrap",
        width: "80rem",
        "@media(max-width: 1320px)": {
          height: "100%",
          width: "50rem",
        },
        "@media(max-width: 1010px)": {
          height: "100%",
          width: "40rem",
        },
        "@media(max-width: 815px)": {
          height: "100%",
          width: "30rem",
        },
        "@media(max-width: 580px)": {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ml: "1rem",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          height: "100%",
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
            width: "120%",
            "@media(max-width: 1320px)": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: "70%",
              mb: "1rem",
            },
          }}
        >
          <OngDetailsImg />
        </Box>

        <Container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            flexDirection: "column",
            backgroundColor: "textBg.main",
            height: "80%",
            flexWrap: "wrap",
            borderRadius: "15px",
            "@media(max-width: 1320px)": {
              pt: "1rem",
              pb: "1rem",
            },
          }}
        >
          {loading && <Loader />}
          <Box
            sx={{
              display: "flex",
              alignItems: "left",
              mb: "1rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                "@media(max-width: 1320px)": {
                  fontSize: "22px",
                },
                "@media(max-width: 1010px)": {
                  fontSize: "20px",
                },
              }}
            >
              {ongs[id]?.name}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
              "@media(max-width: 580px)": {
                width: "100%",
              },
            }}
          >
            {ongs[id]?.status == 0 ? (
              <Box
                sx={{
                  backgroundColor: "#a695a6",
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
                  Active
                </Typography>
              </Box>
            ) : ongs[id]?.status == 1 ? (
              <Box
                sx={{
                  backgroundColor: "#c72c2c",
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
                  Deleted
                </Typography>
              </Box>
            ) : null}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                mt: "1rem",
                width: "60%",
              }}
            >
              <Box
                sx={{
                  mr: "1rem",
                  "@media(max-width: 1200px)": {
                    mr: "0.5rem",
                  },
                  "@media(max-width: 650px)": {
                    mr: "0.3rem",
                  },
                  "@media(max-width: 500px)": {
                    mr: "0.2rem",
                  },
                }}
              >
                <Identicon
                  size={25}
                  string={ongs[id]?.owner.toLowerCase()}
                  bg="white"
                />
              </Box>
              <Box>
                <Typography
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: 15,
                    "@media(max-width: 330px)": {
                      fontSize: 12,
                    },
                  }}
                >
                  {truncate(ongs[id]?.owner.toLowerCase(), 8, 8, 19)}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                mt: "1rem",
                "@media(max-width: 510px)": {
                  width: "100%",
                  flexDirection: "column",
                },
              }}
            >
              {ongs[id]?.status == 0 ? (
                <Box sx={{ mr: "1rem" }}>
                  <TextField
                    required
                    label="ETH"
                    color="secondary"
                    type="number"
                    inputProps={{
                      step: 0.01,
                      min: 0,
                    }}
                    value={amount}
                    sx={{
                      width: "14rem",
                      "@media(max-width: 800px)": {
                        width: "12rem",
                      },
                      "@media(max-width: 360px)": {
                        width: "9rem",
                      },
                      "@media(max-width: 290px)": {
                        width: "8rem",
                      },
                    }}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Box>
              ) : null}

              <Box>
                {ongs[id]?.status == 0 ? (
                  <ButtonConnect
                    title="Donate"
                    btnType="button"
                    style={{
                      width: "7rem",
                      height: "3rem",
                      fontSize: "14px",
                    }}
                    handleClick={handleDonate}
                  />
                ) : null}
              </Box>
            </Box>
          </Box>
        </Container>

        <Box
          sx={{
            width: "35%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "90%",
            mt: "1rem",
            "@media(max-width: 1320px)": {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "80%",
            },
            "@media(max-width: 400px)": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "80%",
            },
          }}
        >
          <Box
            sx={{
              "@media(max-width: 1320px)": {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "80%",
              },
            }}
          >
            <BoxCount value={ongs[id]?.raised} description={"ETH raised"} />
            <BoxCount value={donators?.length} description={"Total donators"} />
          </Box>
          <Box
            sx={{
              "@media(max-width: 500px)": {
                mb: "1rem",
                width: "50%",
              },
            }}
          >
            <ButtonConnect
              title="Campaigns"
              btnType="button"
              style={{
                width: "7rem",
                height: "3rem",
                fontSize: "12px",
              }}
              handleClick={() => {
                router.push(
                  {
                    pathname: "/campaigns-by-ong",
                    query: { id: id, ongs: ongs[id]?.owner },
                  },
                  "/campaigns-by-ong"
                );
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OngDetailsInfo;
