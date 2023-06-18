import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { sidebarIcons, donatorIcons } from "../constants/index.jsx";
import logo from "../assets/logo.png";
import { signOut } from "next-auth/react";
import { useAppContext } from "../context/index.jsx";
import { useSession } from "next-auth/react";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import NewOngModal from "./NewOngModal.jsx";
import OngAlreadyCreatedModal from "./OngAlreadyCreatedModal.jsx";
import { useEffect } from "react";
import SwitchMode from "./SwitchMode.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import HamburgerMenu from "./HamburgerMenu.jsx";

export default function Sidebar({}) {
  const router = useRouter();
  const { address, connect } = useAppContext();
  const disconnect = useDisconnect();
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    if (address) {
      disconnect();
      signOut({
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    }
  };

  // connect();

  useEffect(() => {
    if (address !== session?.user?.user?.address) {
      disconnect();
      signOut({
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    }
  }, [address]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",

          display: { xs: "none", sm: "block" },
        }}
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
                  session?.user?.user?.type === "ONG" ||
                  session?.user?.user?.type === "Donator"
                    ? router.push("/campaigns")
                    : router.push("/")
                }
              >
                <img src={logo.src} alt="logo" width="80px" height="80px" />
              </IconButton>
              {session?.user?.user?.type === "ONG" && <NewOngModal />}
              {session?.user?.user?.type === "ONG" && (
                <OngAlreadyCreatedModal />
              )}
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
            <SwitchMode />
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Box
        sx={{
          // display: "flex",
          // flexDirection: "column",
          // height: "100%",
          // flexGrow: 1,
          // width: "100%",
          // mb: "2rem",
          display: { xs: "block", sm: "none" },
        }}
        // position="fixed"
      >
        {/* <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar> */}
      {/* <HamburgerMenu />
      </Box>  */}
    </>
  );
}
