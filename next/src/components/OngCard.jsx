import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Identicons from "react-identicons";
import { truncate } from "../utils/functions";

const OngCard = ({
  owner,
  name,
  description,
  timestamp,
  raised,
  image,
  status,
  handleClick,
}) => {
  return (
    <Box sx={{ mt: "2rem" }}>
      <Card
        sx={{ maxWidth: 300, maxHeight: 500, borderRadius: "1rem" }}
        onClick={handleClick}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            src={image}
            sx={{ borderRadius: "1rem" }}
          />
          <CardContent>
            {status == 0 ? (
              <Box
                sx={{
                  backgroundColor: "#a695a6",
                  borderRadius: "30px",
                  width: "30%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 15,
                    mb: "0.3rem",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Active
                </Typography>
              </Box>
            ) : status == 1 ? (
              <Box
                sx={{
                  backgroundColor: "#c72c2c",
                  borderRadius: "30px",
                  width: "30%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 15,
                    mb: "0.3rem",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Deleted
                </Typography>
              </Box>
            ) : null}

            <Typography
              sx={{ fontSize: 21, mb: "0.3rem", fontWeight: "bold" }}
              noWrap
            >
              {name}
            </Typography>
            <Typography
              sx={{ fontSize: 16, mb: "0.3rem" }}
              color="secondary.main"
              noWrap
            >
              {description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: 15, mb: "0.3rem" }}
                  color="secondary.main"
                >
                  {raised} ETH raised
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  fontSize: 18,
                  mb: "0.3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Identicons
                  size={30}
                  string={owner}
                  bg="#D9D9D9"
                  style={{ borderRadius: "20rem" }}
                />
                <Typography
                  sx={{ fontSize: 16, ml: "0.5rem" }}
                  color="secondary.main"
                >
                  by {truncate(owner, 4, 4, 11)}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default OngCard;
