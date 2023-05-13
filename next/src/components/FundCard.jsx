import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import ButtonConnect from "./ButtonConnect";

const FundCard = () => {
  return (
    <Box
      sx={{
        borderRadius: "7px",
        pt: "2rem",
        pb: "2rem",
        width: "350px",
        height: "400px",
        bgcolor: "createCampBg.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 22 }}
        >
          Donate to this campaign
        </Typography>
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <TextField
          required
          label="ETH"
          color="secondary"
          type="number"
          inputProps={{
            step: "0.01",
            min: "0",
          }}
          sx={{ width: "18rem" }}
        />
      </Box>
      <Box
        sx={{
          mt: "2rem",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: 15,
            bgcolor: "boxValue.main",
            height: "3rem",
            width: "18rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "7px",
          }}
        >
          Help this campaign because you believe in it.
        </Typography>
      </Box>
      <Box sx={{ mt: "1rem" }}>
        <ButtonConnect title="Donate" btnType="button" />
      </Box>
    </Box>
  );
};

export default FundCard;
