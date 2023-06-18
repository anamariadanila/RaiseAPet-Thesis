import * as React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const TableHome = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#3b3247" : "#ebe8f2",
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100px",
    width: "300px",
    fontSize: "1.3rem",
    fontWeight: "bold",
  }));

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
            Create Campaigns
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
            Donate ETH
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
              },
            }}
          >
            Help Souls
          </Item>
        </Stack>
      </Box>
    </>
  );
};

export default TableHome;
