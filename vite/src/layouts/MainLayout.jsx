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
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ml: "20vh",
        }}
      >
        <Navbar />
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
