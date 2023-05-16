import React, { useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import ButtonConnect from "../components/ButtonConnect";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { imageAvailable, isFutureDate } from "../utils/functions";
import { useAppContext } from "../context";
import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
import Loader from "../components/Loader";

const CreateCampaign = () => {
  const { createCampaign } = useAppContext();
  const router = useRouter();
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    image: "",
    cost: "",
    deadline: "",
  });

  const [loading, setLoading] = useState(false);

  const handleFormChange = (type, e) => {
    setFormDetails({ ...formDetails, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    imageAvailable(formDetails.image, async (isOk) => {
      if (isOk) {
        setLoading(true);
        await createCampaign({
          ...formDetails,
          cost: ethers.utils.parseUnits(formDetails.cost, 18), //wei value
        });
        setLoading(false);
        router.push("/campaigns");
      } else {
        alert("Image is not available");
        setFormDetails({ ...formDetails, image: "" });
      }
    });

    isFutureDate(formDetails.deadline, async (isOk) => {
      if (isOk) {
        setLoading(true);
        await createCampaign({
          ...formDetails,
          cost: ethers.utils.parseUnits(formDetails.cost, 18), //wei value
        });
        setLoading(false);
        router.push("/campaigns");
      } else {
        alert("Date is not available");
        setFormDetails({ ...formDetails, deadline: "" });
      }
    });
  };

  return (
    <>
      <Head>
        <title>Create Campaign</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container
          sx={{
            bgcolor: "createCampBg.main",
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
            flexWrap: "wrap",
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {loading && <Loader />}
            </Box>
            <Box
              sx={{
                bgcolor: "textBg.main",
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
                    justifyContent: "space-around",
                    alignItems: "center",
                    mt: "5rem",
                    mr: "6rem",
                    mb: "4rem",
                    flexDirection: "row",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <TextField
                    required
                    label="Campaign title"
                    color="secondary"
                    sx={{ width: "20rem" }}
                    value={formDetails.title}
                    onChange={(e) => handleFormChange("title", e)}
                  />
                </Box>
                <TextField
                  required
                  placeholder="Campaign Description *"
                  multiline
                  rows={6}
                  sx={{
                    width: "100%",
                  }}
                  color="secondary"
                  value={formDetails.description}
                  onChange={(e) => handleFormChange("description", e)}
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
                    flexWrap: "wrap",
                  }}
                >
                  <TextField
                    required
                    label="Cost"
                    color="secondary"
                    type="number"
                    sx={{ width: "20rem" }}
                    inputProps={{ step: "0.01", min: "0" }}
                    value={formDetails.cost}
                    onChange={(e) => handleFormChange("cost", e)}
                  />
                  <TextField
                    required
                    color="secondary"
                    type="date"
                    sx={{
                      width: "20rem",
                      "& input": { color: "secondary.main" },
                    }}
                    value={formDetails.deadline}
                    onChange={(e) => handleFormChange("deadline", e)}
                  />
                </Box>
                <Box sx={{ mt: "4rem", color: "secondary.main" }}>
                  <label htmlFor="imgUrl">Image URL*</label>
                  <TextField
                    id="imgUrl"
                    type="url"
                    placeholder="Image URL*"
                    sx={{
                      width: "100%",
                    }}
                    color="secondary"
                    value={formDetails.image}
                    onChange={(e) => handleFormChange("image", e)}
                  />
                </Box>
                <Box sx={{ mt: "2rem" }}>
                  <ButtonConnect title="Submit" btnType="submit" />
                </Box>
              </form>
            </Box>
          </Container>
        </Container>
      </MainLayout>
    </>
  );
};

export default CreateCampaign;
