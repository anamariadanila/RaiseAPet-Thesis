import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
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
        // mt: "2vh",
        ":hover": {
          background: "transparent",
        },
      }}
    >
      <IconButton onClick={() => navigate("/")}>
        <img src={logo} alt="logo" width="80px" height="80px" />
      </IconButton>
    </Box>
  );
};

export default Logo;
