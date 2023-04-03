import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import ButtonConnect from "../components/ButtonConnect";
import { imageAvailable } from "../utils/functions";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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

  return (
    <Container>
      <Box sx={{ bgcolor: "#231c34", height: "60rem", mt: "5vh", mb: "2vh" }} />
    </Container>
  );
};

export default CreateCampaign;
