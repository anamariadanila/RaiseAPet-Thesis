import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ButtonConnect = ({ title, btnType }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        size="large"
        sx={{ height: "6vh", width: "7vw", mt: "1vh", borderRadius: "90px" }}
        color="button"
        type={btnType}
      >
        {title}
      </Button>
    </Stack>
  );
};

export default ButtonConnect;
