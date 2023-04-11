import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";

const Search = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mt: "1vh", width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="filled"
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          borderRadius: "30px",
        }}
      />
    </Box>
  );
};

export default Search;
