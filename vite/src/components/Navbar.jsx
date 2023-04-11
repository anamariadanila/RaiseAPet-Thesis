import * as React from "react";
import Box from "@mui/material/Box";
import Search from "./Search";
import Filter from "./Filter";
import ButtonConnect from "./ButtonConnect";
import UserAvatar from "./Avatar";
import { useAppContext } from "../context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { address, connectWallet } = useAppContext();
  const handleClick = () => {
    if (address) {
      navigate("/create-campaign");
    } else {
      connectWallet();
    }
  };
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
          <ButtonConnect
            title={!address ? "Connect" : "Create Campaign"}
            btnType="button"
            handleClick={handleClick}
          />
          <UserAvatar />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
