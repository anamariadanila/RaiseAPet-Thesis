import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import ButtonConnect from "./ButtonConnect";

const SelectUserType = () => {
  const [type, setType] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };
  console.log(type);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} color="secondary">
        <Select value={type} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>Select type</em>
          </MenuItem>
          <MenuItem value="ONG">ONG</MenuItem>
          <MenuItem value="Donator">Donator</MenuItem>
        </Select>
        <FormHelperText>Select user type</FormHelperText>
      </FormControl>
      {type === "ONG" ? (
        <Box>
          <TextField
            required
            label="ONG Code"
            color="secondary"
            sx={{ m: 1, width: "25ch" }}
          />

          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            color="secondary"
            required
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              autoComplete="off"
              id="outlined-adornment-password"
              inputProps={{
                autoComplete: "new-password",
              }}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonConnect title="Connect" btnType="button" />
          </Box>
        </Box>
      ) : type === "Donator" ? (
        <ButtonConnect title="Connect" btnType="button" />
      ) : (
        <Box> </Box>
      )}
    </Box>
  );
};

export default SelectUserType;