import * as React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useAppContext } from "../context";

const TableHome = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#3b3247" : "#fff",
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100px",
    width: "300px",
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#fff",
  }));

  const { totalCampaigns, totalDonators, totalDonations } = useAppContext();

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderRightWidth: 3 }}
            />
          }
          sx={{
            "@media(max-width: 730px)": {
              display: "flex",
              flexDirection: "column",
              // width: "100%",
              // height: "100%",
              justifyContent: "center",
              alignItems: "center",
              mb: "2rem",
            },
          }}
        >
          <Item
            sx={{
              "@media(max-width: 1350px)": {
                width: "50%",
                fontSize: "1rem",
              },
              "@media(max-width: 730px)": {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                mb: "2rem",
              },
            }}
          >
            {totalCampaigns} Campaigns
          </Item>
          <Item
            sx={{
              "@media(max-width: 1350px)": {
                width: "50%",
                fontSize: "1rem",
              },
              "@media(max-width: 730px)": {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                mb: "2rem",
              },
            }}
          >
            {totalDonators} Donators
          </Item>
          <Item
            sx={{
              "@media(max-width: 1350px)": {
                width: "50%",
                fontSize: "1rem",
              },
              "@media(max-width: 730px)": {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                // mt: "2rem",
              },
            }}
          >
            {totalDonations} ETH Donated
          </Item>
        </Stack>
      </Box>
    </>
  );
};

export default TableHome;
