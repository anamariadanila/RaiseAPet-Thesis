import React from "react";
import LoginRegisterLayout from "../layouts/LoginRegisterLayout";
import { Box, Typography } from "@mui/material";
import SelectUserType from "../components/SelectUserType";

const Register = () => {
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
          Register
        </Typography>
      </Box>
      <LoginRegisterLayout>
        <SelectUserType
          showMessage={false}
          title={"Register"}
          ifRegister={true}
        />
      </LoginRegisterLayout>
    </Box>
  );
};

export default Register;
