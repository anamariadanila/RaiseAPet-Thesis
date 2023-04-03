export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#000000",
          },
          secondary: {
            main: "#bebfc2",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#180f2b",
          },
          secondary: {
            main: "#bebfc2",
          },
          background: {
            default: "#180f2b",
            paper: "#180f2b",
          },
          button: {
            main: "#b47afe",
          },
          connected: {
            main: "#f9b368",
          },
        }),
  },
});
