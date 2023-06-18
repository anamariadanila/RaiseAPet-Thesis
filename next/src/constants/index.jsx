import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

export const sidebarIcons = [
  {
    icon: (
      <Grid item>
        <Tooltip
          title="All campaigns"
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
          <GridViewOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/campaigns",
  },
  {
    icon: (
      <Grid item>
        <Tooltip
          title="All Ongs"
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
          <PetsOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/ongs",
  },

  {
    icon: (
      <Grid item>
        <Tooltip
          title="Profile"
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
          <AccountCircleOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/profile",
  },
];

export const donatorIcons = [
  {
    icon: (
      <Grid item>
        <Tooltip
          title="All campaigns"
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
          <GridViewOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/campaigns",
  },
  {
    icon: (
      <Grid item>
        <Tooltip
          title="All Ongs"
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
          <PetsOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/ongs",
  },

  {
    icon: (
      <Grid item>
        <Tooltip
          title="Profile"
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
          <AccountCircleOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/profile",
  },
];

export const ongHamburgerIcons = [
  {
    icon: (
      <GridViewOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.2rem", color: "icon.main" }}
      />
    ),
    link: "/campaigns",
    name: "Campaigns",
  },
  {
    icon: (
      <PetsOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.2rem", color: "icon.main" }}
      />
    ),
    link: "/ongs",
    name: "ONGs",
  },

  {
    icon: (
      <AccountCircleOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.2rem", color: "icon.main" }}
      />
    ),
    link: "/profile",
    name: "Profile",
  },
];

export const donatorHamburgerIcons = [
  {
    icon: (
      <GridViewOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.2rem", color: "icon.main" }}
      />
    ),
    link: "/campaigns",
    name: "Campaigns",
  },
  {
    icon: (
      <PetsOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.2rem", color: "icon.main" }}
      />
    ),
    link: "/ongs",
    name: "ONGs",
  },

  {
    icon: (
      <AccountCircleOutlinedIcon
        sx={{ fontSize: "2rem", m: "0.2rem", color: "icon.main" }}
      />
    ),
    link: "/profile",
    name: "Profile",
  },
];
