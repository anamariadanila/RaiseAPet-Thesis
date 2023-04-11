import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "@/utils/theme";
import { ContextProvider } from "@/context";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const darkTheme = createTheme(getDesignTokens("dark"));

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={ChainId.Goerli}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
