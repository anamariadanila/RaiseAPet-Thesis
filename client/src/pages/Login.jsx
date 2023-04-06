import React from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import loginImg from "../assets/login.png";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          bgcolor: "#231c34",
          m: "10rem",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          pt: "5rem",
          pb: "5rem",
          height: "100%",
        }}
      >
        <Box sx={{ width: "35%", mr: "3rem" }}>
          <CardMedia
            component="img"
            image={loginImg}
            sx={{ borderRadius: "50%" }}
          />
        </Box>
        <Container sx={{ bgcolor: "#887C9F", width: "60%" }}>
          <TextField>aici</TextField>
        </Container>
      </Container>
    </Box>
  );
};

export default Login;
