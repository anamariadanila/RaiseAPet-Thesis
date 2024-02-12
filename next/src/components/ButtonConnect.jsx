import * as React from "react";
import Button from "@mui/material/Button";

const ButtonConnect = ({ title, btnType, handleClick, img, style }) => {
  return (
    <Button
      variant="contained"
      size="medium"
      sx={{
        height: "4rem",
        width: "7rem",
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
  );
};

export default ButtonConnect;
