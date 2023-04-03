import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/userAvatar.png";

const UserAvatar = () => {
  return (
    <Stack direction="row">
      <Avatar
        alt="avatar"
        src={avatar2}
        sx={{ width: 70, height: 70, mt: "1vh" }}
      />
    </Stack>
  );
};

export default UserAvatar;
