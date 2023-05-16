import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";

export const sidebarIcons = [
  {
    icon: (
      <GridViewOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/campaigns",
  },
  {
    icon: (
      <CreateNewFolderOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/create-campaign",
  },
  {
    icon: (
      <AccountCircleOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/profile",
  },

  {
    icon: (
      <SettingsOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/settings",
  },
];

export const donatorIcons = [
  {
    icon: (
      <GridViewOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/campaigns",
  },
  {
    icon: (
      <Diversity1OutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/ongs",
  },

  {
    icon: (
      <AccountCircleOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/profile",
  },

  {
    icon: (
      <SettingsOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/settings",
  },
];
