import React from "react";
import { useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";

const Auth = ({ children }) => {
  const { data: session, status } = useSession({ required: true });
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
