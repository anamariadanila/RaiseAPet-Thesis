import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import {
  ongHamburgerIcons,
  donatorHamburgerIcons,
} from "../constants/index.jsx";
import { signOut } from "next-auth/react";
import { useAppContext } from "../context/index.jsx";
import { useSession } from "next-auth/react";
import NewOngModal from "./NewOngModal.jsx";
import OngAlreadyCreatedModal from "./OngAlreadyCreatedModal.jsx";
import { useEffect } from "react";
import SwitchMode from "./SwitchMode.jsx";
import { Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const HamburgerMenu = () => {
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

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 10,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
            alignItems: "left",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {session?.user?.user?.type === "ONG" && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <NewOngModal />
              <Typography>Create Campaign</Typography>
            </Box>
          )}
          {session?.user?.user?.type === "ONG" && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <OngAlreadyCreatedModal />
              <Typography>Create ONG</Typography>
            </Box>
          )}
          {session?.user?.user?.type === "ONG"
            ? ongHamburgerIcons.map((icon, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <IconButton
                    color="secondary"
                    onClick={() => router.push(icon.link)}
                  >
                    {icon.icon}
                  </IconButton>
                  <Typography>{icon.name}</Typography>
                </Box>
              ))
            : donatorHamburgerIcons.map((icon, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <IconButton
                    color="secondary"
                    onClick={() => router.push(icon.link)}
                  >
                    {icon.icon}
                  </IconButton>
                  <Typography>{icon.name}</Typography>
                </Box>
              ))}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <IconButton color="secondary" onClick={handleSignOut}>
              <LogoutOutlinedIcon
                sx={{ fontSize: "2rem", m: "0.2rem", color: "icon.main" }}
              />
            </IconButton>
            <Typography>Logout</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <SwitchMode />
            <Typography>Change mode</Typography>
          </Box>
        </Box>
      </Toolbar>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box sx={{ height: "1rem" }}>
            <IconButton color="secondary" onClick={toggleDrawer(anchor, true)}>
              <MenuOutlinedIcon
                sx={{ fontSize: "2rem", m: "0.2rem", color: "icon.main" }}
              />
            </IconButton>
          </Box>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default HamburgerMenu;
