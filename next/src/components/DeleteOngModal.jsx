import * as React from "react";
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
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Loader from "./Loader";
import { useSession } from "next-auth/react";

const DeleteOngModal = ({ ongsSent }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const { data: session, status } = useSession();

  const { deleteOng, contract, address, getCampaigns } = useAppContext();
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
    setLoading(true);
    await deleteOng(ongsSent[id]?.id.toString());
    setLoading(false);
    router.push("/ongs");
  };

  const handleDeleteOngWithCampaigns = async () => {
    router.push("/ongs");
  };

  const fetchCampaigns = async () => {
    setLoading(true);
    const data = await getCampaigns();
    const val = data.map((campaign) => ({
      owner: campaign.owner,
      status: campaign.status,
    }));
    console.log(val);
    setAddresses(val);
    setCampaigns(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  console.log(addresses);

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
      {addresses.find((address) => address.owner === ongsSent[id]?.owner) &&
      addresses.find((address) => address.status !== 3) ? (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle id="responsive-dialog-title">
            Can not delete ONG
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This ONG has active campaigns. Please delete them first.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <ButtonConnect
              title="Cancel"
              style={{
                width: "7rem",
                height: "3rem",
              }}
              btnType="button"
              handleClick={handleDeleteOngWithCampaigns}
            />
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle id="responsive-dialog-title">
            {`Delete ong "${ongsSent[id]?.name}"?`}
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
      )}
    </div>
  );
};

export default DeleteOngModal;
