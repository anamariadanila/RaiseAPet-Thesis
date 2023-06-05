import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonConnect from "./ButtonConnect";
import { IconButton } from "@mui/material";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const OngAlreadyCreatedModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ongs, setOngs] = useState([]);
  const [ongExists, setOngExists] = useState([]);

  const { address, contract, getOngs } = useAppContext();
  const router = useRouter();

  const { data: session } = useSession();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchOngs = async () => {
    setLoading(true);
    const data = await getOngs();
    const val = data.map((ong) => (ong.owner = ong.owner.toLowerCase()));

    setOngExists(val);
    setOngs(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchOngs();
  }, [address, contract]);

  return (
    <div>
      {ongExists.includes(session?.user?.user?.address.toLowerCase()) ? (
        <>
          <IconButton color="secondary" onClick={handleClickOpen}>
            <AddHomeOutlinedIcon
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
                ONG already created
              </DialogTitle>
              <IconButton color="secondary" onClick={handleClose}>
                <CloseOutlinedIcon
                  sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
                />
              </IconButton>
            </Box>
            <DialogContent>
              <DialogContentText>
                You can create only one ONG per account. <br />{" "}
                <b>Attention!</b> If the ONG has been deleted another one cannot
                be created.
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
                handleClick={() => {
                  if (router.pathname === "/campaigns") {
                    handleClose();
                  } else {
                    router.push("/campaigns");
                  }
                }}
              />
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <>
          <IconButton
            color="secondary"
            onClick={() => router.push("/create-ong")}
          >
            <AddHomeOutlinedIcon
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
        </>
      )}
    </div>
  );
};

export default OngAlreadyCreatedModal;
