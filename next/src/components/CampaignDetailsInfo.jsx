import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Identicon from "react-identicons";
import { daysLeft, barPercentage } from "../utils/functions";
import { useAppContext } from "../context";
import Container from "@mui/material/Container";
import BoxCount from "./BoxCount";
import { useRouter } from "next/router";
import FundCard from "./FundCard";
import ButtonConnect from "./ButtonConnect";

const CampaignDetailsInfo = () => {
  const router = useRouter();

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [donators, setDonators] = useState([]);
  const id = router.query.id;

  const expired =
    new Date().getTime() > Number(campaigns[id]?.deadline + "000");
  const remainingDays = daysLeft(campaigns[id]?.deadline);
  const { address, getDonators, contract, getCampaigns } = useAppContext();

  const fetchCampaigns = async () => {
    setLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setLoading(false);
  };

  console.log("campaigns", campaigns);

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
    <Container
      sx={{
        bgcolor: "containerBg.main",
        width: "60%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "15px",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Container
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            flexDirection: "column",
            ml: "1rem",
            backgroundColor: "textBg.main",
            height: "80%",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "left",
              mb: "1rem",
            }}
          >
            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
              {campaigns[id]?.title}
            </Typography>
          </Box>

          <Box sx={{ width: "50%" }}>
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
              <Box sx={{ mr: "1rem" }}>
                <Identicon size={25} string={address} bg="white" />
              </Box>
              <Box>
                <Typography
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: 15 }}
                >
                  {address?.toLowerCase()}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#4acd8d",
                width: `${barPercentage(
                  campaigns[id]?.cost,
                  campaigns[id]?.raised
                )}%`,
                maxWidth: "100%",
                mt: "1rem",
              }}
            >
              bara
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                mt: "1rem",
              }}
            >
              <Box sx={{ mr: "1rem" }}>
                <TextField
                  required
                  label="ETH"
                  color="secondary"
                  type="number"
                  inputProps={{
                    step: "0.01",
                    min: "0",
                  }}
                  sx={{ width: "14rem" }}
                />
              </Box>
              <Box sx={{}}>
                <ButtonConnect
                  title="Donate"
                  btnType="button"
                  style={{
                    width: "7rem",
                    height: "3rem",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>

        <Box
          sx={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <BoxCount value={remainingDays} description={"Days left"} />
          <BoxCount
            value={campaigns[id]?.raised}
            description={`Raised of ${campaigns[id]?.cost} ETH`}
          />
          <BoxCount value={donators} description={"Total donators"} />
        </Box>
      </Box>
    </Container>
    // <Container
    //   sx={{
    //     bgcolor: "containerBg.main",
    //     width: "60%",
    //     height: "400px",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexDirection: "column",
    //     borderRadius: "15px",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "flex-start",
    //       flexDirection: "column",
    //       width: "80%",
    //       ml: "4rem",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         flexDirection: "column",
    //       }}
    //     >
    //       <Typography
    //         variant="h4"
    //         align="center"
    //         sx={{ fontWeight: "bold", fontSize: 25 }}
    //       >
    //         {campaign.title}
    //       </Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         flexDirection: "row",
    //         width: "70%",
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "flex-start",
    //           flexDirection: "column",
    //           width: "70%",
    //           mt: "1rem",
    //         }}
    //       >

    //       </Box>

    //       <Typography
    //         variant="h4"
    //         align="center"
    //         sx={{ fontWeight: "bold", fontSize: 14 }}
    //       >
    //         {remainingDays} Days left
    //       </Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         flexDirection: "row",
    //         width: "80%",
    //       }}
    //     >
    //       <Typography
    //         variant="h4"
    //         align="center"
    //         sx={{ fontWeight: "bold", fontSize: 14 }}
    //       >
    //         <Identicon size={25} string={address} bg="white" />
    //         {/* la string trebuie pusa adresa pt a fi unica si a genera imagini diferite */}
    //         {address}
    //       </Typography>

    //       <Typography
    //         variant="h4"
    //         align="center"
    //         sx={{ fontWeight: "bold", fontSize: 14 }}
    //       >
    //         {campaign.donators} Donators
    //       </Typography>
    //     </Box>
    //     <Box>bara</Box>
    //   </Box>
    // </Container>
  );
};

export default CampaignDetailsInfo;
