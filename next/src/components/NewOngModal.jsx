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
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

const NewOngModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ongs, setOngs] = useState([]);
  const [ongExists, setOngExists] = useState([]);
  const [ongStatus, setOngStatus] = useState([]);

  const { address, contract, getOngs } = useAppContext();
  const router = useRouter();
  const id = router.query.id;

  const { data: session, status } = useSession();

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
    const ongStat = data.map((ong) => ({
      ongStatus: ong.status,
      ongOwner: ong.owner,
    }));
    setOngStatus(ongStat);
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
          <IconButton
            color="secondary"
            onClick={() => router.push("/create-campaign")}
            {...(ongStatus.find(
              (ong) =>
                ong.ongOwner === session?.user?.user?.address.toLowerCase()
            )?.ongStatus === 1 && { disabled: true })}
          >
            <Grid item>
              <Tooltip
                title="New Campaign"
                arrow
                placement="right"
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "icon.main",
                      "& .MuiTooltip-arrow": {
                        color: "icon.main",
                      },
                      color: "common.black",
                      fontSize: "0.8rem",
                    },
                  },
                }}
              >
                <CreateNewFolderOutlinedIcon
                  sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
                />
              </Tooltip>
            </Grid>
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
      ) : (
        <>
          <IconButton color="secondary" onClick={handleClickOpen}>
            <Grid item>
              <Tooltip
                title="New Campaign"
                arrow
                placement="right"
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "icon.main",
                      "& .MuiTooltip-arrow": {
                        color: "icon.main",
                      },
                      color: "common.black",
                      fontSize: "0.8rem",
                    },
                  },
                }}
              >
                <CreateNewFolderOutlinedIcon
                  sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
                />
              </Tooltip>
            </Grid>
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
                You have to create an ONG first
              </DialogTitle>
              <IconButton color="secondary" onClick={handleClose}>
                <CloseOutlinedIcon
                  sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
                />
              </IconButton>
            </Box>
            <DialogContent>
              <DialogContentText>
                Before creating a campaign you have to create an ONG first.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <ButtonConnect
                title="Create ONG"
                style={{
                  width: "7rem",
                  height: "3rem",
                }}
                btnType="button"
                handleClick={() => {
                  if (router.pathname === "/create-ong") {
                    handleClose();
                  } else {
                    router.push("/create-ong");
                  }
                }}
              />
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default NewOngModal;
