import * as React from "react";
import Box from "@mui/material/Box";
import Search from "./Search";
import Filter from "./Filter";
import Logo from "./Logo";
import ButtonConnect from "./ButtonConnect";
import UserAvatar from "./Avatar";

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
      position="static"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "60%",
            alignItems: "center",
          }}
        >
          <Search />
          <Filter />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "20%",
            alignItems: "center",
          }}
        >
          <ButtonConnect title={"Connect"} />
          <UserAvatar />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
