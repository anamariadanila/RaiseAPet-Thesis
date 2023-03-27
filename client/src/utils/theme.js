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
            main: "#fff",
          },
          secondary: {
            main: "#bebfc2",
          },
        }),
  },
});
