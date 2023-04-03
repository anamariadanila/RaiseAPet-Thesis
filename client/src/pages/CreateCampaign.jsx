import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import ButtonConnect from "../components/ButtonConnect";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { imageAvailable } from "../utils/functions";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    image: "",
    goal: "",
    deadline: "",
    name: "",
    ong: "",
    status: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {};

  return (
    <Container
      sx={{
        bgcolor: "#231c34",
        mt: "5vh",
        mb: "2vh",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        pt: "2rem",
        pb: "2rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            bgcolor: "#3b3247",
            height: "5rem",
            borderRadius: "15px",
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", fontSize: 25 }}
          >
            Create a Campaign
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "4rem",
                mr: "6rem",
                mb: "4rem",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="ONG name"
                color="secondary"
                sx={{
                  width: "20rem",
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Campaign title"
                color="secondary"
                sx={{ width: "20rem" }}
              />
              <TextField
                required
                id="outlined-required"
                label="Category"
                color="secondary"
                sx={{ width: "20rem" }}
              />
            </Box>
            <TextField
              placeholder="Campaign Description"
              multiline
              rows={6}
              maxRows={20}
              sx={{
                width: "100%",
              }}
              color="secondary"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "4rem",
                mr: "6rem",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="ONG name"
                color="secondary"
                sx={{ width: "20rem" }}
              />
              <TextField
                required
                id="outlined-required"
                label="Campaign title"
                color="secondary"
                sx={{ width: "20rem" }}
              />
              <TextField
                required
                id="outlined-required"
                label="Category"
                color="secondary"
                sx={{ width: "20rem" }}
              />
            </Box>
            <TextField
              placeholder="Campaign Description"
              sx={{
                width: "100%",
                mt: "4rem",
              }}
              color="secondary"
            />
            <TextField
              placeholder="ONG Presentation"
              multiline
              rows={6}
              maxRows={20}
              sx={{
                width: "100%",
                mt: "4rem",
              }}
              color="secondary"
            />
            <Box sx={{ mt: "2rem" }}>
              <ButtonConnect title={"Submit"} />
            </Box>
          </form>
        </Box>
      </Container>
    </Container>
  );
};

export default CreateCampaign;
