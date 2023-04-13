import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "../utils/theme.js";
import { ContextProvider } from "../context";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "../styles/styles.css";

const darkTheme = createTheme(getDesignTokens("dark"));

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={ChainId.Goerli}
      authConfig={{
        authUrl: "/api/auth",
        domain: "crowdfundingong.com",
        loginRedirect: "/home",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
