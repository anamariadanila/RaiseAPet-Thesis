import React, { useState, useEffect } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useAppContext } from "../context";
import { useSession } from "next-auth/react";
import UpdateOng from "./UpdateOng";
import DeleteOngModal from "./DeleteOngModal";

const OngDetailsImg = () => {
  const [ongs, setOngs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  const router = useRouter();
  const id = router.query.id;

  const { contract, address, getOngs } = useAppContext();

  const fetchOngs = async () => {
    setLoading(true);
    const data = await getOngs();
    setOngs(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchOngs();
  }, [address, contract]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "400px", borderRadius: "15px" }}
          src={ongs[id]?.image}
        />
      </Box>
      <Box
        sx={{
          width: "25%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        {session?.user?.user?.address.toLowerCase() === ongs[id]?.owner ? (
          ongs[id]?.status !== 2 ? (
            <>
              <UpdateOng ongsSent={ongs} />
              <DeleteOngModal ongsSent={ongs} />
            </>
          ) : (
            <>
              <Box
                sx={{
                  backgroundColor: "#b3b1b5",
                  borderRadius: "30px",
                  width: "40%",
                  height: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 17,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Ong Closed
                </Typography>
              </Box>
            </>
          )
        ) : null}
      </Box>
    </Box>
  );
};

export default OngDetailsImg;
