import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import ButtonConnect from "../components/ButtonConnect";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { imageAvailable } from "../utils/functions";
import MenuItem from "@mui/material/MenuItem";
import { useAppContext } from "../context";
import Layout from "../layouts/Layout";

const optionsCategory = [
  "Cat",
  "Dog",
  "Parrot",
  "Fish",
  "Horse",
  "Cow",
  "Rabbit",
];

const optionsStatus = ["Open", "Deleted"];

const CreateCampaign = () => {
  const { createCause } = useAppContext();
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    ownerName: "",
    title: "",
    category: "",
    description: "",
    image: "",
    goal: "",
    deadline: "",
    ONGDescription: "",
    // status: "",
  });
  const [loading, setLoading] = useState(false);

  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const handleFormChange = (type, e) => {
    setFormDetails({ ...formDetails, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    imageAvailable(formDetails.image, async (isOk) => {
      if (isOk) {
        setLoading(true);
        await createCause({
          ...formDetails,
          goal: ethers.utils.parseUnits(formDetails.goal, 18), //wei value
        });
        setLoading(false);
        navigate("/home");
      } else {
        alert("Image is not available");
        setFormDetails({ ...formDetails, image: "" });
      }
    });
  };

  return (
    <Layout>
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
                  label="ONG name"
                  color="secondary"
                  sx={{
                    width: "20rem",
                  }}
                  value={formDetails.name}
                  onChange={(e) => handleFormChange("ownerName", e)}
                />
                <TextField
                  required
                  label="Campaign title"
                  color="secondary"
                  sx={{ width: "20rem" }}
                  value={formDetails.title}
                  onChange={(e) => handleFormChange("title", e)}
                />

                <TextField
                  required
                  select
                  label="Category"
                  sx={{ width: "20rem" }}
                  color="secondary"
                  defaultValue=""
                  onChange={(e) => handleFormChange("category", e)}
                >
                  {optionsCategory.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
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
                  label="Goal"
                  color="secondary"
                  type="number"
                  sx={{ width: "20rem" }}
                  inputProps={{ step: "0.1" }}
                  value={formDetails.goal}
                  onChange={(e) => handleFormChange("goal", e)}
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
                {/* <TextField
                required
                select
                label="Status"
                sx={{ width: "20rem" }}
                color="secondary"
                defaultValue=""
                onChange={(e) => handleFormChange("status", e)}
              >
                {optionsStatus.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField> */}
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
              <TextField
                required
                placeholder="ONG Presentation*"
                multiline
                rows={6}
                sx={{
                  width: "100%",
                  mt: "4rem",
                }}
                color="secondary"
                value={formDetails.ongDetails}
                onChange={(e) => handleFormChange("ONGDescription", e)}
              />

              <Box sx={{ mt: "2rem" }}>
                <ButtonConnect title="Submit" btnType="submit" />
              </Box>
            </form>
          </Box>
        </Container>
      </Container>
    </Layout>
  );
};

export default CreateCampaign;
