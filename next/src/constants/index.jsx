import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

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
      <ChatOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/chat",
  },
  {
    icon: (
      <SettingsOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/settings",
  },
  {
    icon: (
      <LogoutOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
      />
    ),
    link: "/",
  },
];
