import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ButtonConnect from "./ButtonConnect";
import { IconButton } from "@mui/material";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Loader from "./Loader";

const OngAlreadyCreatedModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ongs, setOngs] = useState([]);
  const [ongExists, setOngExists] = useState([]);

  const { address, contract, getOngs } = useAppContext();
  const router = useRouter();
  const id = router.query.id;

  const { data: session } = useSession();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle id="responsive-dialog-title">
              ONG already created
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                You can only create one ONG per account
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
                handleClick={() => router.push("/campaigns")}
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