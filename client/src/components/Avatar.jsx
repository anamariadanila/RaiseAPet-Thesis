import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import avatar from "../assets/avatar.jpg";

const UserAvatar = () => {
  console.log(avatar);
  console.log("avatar");
  return (
    <Stack direction="row">
      <Avatar alt="avatar" src={avatar} sx={{ width: 70, height: 70 }} />
    </Stack>
  );
};

export default UserAvatar;
