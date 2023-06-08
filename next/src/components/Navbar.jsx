import * as React from "react";
import Box from "@mui/material/Box";
import ButtonConnect from "./ButtonConnect";
import UserAvatar from "./Avatar";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { truncate } from "../utils/functions";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [ongs, setOngs] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(session, "session");
  const { address, connect, getOngsByOwner, contract } = useAppContext();

  const fetchOngs = async () => {
    if (session?.user.user.type === "ONG") {
      setLoading(true);
      const data = await getOngsByOwner(address?.toLowerCase());
      setOngs(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract) fetchOngs();
  }, [contract, address]);

  const handleClick = () => {
    if (address) {
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
              !address
                ? "Connect"
                : session?.user.user.type === "ONG"
                ? `Connected ${
                    ongs[0]?.name === undefined
                      ? truncate(address, 4, 4, 11)
                      : ongs[0]?.name
                  }`
                : `Connected ${truncate(address, 4, 4, 11)}`
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
