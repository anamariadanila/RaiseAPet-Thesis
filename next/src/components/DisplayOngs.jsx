import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import loader from "../assets/loader.svg";
import { Box, Typography } from "@mui/material";
import CampaignCard from "./CampaignCard";
import { setGlobalState } from "../globalState";
import ButtonConnect from "./ButtonConnect";
import OngCard from "./OngCard";

const DisplayOngs = ({ title, loading, ongs }) => {
  const router = useRouter();

  const handleRoute = (ong) => {
    // setGlobalState("ong", ong);
    router.push(
      {
        pathname: `/ongs/${ong.id}`,
        query: { ong: ong },
      },
      `/ongs/${ong.id}`
    );
  };

  const [end, setEnd] = useState(3);
  const [group, setGroup] = useState([]);
  const [count, setCount] = useState(3);

  const getGroup = () => {
    return ongs.slice(0, end);
  };

  useEffect(() => {
    setGroup(getGroup());
  }, [end, ongs]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          justifyContent: "center",
          flexDirection: "column",
          ml: "7rem",
          mr: "7rem",
          mb: "2rem",
          width: "90%",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}
        >
          <Typography
            sx={{ fontSize: "25px", fontWeight: "bold", color: "white.main" }}
          >
            {title} ({ongs?.length})
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: "2rem",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            px: "5rem",
          }}
        >
          {loading && (
            <img src={loader.src} alt="loader" width="100" height="100" />
          )}

          {!loading && ongs?.length === 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white.main",
                }}
              >
                No ongs found
              </Typography>
            </Box>
          )}

          {!loading &&
            ongs?.length > 0 &&
            group.map((ong, i) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={ong?.id}
              >
                <OngCard {...ong} handleClick={() => handleRoute(ong)} />
              </Box>
            ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "2rem",
          }}
        >
          {ongs.length > 0 && group.length < ongs.length ? (
            <ButtonConnect
              title={"Load more"}
              btnType="button"
              handleClick={() => setEnd(end + count)}
            />
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default DisplayOngs;
