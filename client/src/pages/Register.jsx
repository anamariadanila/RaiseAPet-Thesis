import React from "react";
import LoginLayout from "../layouts/LoginRegisterLayout";
import { Box, TextField, Typography, Link } from "@mui/material";

const Register = () => {
  return (
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
          bgcolor: "#3b3247",
          height: "5rem",
          borderRadius: "15px",
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "5rem",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 30 }}
        >
          Register
        </Typography>
      </Box>
      <LoginLayout>
        <TextField sx={{ mt: "2rem" }}>aici</TextField>
        <TextField sx={{ mt: "2rem" }}>aici</TextField>
        <TextField>aici</TextField>
        <TextField>aici</TextField>
      </LoginLayout>
    </Box>
  );
};

export default Register;
