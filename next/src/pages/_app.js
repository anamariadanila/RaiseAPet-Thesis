import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "../utils/theme.js";
import { ContextProvider } from "../context";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "../styles/styles.css";
import { SessionProvider } from "next-auth/react";

const darkTheme = createTheme(getDesignTokens("dark"));

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <ThirdwebProvider
        activeChain={ChainId.Goerli}
        authConfig={{
          authUrl: "/api/auth",
          domain: "crowdfundingong.com",
          loginRedirect: "/campaigns",
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </ThemeProvider>
      </ThirdwebProvider>
    </SessionProvider>
  );
}
