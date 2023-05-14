import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ButtonConnect = ({ title, btnType, handleClick, img, style }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        size="large"
        sx={{
          height: "4rem",
          width: "8rem",
          mt: "0.5rem",
          borderRadius: "90px",
          fontWeight: "bold",
        }}
        color="button"
        type={btnType}
        onClick={handleClick}
        style={style}
      >
        {title}
        {img && <img src={img} alt="image" width="30px" height="30px" />}
      </Button>
    </Stack>
  );
};

export default ButtonConnect;
