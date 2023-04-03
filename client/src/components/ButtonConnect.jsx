import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ButtonConnect = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        size="large"
        sx={{ height: "7vh", width: "8vw", mt: "1vh", borderRadius: "90px" }}
        color="button"
      >
        Connect
      </Button>
    </Stack>
  );
};

export default ButtonConnect;
