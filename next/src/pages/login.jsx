import Head from "next/head";
import { Typography, Box } from "@mui/material";
import LoginLayout from "../layouts/LoginRegisterLayout";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import UserLogin from "../components/Userlogin";
import SwitchMode from "../components/SwitchMode";
// import UserLogin from "../components/UserLogin";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
              mr: "4rem",
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
              width: "25rem",
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
                borderRadius: "15px",
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
              Welcome back
            </Typography>
            <InputAdornment position="end" fontSize="large">
              <PetsOutlinedIcon />
            </InputAdornment>
          </Box>

          <LoginLayout messageTitle={"Login"}>
            <UserLogin title={"Connect"} messageTitle={"Login"} />
          </LoginLayout>
        </Box>
      </main>
    </>
  );
}
