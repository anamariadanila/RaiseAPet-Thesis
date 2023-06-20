import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "../utils/theme.js";
import { ContextProvider } from "../context";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "../styles/styles.css";
import { SessionProvider } from "next-auth/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { useMemo } from "react";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// const darkTheme = createTheme(getDesignTokens("light"));

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
export default function App({ Component, pageProps, session }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <SessionProvider session={session}>
      <ThirdwebProvider
        activeChain={Sepolia}
        authConfig={{
          authUrl: "/api/auth/register",
          domain: "http://localhost:3000",
          loginRedirect: "/campaigns",
        }}
      >
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ContextProvider>
              <Component {...pageProps} />
            </ContextProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </ThirdwebProvider>
    </SessionProvider>
  );
}
