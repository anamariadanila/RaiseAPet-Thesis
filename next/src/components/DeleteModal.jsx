import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ButtonConnect from "./ButtonConnect";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useState } from "react";
import { Box } from "@mui/material";

export default function DeleteModal({ campaignsSent }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    address,
    contract,
    createCampaign,
    updateCampaign,
    getCampaigns,
    deleteCampaign,
  } = useAppContext();
  const router = useRouter();
  const id = router.query.id;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    // e.preventDefault();
    setLoading(true);
    await deleteCampaign(campaignsSent[id]?.id.toString());
    setLoading(false);
    router.push("/campaigns");
  };

  return (
    <div>
      <IconButton color="secondary" onClick={handleClickOpen}>
        <DeleteOutlineOutlinedIcon
          sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
        />
      </IconButton>
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
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="responsive-dialog-title">
          {`Delete campaign "${campaignsSent[id]?.title}"?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>This action cannot be undone.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonConnect
            title="Delete"
            style={{
              width: "7rem",
              height: "3rem",
            }}
            btnType="button"
            handleClick={handleDelete}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
