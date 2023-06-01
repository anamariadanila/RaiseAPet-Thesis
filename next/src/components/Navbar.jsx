import * as React from "react";
import Box from "@mui/material/Box";
import Search from "./Search";
import ButtonConnect from "./ButtonConnect";
import UserAvatar from "./Avatar";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { truncate } from "../utils/functions";

const Navbar = () => {
  const router = useRouter();
  const { address, connect } = useAppContext();
  const handleClick = () => {
    if (address) {
      router.push("/create-campaign");
    } else {
      connect();
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mt: "1rem",
        width: "100%",
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
            // justifyContent: "center",
            width: "80%",
            alignItems: "center",
          }}
        >
          {/* <Box>
            <Search />
          </Box> */}
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
            title={
              !address ? "Connect" : `Connected ${truncate(address, 4, 4, 11)}`
            }
            handleClick={handleClick}
          />
          <UserAvatar />
        </Box>
      </Box>
    </Box>
  );
};
//TODO: Hamburger menu
export default Navbar;
