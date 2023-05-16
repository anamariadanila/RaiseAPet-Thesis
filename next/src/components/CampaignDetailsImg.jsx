import React, { useState, useEffect } from "react";
import { Box, CardMedia } from "@mui/material";
import { getGlobalState, useGlobalState } from "../globalState";
import { useRouter } from "next/router";
import { useAppContext } from "../context";

const CampaignDetailsImg = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const id = router.query.id;

  const { contract, address, getCampaigns } = useAppContext();

  const fetchCampaigns = async () => {
    setLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setLoading(false);
  };

  console.log("campaigns", campaigns);

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <Box>
      <CardMedia
        component="img"
        sx={{ width: "75%", height: "400px", borderRadius: "15px" }}
        src={campaigns[id]?.image}
      />
    </Box>
  );
};

export default CampaignDetailsImg;
