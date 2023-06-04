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
    totalCampaigns,
    totalDonations,
    totalDonators,
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

  return (
    <Container
      sx={{
        bgcolor: "containerBg.main",
        width: "100%",
        height: "450px",
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
          height: "100%",
        }}
      >
        <Box sx={{ width: "120%" }}>
          <OngDetailsImg />
        </Box>

        <Container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            flexDirection: "column",
            ml: "1rem",
            backgroundColor: "textBg.main",
            height: "80%",
            flexWrap: "wrap",
            borderRadius: "15px",
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
            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
              {ongs[id]?.name}
            </Typography>
          </Box>

          <Box sx={{ width: "50%" }}>
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
              <Box sx={{ mr: "1rem" }}>
                <Identicon
                  size={25}
                  string={ongs[id]?.owner.toLowerCase()}
                  bg="white"
                />
              </Box>
              <Box>
                <Typography
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: 15 }}
                >
                  {ongs[id]?.owner.toLowerCase()}
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
              }}
            >
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
                  sx={{ width: "14rem" }}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Box>
              <Box>
                {ongs[id]?.status == 0 ? (
                  <ButtonConnect
                    title="Donate"
                    btnType="button"
                    style={{
                      width: "7rem",
                      height: "3rem",
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
          }}
        >
          <BoxCount value={ongs[id]?.raised} description={"ETH raised"} />
          <BoxCount value={donators?.length} description={"Total donators"} />
        </Box>
      </Box>
    </Container>
  );
};

export default OngDetailsInfo;
