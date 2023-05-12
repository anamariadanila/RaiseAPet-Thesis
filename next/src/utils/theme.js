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
            main: "#ae61d0",
          },
          connected: {
            main: "#f9b368",
          },
          icon: {
            main: "#D6B9ED",
          },
          error: {
            main: "#A8373A",
          },
          boxDescription: {
            main: "#341f4d",
          },
          boxValue: {
            main: "#462a67",
          },
          textBg: {
            main: "#3b3247",
          },
          containerBg: {
            main: "#887C9F",
          },
          createCampBg: {
            main: "#231c34",
          },
          white: {
            main: "#ffffff",
          },
        }),
  },
});
