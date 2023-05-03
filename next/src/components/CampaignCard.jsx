import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import cat2 from "../assets/cat2.jpeg";
import Identicons from "react-identicons";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const CampaignCard = () => {
  return (
    <Box sx={{ ml: "7rem" }}>
      <Card sx={{ maxWidth: 300, maxHeight: 500, borderRadius: "1rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            src={cat2.src}
            sx={{ borderRadius: "1rem" }}
          />
          <CardContent>
            <Typography
              sx={{ fontSize: 14, mb: "0.3rem" }}
              color="secondary.main"
            >
              Status
            </Typography>
            <Typography variant="h5" sx={{ fontSize: 23, mb: "0.3rem" }}>
              Help cat
            </Typography>
            <Typography
              sx={{ fontSize: 14, mb: "0.3rem" }}
              color="secondary.main"
            >
              Description
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
                  sx={{
                    fontSize: 18,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    fontWeight: "bold",
                  }}
                  color="secondary.main"
                >
                  2 ETH
                </Typography>
                <Typography
                  sx={{ fontSize: 15, mb: "0.3rem" }}
                  color="secondary.main"
                >
                  Raised of total
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: 18,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    fontWeight: "bold",
                  }}
                  color="secondary.main"
                >
                  16
                </Typography>
                <Typography
                  sx={{ fontSize: 15, mb: "0.3rem" }}
                  color="secondary.main"
                >
                  Days left
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
                  string="0x7aF963cEcB3E3E3Aa9EaBdA8F6D3DcCf7b1aFf4a"
                  bg="#D9D9D9"
                  style={{ borderRadius: "20rem" }}
                />
                <Typography
                  sx={{ fontSize: 16, ml: "0.5rem" }}
                  color="secondary.main"
                >
                  by 0x7...Ff4a
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CampaignCard;
