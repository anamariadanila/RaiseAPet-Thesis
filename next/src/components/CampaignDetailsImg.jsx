import React, { useState, useEffect } from "react";
import { Box, CardMedia, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useAppContext } from "../context";
import { useSession } from "next-auth/react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import DeleteModal from "./DeleteModal";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import UpdateCampaign from "./UpdateCampaign";

const CampaignDetailsImg = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  console.log(session?.user?.user?.address);

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const id = router.query.id;

  const { contract, address, getCampaigns, getCampaignsStatistics } =
    useAppContext();

  const fetchCampaigns = async () => {
    setLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setLoading(false);
  };

  // console.log("campaigns", campaigns);

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const [statistics, setStatistics] = useState([]);

  const fetchStatistics = async () => {
    const data = await getCampaignsStatistics();
    // console.log("data", data);
    setStatistics(data);
  };
  useEffect(() => {
    if (contract) fetchStatistics();
  }, []);

  return (
    <Box>
      <CardMedia
        component="img"
        sx={{ width: "75%", height: "400px", borderRadius: "15px" }}
        src={campaigns[id]?.image}
      />
      <Box
        sx={{
          width: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {session?.user?.user?.address.toLowerCase() === campaigns[id]?.owner ? (
          campaigns[id]?.status !== 3 ? (
            campaigns[id]?.status === 1 ? (
              <IconButton
                color="secondary"
                onClick={() => router.push("/create-campaign")}
              >
                <PaymentsOutlinedIcon
                  sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
                />
              </IconButton>
            ) : (
              <>
                {/* <IconButton
                  color="secondary"
                  onClick={() => router.push("/create-campaign")}
                >
                  <EditOutlinedIcon
                    sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
                  />
                </IconButton> */}
                <UpdateCampaign campaignsSent={campaigns} />
                <DeleteModal campaignsSent={campaigns} />
              </>
            )
          ) : null
        ) : null}
      </Box>
    </Box>
  );
};

export default CampaignDetailsImg;
