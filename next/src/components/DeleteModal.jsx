import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonConnect from "./ButtonConnect";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useState } from "react";
import { Box } from "@mui/material";

export default function DeleteModal({ campaignsSent }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { deleteCampaign } = useAppContext();
  const router = useRouter();
  const id = router.query.id;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
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
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DialogTitle id="responsive-dialog-title">
            {`Delete campaign "${campaignsSent[id]?.title}"?`}
          </DialogTitle>

          <IconButton color="secondary" onClick={handleClose}>
            <CloseOutlinedIcon
              sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
            />
          </IconButton>
        </Box>
        <DialogContent>
          <DialogContentText>
            <strong>Attention!</strong> This action is irreversible. After
            deletion the campaign cannot be reopened!
          </DialogContentText>
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
