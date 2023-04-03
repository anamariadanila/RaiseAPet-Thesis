import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Filter = () => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={categories}
      disableCloseOnSelect
      getOptionLabel={(option) => option.type}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            sx={{ "& .MuiSvgIcon-root": { color: "secondary.main" } }}
          />
          {option.type}
        </li>
      )}
      style={{ width: 400 }}
      sx={{ mt: "1vh" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Animal Type"
          variant="filled"
          sx={{
            "& .MuiInputLabel-outlined .MuiInput-colorSecondary": {
              color: "secondary",
            },
            "& .MuiFormLabel-root": {
              color: "secondary",
            },

            "& .MuiFilledInput-root": {
              color: "secondary",
            },

            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "secondary",
              },
          }}
        />
      )}
    />
  );
};

const categories = [{ type: "cat" }, { type: "dog" }, { type: "rabbit" }];

export default Filter;
