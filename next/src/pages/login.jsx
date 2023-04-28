import Head from "next/head";
import { Typography, Box } from "@mui/material";
import ButtonConnect from "../components/ButtonConnect";
import LoginLayout from "../layouts/LoginRegisterLayout";
import SelectUserType from "../components/SelectUserType";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Crowdfunding</title>
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
            <InputAdornment position="start">
              <PetsOutlinedIcon fontSize="medium" />
            </InputAdornment>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", fontSize: 30 }}
            >
              Welcome
            </Typography>
            <InputAdornment position="end" fontSize="large">
              <PetsOutlinedIcon />
            </InputAdornment>
          </Box>
          <LoginLayout messageTitle={"Login"}>
            <SelectUserType
              showMessage={true}
              title={"Connect"}
              ifRegister={false}
              messageTitle={"Login"}
            />
          </LoginLayout>

          <ButtonConnect
            title="Next"
            handleClick={() => {
              router.push("/create-cause");
            }}
          />
          <ButtonConnect
            title="Register"
            handleClick={() => {
              router.push("/register");
            }}
          />
        </Box>
      </main>
    </>
  );
}
