import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const sidebarIcons = [
  {
    icon: <GridViewOutlinedIcon sx={{ fontSize: "2rem", m: "0.5rem" }} />,
    link: "/campaigns",
  },
  {
    icon: (
      <CreateNewFolderOutlinedIcon sx={{ fontSize: "2rem", m: "0.5rem" }} />
    ),
    link: "/create-campaign",
  },
  {
    icon: <AccountCircleOutlinedIcon sx={{ fontSize: "2rem", m: "0.5rem" }} />,
    link: "/profile",
  },
  {
    icon: <ChatOutlinedIcon sx={{ fontSize: "2rem", m: "0.5rem" }} />,
    link: "/chat",
  },
  {
    icon: <SettingsOutlinedIcon sx={{ fontSize: "2rem", m: "0.5rem" }} />,
    link: "/settings",
  },
  {
    icon: <LogoutOutlinedIcon sx={{ fontSize: "2rem", m: "0.5rem" }} />,
    link: "/",
  },
];
