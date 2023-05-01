import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";

import { useRouter } from "next/router";
import { sidebarIcons } from "../constants/index.jsx";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const router = useRouter();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      position="fixed"
    >
      <AppBar
        position="static"
        sx={{
          width: "4.5rem",
          height: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            mt: "1.5rem",
            mb: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <IconButton onClick={() => router.push("/")}>
              <img src={logo.src} alt="logo" width="80px" height="80px" />
            </IconButton>
            {sidebarIcons.map((icon, index) => (
              <IconButton
                color="secondary"
                onClick={() => router.push(icon.link)}
                key={index}
              >
                {icon.icon}
              </IconButton>
            ))}
          </Box>
          <Box>
            <IconButton color="secondary" aria-label="dashboard">
              <Brightness5OutlinedIcon
                sx={{
                  fontSize: "2rem",
                  m: "0.5rem",
                  color: "icon.main",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
