import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  console.log("logo", logo);
  return (
    <Box
      sx={{
        width: "7vh",
        height: "7vh",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ml: "5vh",
        ":hover": {
          background: "transparent",
        },
      }}
    >
      <IconButton onClick={() => router.push("/")}>
        <img src={logo.src} alt="logo" width="90px" height="90px" />
      </IconButton>
    </Box>
  );
};

export default Logo;
