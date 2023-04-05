import React from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import loginImg from "../assets/login.png";

const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <CardMedia
          component="img"
          image={loginImg}
          sx={{ borderRadius: "50%" }}
        />
      </Box>
    </Box>
  );
};

export default Login;
