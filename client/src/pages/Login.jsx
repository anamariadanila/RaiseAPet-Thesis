import React from "react";
import { Box, TextField, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonConnect from "../components/ButtonConnect";
import LoginLayout from "../layouts/LoginRegisterLayout";
import SelectUserType from "../components/SelectUserType";

const Login = () => {
  const navigate = useNavigate();
  return (
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
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 30 }}
        >
          Login
        </Typography>
      </Box>
      <LoginLayout>
        <SelectUserType />
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 18, mt: "3rem", mb: "1rem" }}
        >
          Don't have an account? Register{" "}
          <Link href="/register" color="#fff">
            here.
          </Link>
        </Typography>
      </LoginLayout>

      <ButtonConnect
        title="Next"
        handleClick={() => {
          navigate("/create-campaign");
        }}
      />
    </Box>
  );
};

export default Login;
