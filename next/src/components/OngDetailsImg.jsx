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
    // const newData = data.filter((ong, index) => index !== 3);
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
        justifyContent: "space-between",
        "@media(max-width: 1010px)": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "400px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "@media(max-width: 1010px)": {
              width: "100%",
              height: "250px",
              mt: "1rem",
            },
            "@media(max-width: 550px)": {
              width: "17rem",
              height: "250px",
              mt: "1rem",
              ml: "1rem",
              justifyContent: "center",
              alignItems: "center",
            },
            "@media(max-width: 430px)": {
              width: "13rem",
              height: "230px",
              mt: "1rem",
              ml: "1rem",
              justifyContent: "center",
              alignItems: "center",
            },
            "@media(max-width: 330px)": {
              width: "12rem",
              height: "200px",
              mt: "1rem",
              // ml: "1rem",
            },
            "@media(max-width: 300px)": {
              width: "10.5rem",
              height: "170px",
              mt: "1rem",
              ml: "1rem",
            },
          }}
          src={ongs[id]?.image}
        />
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          "@media(max-width: 1010px)": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          },
        }}
      >
        {session?.user?.user?.address.toLowerCase() === ongs[id]?.owner ? (
          ongs[id]?.status !== 1 ? (
            <>
              <UpdateOng ongsSent={ongs} />
              <DeleteOngModal ongsSent={ongs} />
            </>
          ) : null
        ) : null}
      </Box>
    </Box>
  );
};

export default OngDetailsImg;
