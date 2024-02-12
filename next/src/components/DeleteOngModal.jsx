import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonConnect from "./ButtonConnect";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Loader from "./Loader";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    const ongCode = session?.user?.user?.ongCode;
    const address = session?.user?.user?.address;
    const newVal = { ongCode, address };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVal),
    };
    await fetch("http://localhost:3000/api/deleteOng", options)
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          handleClose();
          router.push("/");
        }
        if (data.error) {
          window.alert(data.error);
          router.push("/");
        }
      });

    await deleteOng(ongsSent[id]?.id.toString());
    setLoading(false);
  };

  const handleDeleteOngWithCampaigns = async () => {
    router.push("/profile");
  };

  const fetchCampaigns = async () => {
    setLoading(true);
    const data = await getCampaigns();
    const val = data.map((campaign) => ({
      owner: campaign.owner,
      status: campaign.status,
    }));
    setAddresses(val);
    setCampaigns(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

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
      ></Box>
      {loading && <Loader />}
      {addresses.find((address) => {
        const findOwner = address.owner === ongsSent[id]?.owner;
        const findStatus = address.status === 0;
        return findOwner && findStatus;
      }) ? (
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
              Cannot close the ONG
            </DialogTitle>

            <IconButton color="secondary" onClick={handleClose}>
              <CloseOutlinedIcon
                sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
              />
            </IconButton>
          </Box>

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
              {`Close ONG?`}
            </DialogTitle>

            <IconButton color="secondary" onClick={handleClose}>
              <CloseOutlinedIcon
                sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
              />
            </IconButton>
          </Box>
          <DialogContent>
            <DialogContentText>
              <strong>Attention!</strong> This action is irreversible. Another
              account for this ONG cannot be created!
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
      )}
    </div>
  );
};

export default DeleteOngModal;
