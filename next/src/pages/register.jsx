import React from "react";
import LoginLayout from "../layouts/LoginRegisterLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelectUserType from "../components/SelectUserType";
import Head from "next/head";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import InputAdornment from "@mui/material/InputAdornment";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            bgcolor: "textBg.main",
            height: "5rem",
            borderRadius: "15px",
            width: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "3rem",
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
            Create account
          </Typography>
          <InputAdornment position="end">
            <PetsOutlinedIcon fontSize="medium" />
          </InputAdornment>
        </Box>
        <LoginLayout>
          <SelectUserType
            showMessage={false}
            title={"Register"}
            ifRegister={true}
            messageTitle={"Register"}
          />
        </LoginLayout>
      </Box>
    </>
  );
};

export default Register;
