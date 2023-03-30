import * as React from "react";
import Box from "@mui/material/Box";
import Search from "./Search";
import Filter from "./Filter";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mt: "2vh",
      }}
    >
      <Box>
        <Logo />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          p: "0 3vh",
        }}
      >
        <Search />
        <Filter />
      </Box>
    </Box>
  );
};

export default Navbar;
