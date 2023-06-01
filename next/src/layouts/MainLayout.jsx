import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "20%",
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // ml: "20vh",
          ml: "7rem",
        }}
      >
        <Navbar />
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
