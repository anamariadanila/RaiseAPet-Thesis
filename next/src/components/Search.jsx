import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";

const Search = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mt: "1vh", width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <TextField
          id="search-bar"
          label="Search"
          variant="filled"
          color="secondary"
          autoComplete="off"
          inputProps={{
            autoComplete: "off",
          }}
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
      </FormControl>
    </Box>
  );
};

export default Search;
