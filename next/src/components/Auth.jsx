import React from "react";
import { useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";
import { isJwtExpired, verifyJwtAccessToken } from "../lib/jwt";
import { signOut } from "next-auth/react";
import { useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useAppContext } from "../context/index.jsx";

const Auth = ({ children }) => {
  const disconnect = useDisconnect();
  const { address } = useAppContext();
  const router = useRouter();
  const { data: session, status } = useSession({ required: true });
  console.log(session, "session");

  if (session && session?.user?.user?.accessToken) {
    const tokenExpired = isJwtExpired(session?.user?.user?.accessToken);
    if (tokenExpired) {
      disconnect();
      signOut({
        redirect: false,
        callbackUrl: "/",
      });
      //   router.push("/");
    }
    if (address !== session?.user?.user?.address) {
      disconnect();
      signOut({
        redirect: false,
        callbackUrl: "/",
      });
    }
  }

  if (status === "loading") {
    return (
      <Box
        sx={{
          bgcolor: "textBg.main",
          height: "5rem",
          borderRadius: "15px",
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: "3rem",
          ml: "20%",
          mr: "20%",
        }}
      >
        <Typography
          align="center"
          sx={{
            fontSize: "25px",
          }}
        >
          Loading...
        </Typography>
      </Box>
    );
  }

  return children;
};

export default Auth;
