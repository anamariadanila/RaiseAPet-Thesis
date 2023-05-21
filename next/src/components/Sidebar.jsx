import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { sidebarIcons, donatorIcons } from "../constants/index.jsx";
import logo from "../assets/logo.png";
import { signOut } from "next-auth/react";
import { useAppContext } from "../context/index.jsx";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";

export default function Sidebar({}) {
  const router = useRouter();
  const { address } = useAppContext();
  const disconnect = useDisconnect();
  const { data: session, status } = useSession({ required: true });
  console.log(session?.user?.user?.type);

  const handleSignOut = () => {
    if (address) {
      console.log("address", address);
      disconnect();
      signOut({
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");

      //aici notificare cum ca nu e inregistrat si nu poate face logout
    }

    //aici de vazut in functie de tip, daca e ong trb facut signOut cu next-auth si disconnect de la portofel, daca e donator
    //doar disconnect de la portofel
  };

  //get type from getType request from api

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      position="fixed"
    >
      <AppBar
        position="static"
        sx={{
          width: "4.5rem",
          height: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            mt: "1.5rem",
            mb: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <IconButton
              onClick={() =>
                localStorage.getItem("type") === "ONG" ||
                localStorage.getItem("type") === "Donator"
                  ? router.push("/campaigns")
                  : router.push("/")
              }
            >
              <img src={logo.src} alt="logo" width="80px" height="80px" />
            </IconButton>
            {session?.user?.user?.type === "ONG"
              ? sidebarIcons.map((icon, index) => (
                  <IconButton
                    color="secondary"
                    onClick={() => router.push(icon.link)}
                    key={index}
                  >
                    {icon.icon}
                  </IconButton>
                ))
              : donatorIcons.map((icon, index) => (
                  <IconButton
                    color="secondary"
                    onClick={() => router.push(icon.link)}
                    key={index}
                  >
                    {icon.icon}
                  </IconButton>
                ))}

            <IconButton color="secondary" onClick={handleSignOut}>
              <Grid item>
                <Tooltip
                  title="Logout"
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
                  <LogoutOutlinedIcon
                    sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
                  />
                </Tooltip>
              </Grid>
            </IconButton>
          </Box>
          <Box>
            <IconButton color="secondary" aria-label="dashboard">
              <Brightness5OutlinedIcon
                sx={{
                  fontSize: "2rem",
                  m: "0.5rem",
                  color: "icon.main",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
