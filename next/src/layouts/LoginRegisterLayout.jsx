import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import loginImg from "../assets/login.png";

const LoginLayout = ({ children }) => {
  return (
    <Container
      sx={{
        bgcolor: "createCampBg.main",
        ml: "10rem",
        mr: "10rem",
        mt: "5rem",
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
      <Box sx={{ width: "400px", mr: "3rem" }}>
        <CardMedia
          component="img"
          src={loginImg.src}
          sx={{ borderRadius: "50%" }}
        />
      </Box>
      <Container
        sx={{
          bgcolor: "containerBg.main",
          width: "55%",
          height: "430px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "15px",
        }}
      >
        {children}
      </Container>
    </Container>
  );
};

export default LoginLayout;
