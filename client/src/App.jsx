import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import { getDesignTokens } from "./utils/theme.js";

import Sidebar from "./components/Sidebar.jsx";

const darkTheme = createTheme(getDesignTokens("dark"));

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/campaign-details/:id"
          element={<h1>Campaigns details</h1>}
        />
        <Route path="/campaigns" element={<h1>Campaigns</h1>} />
        <Route path="/create-campaign" element={<h1>create campaign</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/chat" element={<h1>Chat</h1>} />
      </Routes>
      <Sidebar />
    </ThemeProvider>
  );
};

export default App;
