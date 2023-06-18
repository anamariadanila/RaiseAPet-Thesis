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

export default function UpdateCampaign({ campaignsSent }) {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const { updateCampaign } = useAppContext();
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
    title: campaignsSent[id]?.title,
    description: campaignsSent[id]?.description,
    image: campaignsSent[id]?.image,
    deadline: timestampToDate(campaignsSent[id]?.deadline),
  });

  useEffect(() => {
    setFormDetails({
      title: campaignsSent[id]?.title,
      description: campaignsSent[id]?.description,
      image: campaignsSent[id]?.image,
      deadline: timestampToDate(campaignsSent[id]?.deadline),
    });
  }, [campaignsSent]);

  const handleFormChange = (type, e) => {
    setFormDetails({ ...formDetails, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await updateCampaign({
      ...formDetails,
      id: campaignsSent[id]?.id,
    });
    setLoading(false);
    setFormDetails({
      title: formDetails?.title,
      description: formDetails?.description,
      image: formDetails?.image,
      deadline: timestampToDate(formDetails.deadline),
    });
    router.push("/campaigns");

    // imageAvailable(formDetails.image, async (isOk) => {
    //   if (isOk) {
    //     setLoading(true);
    //     await updateCampaign({
    //       ...formDetails,
    //       //   cost: ethers.utils.parseUnits(formDetails.cost, 18), //wei value
    //     });
    //     setLoading(false);
    //     console.log("formDetails432", formDetails);
    //     router.push("/campaigns");
    //   } else {
    //     alert("Image is not available");
    //     setFormDetails({ ...formDetails, image: "" });
    //   }
    // });

    // isFutureDate(formDetails.deadline, async (isOk) => {
    //   if (isOk) {
    //     setLoading(true);
    //     await updateCampaign({
    //       ...formDetails,
    //       //   cost: ethers.utils.parseUnits(formDetails.cost, 18), //wei value
    //     });
    //     setLoading(false);
    //     router.push("/campaigns");
    //   } else {
    //     alert("Date is not available");
    //     setFormDetails({ ...formDetails, deadline: "" });
    //   }
    // });
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
            Edit campaign details
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
                label="Campaign title"
                color="secondary"
                sx={{ width: "17rem" }}
                value={formDetails.title}
                onChange={(e) => handleFormChange("title", e)}
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
                label="Campaign description"
                placeholder="Campaign Description"
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "2rem",
                mr: "6rem",
                flexDirection: "column",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <TextField
                color="secondary"
                type="date"
                sx={{
                  width: "17rem",
                  "& input": { color: "secondary.main" },
                }}
                value={formDetails.deadline}
                onChange={(e) => handleFormChange("deadline", e)}
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
        <DialogActions>
          {/* <ButtonConnect
            title="Delete"
            style={{
              width: "7rem",
              height: "3rem",
            }}
          /> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
