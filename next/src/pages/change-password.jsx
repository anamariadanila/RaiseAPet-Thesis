import React from "react";
import Head from "next/head";
import LoginLayout from "../layouts/LoginRegisterLayout";
import { Typography, Box, IconButton } from "@mui/material";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/router";
import ForgetPassword from "../components/ForgetPassword";
import SwitchMode from "../components/SwitchMode";

function ForgotPassword() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Change Password</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            height: "1rem",
            mr: "4rem",
            mt: "1rem",
            "@media(max-width: 400px)": {
              width: "100%",
              ml: "12rem",
            },
          }}
        >
          <SwitchMode />
        </Box>
        <Box
          sx={{
            bgcolor: "textBg.main",
            height: "5rem",
            borderRadius: "15px",
            width: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "3rem",
            "@media(max-width: 800px)": {
              width: "20rem",
            },
            "@media(max-width: 400px)": {
              width: "16rem",
              ml: "4rem",
            },
          }}
        >
          <InputAdornment position="start">
            <PetsOutlinedIcon fontSize="medium" />
          </InputAdornment>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", fontSize: 30 }}
          >
            Change Password
          </Typography>
          <InputAdornment position="end" fontSize="large">
            <PetsOutlinedIcon />
          </InputAdornment>
        </Box>
        <LoginLayout messageTitle={"New password"}>
          <ForgetPassword title={"Connect"} messageTitle={"Login"} />
        </LoginLayout>
      </Box>
    </>
  );
}

export default ForgotPassword;
