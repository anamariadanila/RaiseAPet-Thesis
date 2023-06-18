export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#eee9f2",
          },
          secondary: {
            main: "#7C7384",
          },
          background: {
            default: "#eee9f2",
            paper: "#eee9f2",
          },
          button: {
            main: "#e0c5f5",
          },
          connected: {
            main: "#f9b368",
          },
          icon: {
            main: "#bdaae7",
          },
          error: {
            main: "#A8373A",
          },
          boxDescription: {
            main: "#c5b4d7",
          },
          boxValue: {
            main: "#462a67",
          },
          textBg: {
            main: "#cec2d8",
          },
          containerBg: {
            main: "#e5dbef",
          },
          createCampBg: {
            main: "#DCD1E7",
          },
          white: {
            main: "#ffffff",
          },
          black: {
            main: "#000000",
          },
          title: {
            main: "#000000",
          },
          iconDark: {
            main: "#3f1c54",
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
          title: {
            main: "#fff",
          },
        }),
  },
});
