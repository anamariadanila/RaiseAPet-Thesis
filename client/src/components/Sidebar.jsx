import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { useNavigate } from "react-router-dom";
import { sidebarIcons } from "../constants/index.jsx";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar
        position="static"
        sx={{
          width: "8vh",
          height: "80vh",
          ml: "5vh",
          mt: "10vh",
          mb: "5vh",
          borderRadius: "40px",
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
            {sidebarIcons.map((icon) => (
              <IconButton color="secondary" onClick={() => navigate(icon.link)}>
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
