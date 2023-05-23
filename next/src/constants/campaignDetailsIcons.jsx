import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

export const campaignDetailsIcons = [
  {
    icon: (
      <EditOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/create-campaign",
  },
  {
    icon: (
      <DeleteOutlineOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
  },
  {
    icon: (
      <PaymentsOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
  },
];
