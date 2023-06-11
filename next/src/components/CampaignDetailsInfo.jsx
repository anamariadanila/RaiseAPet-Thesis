import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Identicon from "react-identicons";
import { daysLeft, barPercentage } from "../utils/functions";
import { useAppContext } from "../context";
import Container from "@mui/material/Container";
import BoxCount from "./BoxCount";
import { useRouter } from "next/router";
import ButtonConnect from "./ButtonConnect";
import Loader from "./Loader";
import CampaignDetailsImg from "./CampaignDetailsImg";
import { truncate } from "../utils/functions";

const CampaignDetailsInfo = () => {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [donators, setDonators] = useState([]);
  const [amount, setAmount] = useState("");
  const [ongs, setOngs] = useState([]);
  const id = router.query.id;

  const expired =
    new Date().getTime() > Number(campaigns[id]?.deadline + "000");
  const remainingDays = daysLeft(campaigns[id]?.deadline);
  const {
    address,
    getDonators,
    contract,
    getCampaigns,
    donateToCampaign,
    getOngs,
  } = useAppContext();

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
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setLoading(true);
    await donateToCampaign(id, amount);
    router.push("/campaigns");
    setLoading(false);
  };

  const fetchOngs = async () => {
    setLoading(true);
    const data = await getOngs();
    console.log(data, "data");
    const val = data.map((val) => {
      if (val.owner === campaigns[id]?.owner.toLowerCase()) {
        return val.id;
      }
    });
    console.log(val, "val");
    setOngs(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchOngs();
  }, [address, contract]);

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
          // mr: "1rem",
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
          <CampaignDetailsImg />
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
              {campaigns[id]?.title}
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
            {expired ? (
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
                  Expired
                </Typography>
              </Box>
            ) : campaigns[id]?.status == 0 ? (
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
                  Open
                </Typography>
              </Box>
            ) : campaigns[id]?.status == 1 ? (
              <Box
                sx={{
                  backgroundColor: "#4ca84c",
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
                  Accepted
                </Typography>
              </Box>
            ) : campaigns[id]?.status == 2 ? (
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
                  Reverted
                </Typography>
              </Box>
            ) : campaigns[id]?.status == 3 ? (
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
            ) : (
              <Box
                sx={{
                  backgroundColor: "#e39639",
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
                  Paid
                </Typography>
              </Box>
            )}

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
                  string={campaigns[id]?.owner.toLowerCase()}
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
                  {truncate(campaigns[id]?.owner.toLowerCase(), 8, 8, 19)}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "25rem",
                height: "0.5rem",
                backgroundColor: "#b9b8ba",
                borderRadius: "30px",
                "@media(max-width: 650px)": {
                  width: "20rem",
                },
                "@media(max-width: 500px)": {
                  width: "15rem",
                },
                "@media(max-width: 400px)": {
                  width: "9rem",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#4acd8d",
                  width: `${barPercentage(
                    campaigns[id]?.cost,
                    campaigns[id]?.raised
                  )}%`,
                  maxWidth: "100%",
                  mt: "1rem",
                  height: "100%",
                  borderRadius: "30px",
                }}
              />
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
              <Box
                sx={{
                  mr: "1rem",
                  "@media(max-width: 510px)": {
                    // ml: "3rem",
                  },
                }}
              >
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
                    // "@media(max-width: 400px)": {
                    //   width: "10rem",
                    // },
                  }}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Box>
              <Box>
                {campaigns[id]?.status == 0 ? (
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
          }}
        >
          <BoxCount
            value={expired ? "0 Days" : remainingDays}
            description={expired ? "Expired" : "Days left"}
          />
          <BoxCount
            value={campaigns[id]?.raised}
            description={`Raised of ${campaigns[id]?.cost} ETH`}
          />
          <BoxCount value={donators?.length} description={"Total donators"} />
        </Box>
      </Box>
    </Container>
  );
};

export default CampaignDetailsInfo;
