import { Typography, Box } from "@mui/material";
import ButtonConnect from "@/components/ButtonConnect";
import LoginLayout from "@/layouts/LoginRegisterLayout";
import SelectUserType from "@/components/SelectUserType";
import Typography from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Login</title>
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
    </>
  );
}
