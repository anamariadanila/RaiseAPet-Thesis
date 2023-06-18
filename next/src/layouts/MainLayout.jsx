import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import HamburgerMenu from "../components/HamburgerMenu";

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
        "@media(max-width: 600px)": {
          mt: "1rem",
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "relative",
          top: "0",
          ml: "85%",
          height: "100%",
          zIndex: "1",
        }}
      >
        <HamburgerMenu />
      </Box>

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
