import * as React from "react";
import Box from "@mui/material/Box";
import Search from "./Search";
import Filter from "./Filter";
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
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "80%",
            alignItems: "center",
          }}
        >
          <Box sx={{ ml: "2rem", mr: "2rem" }}>
            <Search />
          </Box>
          <Box sx={{ ml: "2rem", mr: "2rem" }}>
            <Filter />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "15%",
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
