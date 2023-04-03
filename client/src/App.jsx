import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import { getDesignTokens } from "./utils/theme.js";

import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Campaigns from "./pages/Campaigns.jsx";
import CampaignDetails from "./pages/CampaignDetails.jsx";
import CreateCampaign from "./pages/CreateCampaign.jsx";
import Profile from "./pages/Profile.jsx";
import Chat from "./pages/Chat.jsx";
import Navbar from "./components/Navbar.jsx";
import Settings from "./pages/Settings.jsx";
import Box from "@mui/material/Box";

const darkTheme = createTheme(getDesignTokens("dark"));

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
            mt: "2vh",
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
            width: "100%",
          }}
        >
          <Navbar />
        </Box>

        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
