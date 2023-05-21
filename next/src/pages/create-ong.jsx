import React, { useState } from "react";
import { useRouter } from "next/router";
import ButtonConnect from "../components/ButtonConnect";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { imageAvailable } from "../utils/functions";
import { useAppContext } from "../context";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";

const CreateOng = () => {
  const { createOng } = useAppContext();
  const router = useRouter();
  const [formDetails, setFormDetails] = useState({
    name: "",
    description: "",
    image: "",
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
        await createOng({
          ...formDetails,
        });
        setLoading(false);
        router.push("/");
      } else {
        alert("Image is not available");
        setFormDetails({ ...formDetails, image: "" });
      }
    });
  };

  return (
    <>
      <Head>
        <title>Create Ong</title>
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
                ONG Details
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
                    label="ONG Name"
                    color="secondary"
                    sx={{ width: "20rem" }}
                    value={formDetails.name}
                    onChange={(e) => handleFormChange("name", e)}
                  />
                </Box>
                <TextField
                  required
                  placeholder="ONG Description *"
                  multiline
                  rows={6}
                  sx={{
                    width: "100%",
                  }}
                  color="secondary"
                  value={formDetails.description}
                  onChange={(e) => handleFormChange("description", e)}
                />
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

CreateOng.auth = true;

export default CreateOng;
