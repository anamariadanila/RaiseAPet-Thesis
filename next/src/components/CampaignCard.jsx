import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Identicons from "react-identicons";
import { daysLeft } from "../utils/functions";
import { truncate } from "../utils/functions";
import theme from "../utils/theme";

const CampaignCard = ({
  owner,
  title,
  description,
  timestamp,
  deadline,
  image,
  raised,
  cost,
  status,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);
  const dateTime = new Date(timestamp * 1000);
  const timeFormatted = dateTime.toLocaleTimeString("en-GB");
  const dateFormatted = dateTime.toLocaleDateString("en-GB");

  const expired = new Date().getTime() > Number(deadline + "000");

  return (
    <Box sx={{ mt: "2rem" }}>
      <Card
        sx={{
          maxWidth: 300,
          maxHeight: 500,
          borderRadius: "1rem",
          // backgroundColor: theme === "dark" ? "#1f1f1f" : "#1f1f1f",
        }}
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
            {expired ? (
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
                  Expired
                </Typography>
              </Box>
            ) : status == 0 ? (
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
                  Open
                </Typography>
              </Box>
            ) : status == 1 ? (
              <Box
                sx={{
                  backgroundColor: "#4ca84c",
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
                  Accepted
                </Typography>
              </Box>
            ) : status == 2 ? (
              <Box
                sx={{
                  backgroundColor: "#b3b1b5",
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
                  Reverted
                </Typography>
              </Box>
            ) : status == 3 ? (
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
            ) : (
              <Box
                sx={{
                  backgroundColor: "#e39639",
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
                  Paid
                </Typography>
              </Box>
            )}

            <Typography
              sx={{ fontSize: 21, mb: "0.3rem", fontWeight: "bold" }}
              noWrap
            >
              {title}
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
                  {cost} ETH
                </Typography>
                <Typography
                  sx={{ fontSize: 15, mb: "0.3rem" }}
                  color="secondary.main"
                >
                  {raised} ETH raised
                </Typography>
              </Box>
              <Box>
                {!expired ? (
                  <>
                    {" "}
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
                      {expired ? "0" : remainingDays}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 15, mb: "0.3rem" }}
                      color="secondary.main"
                    >
                      Days left
                    </Typography>
                  </>
                ) : (
                  <Typography
                    sx={{ fontSize: 15, mb: "0.3rem" }}
                    color="secondary.main"
                  >
                    Expired
                  </Typography>
                )}
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

export default CampaignCard;
