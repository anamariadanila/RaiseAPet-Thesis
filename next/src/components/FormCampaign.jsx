import React from "react";
import { ethers } from "ethers";
import ButtonConnect from "../components/ButtonConnect";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const FormCampaign = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#3b3247",
          height: "5rem",
          borderRadius: "15px",
          width: "40%",
          mt: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 25 }}
        >
          Create a Campaign
        </Typography>
        <form action=""></form>
      </Box>
    </Container>
  );
};

export default FormCampaign;
