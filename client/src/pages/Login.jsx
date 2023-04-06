import React from "react";
import {
  Box,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import loginImg from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import ButtonConnect from "../components/ButtonConnect";

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
          width: "30%",
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
      <Container
        sx={{
          bgcolor: "#231c34",
          m: "10rem",
          mt: "5rem",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          pt: "5rem",
          pb: "5rem",
          height: "100%",
        }}
      >
        <Box sx={{ width: "35%", mr: "3rem" }}>
          <CardMedia
            component="img"
            image={loginImg}
            sx={{ borderRadius: "50%" }}
          />
        </Box>
        <Container sx={{ bgcolor: "#887C9F", width: "60%" }}>
          <TextField>aici</TextField>
        </Container>
      </Container>
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
