import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import loginImg from "../assets/login.png";

const LoginLayout = ({ children, messageTitle }) => {
  return (
    <Container
      sx={{
        bgcolor: "#231c34",
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
      <Box sx={{ width: "430px", mr: "3rem" }}>
        <CardMedia
          component="img"
          src={loginImg.src}
          sx={{ borderRadius: "50%" }}
        />
      </Box>
      <Container
        sx={{
          bgcolor: "#887C9F",
          width: "55%",
          height: "430px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Container>
    </Container>
  );
};

export default LoginLayout;
