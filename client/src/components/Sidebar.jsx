import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { useNavigate } from "react-router-dom";
import { sidebarIcons } from "../constants/index.jsx";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column" }}
      position="fixed"
    >
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
          mt: "1vh",
          ":hover": {
            background: "transparent",
          },
        }}
      >
        <IconButton onClick={() => navigate("/")}>
          <img src={logo} alt="logo" width="80px" height="80px" />
        </IconButton>
      </Box>
      <AppBar
        position="static"
        sx={{
          width: "7vh",
          height: "80vh",
          ml: "5vh",
          mt: "5vh",
          mb: "5vh",
          borderRadius: "10px",
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
            mt: "2vh",
            mb: "2vh",
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
            {sidebarIcons.map((icon, index) => (
              <IconButton
                color="secondary"
                onClick={() => navigate(icon.link)}
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
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
