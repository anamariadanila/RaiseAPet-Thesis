import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import loginImg from "../assets/login.png";
import loginGeneral from "../assets/loginGeneral.png";
import loginLight from "../assets/loginLight.png";
import { useTheme } from "@mui/material/styles";

const LoginLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        bgcolor: "createCampBg.main",
        ml: "10rem",
        mr: "10rem",
        mt: "3rem",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        pt: "5rem",
        pb: "5rem",
        height: "100%",
        "@media(max-width: 600px)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        },
        "@media(max-width: 400px)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // width: "100%",
          width: "30rem",
          borderRadius: "0px",
          // pl: "2rem",
        },
      }}
    >
      <Box
        sx={{
          width: "400px",
          mr: "3rem",
          "@media(max-width: 600px)": {
            mr: "0rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          },
        }}
      >
        <CardMedia
          component="img"
          src={theme.palette.mode === "dark" ? loginImg.src : loginLight.src}
          sx={{
            borderRadius: "50%",
            "@media(max-width: 600px)": {
              width: "300px",
              mb: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // ml: "4rem",
            },
            "@media(max-width: 400px)": {
              width: "300px",
              mb: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              ml: "5rem",
            },
          }}
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
          "@media(max-width: 600px)": {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            // height: "100%",
          },
          "@media(max-width: 400px)": {
            width: "17rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mr: "3rem",
            // height: "100%",
          },
        }}
      >
        {children}
      </Container>
    </Container>
  );
};

export default LoginLayout;
