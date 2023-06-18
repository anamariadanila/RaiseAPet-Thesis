import * as React from "react";
import Box from "@mui/material/Box";
import ButtonConnect from "./ButtonConnect";
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
      router.push("/ongs");
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
        mt: "0.5rem",
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
            width: "100%",
            alignItems: "center",
          }}
        ></Box>

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
            style={{ fontSize: "0.8rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
