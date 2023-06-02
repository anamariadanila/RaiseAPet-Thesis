import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

export const sidebarIcons = [
  {
    icon: (
      <Grid item>
        <Tooltip
          title="New Ong"
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
          <AddHomeOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/create-ong",
  },
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
  // {
  //   icon: (
  //     <Grid item>
  //       <Tooltip
  //         title="New campaign"
  //         arrow
  //         placement="right"
  //         componentsProps={{
  //           tooltip: {
  //             sx: {
  //               bgcolor: "icon.main",
  //               "& .MuiTooltip-arrow": {
  //                 color: "icon.main",
  //               },
  //               color: "common.black",
  //               fontSize: "0.8rem",
  //             },
  //           },
  //         }}
  //       >
  //         <CreateNewFolderOutlinedIcon
  //           sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
  //         />
  //       </Tooltip>
  //     </Grid>
  //   ),
  //   link: "/create-campaign",
  // },

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

  {
    icon: (
      <Grid item>
        <Tooltip
          title="Settings"
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
          <SettingsOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/settings",
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

  {
    icon: (
      <Grid item>
        <Tooltip
          title="Settings"
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
          <SettingsOutlinedIcon
            sx={{ fontSize: "2rem", m: "0.5rem", color: "icon.main" }}
          />
        </Tooltip>
      </Grid>
    ),
    link: "/settings",
  },
];
