import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonConnect from "./ButtonConnect";
import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Box, TextField } from "@mui/material";
import { useAppContext } from "../context";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "./Loader";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const UpdateOng = ({ ongsSent }) => {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const { updateOng } = useAppContext();
  const router = useRouter();
  const id = router.query.id;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function timestampToDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  const [formDetails, setFormDetails] = useState({
    name: ongsSent[id]?.name,
    description: ongsSent[id]?.description,
    image: ongsSent[id]?.image,
  });

  useEffect(() => {
    setFormDetails({
      name: ongsSent[id]?.name,
      description: ongsSent[id]?.description,
      image: ongsSent[id]?.image,
    });
  }, [ongsSent]);

  const handleFormChange = (type, e) => {
    setFormDetails({ ...formDetails, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateOng({
      ...formDetails,
      id: ongsSent[id]?.id,
    });
    setLoading(false);
    setFormDetails({
      name: formDetails?.name,
      description: formDetails?.description,
      image: formDetails?.image,
    });

    router.push("/ongs");
  };

  return (
    <div>
      <IconButton color="secondary" onClick={handleClickOpen}>
        <EditOutlinedIcon
          sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
        />
      </IconButton>
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
            Edit ONG details
          </DialogTitle>
          <IconButton color="secondary" onClick={handleClose}>
            <CloseOutlinedIcon
              sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
            />
          </IconButton>
        </Box>

        <DialogContent>
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
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                mt: "2rem",
                mr: "6rem",
                flexDirection: "row",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <TextField
                label="Ong name"
                color="secondary"
                sx={{ width: "17rem" }}
                value={formDetails.name}
                onChange={(e) => handleFormChange("name", e)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                mt: "2rem",
              }}
            >
              <TextField
                label="Ong description"
                placeholder="Ong Description"
                multiline
                rows={6}
                sx={{
                  width: "100%",
                }}
                color="secondary"
                value={formDetails.description}
                onChange={(e) => handleFormChange("description", e)}
              />
            </Box>

            <Box sx={{ mt: "2rem", color: "secondary.main" }}>
              <TextField
                label="Image URL"
                id="imgUrl"
                type="url"
                placeholder="Image URL"
                sx={{
                  width: "100%",
                }}
                color="secondary"
                value={formDetails.image}
                onChange={(e) => handleFormChange("image", e)}
              />
            </Box>
            <Box sx={{ mt: "2rem" }}>
              <ButtonConnect title="Submit" btnType="submit" />
            </Box>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateOng;
