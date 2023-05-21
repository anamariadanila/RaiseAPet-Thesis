import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "../utils/theme.js";
import { ContextProvider } from "../context";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "../styles/styles.css";
import { SessionProvider } from "next-auth/react";
import Auth from "../components/Auth.jsx";

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
          authUrl: "/api/auth/register",
          domain: "http://localhost:3000",
          loginRedirect: "/campaigns",
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ContextProvider>
            {/* {Component.auth ? (
              <Auth>
                {" "}
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )} */}
            <Component {...pageProps} />
          </ContextProvider>
        </ThemeProvider>
      </ThirdwebProvider>
    </SessionProvider>
  );
}
