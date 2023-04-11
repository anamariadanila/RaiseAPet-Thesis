import * as React from "react";
import { useState } from "react";
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
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import metamask from "../assets/metamask.png";
import { useAppContext } from "../context";
import { useNavigate } from "react-router-dom";

const SelectUserType = ({ showMessage, title, ifRegister }) => {
  const [type, setType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const ongCode = formElements.ongCode.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;
    // console.log(formElements);
    console.log(ongCode, password, confirmPassword);
  };

  const navigate = useNavigate();

  const { address, connectWallet } = useAppContext();
  const handleClick = () => {
    if (address) {
      navigate("/home");
    } else {
      connectWallet();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: "25ch" }} color="secondary">
          <Select value={type} onChange={handleChange} displayEmpty>
            <MenuItem value="">
              <em>Select type</em>
            </MenuItem>
            <MenuItem value="ONG">ONG</MenuItem>
            <MenuItem value="Donator">Donator</MenuItem>
          </Select>
          {type === "ONG" ? (
            <FormHelperText>ONG selected</FormHelperText>
          ) : type === "Donator" ? (
            <FormHelperText>Donator selected</FormHelperText>
          ) : (
            <FormHelperText>Select user type</FormHelperText>
          )}
        </FormControl>
        {type === "ONG" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              required
              label="ONG Code"
              color="secondary"
              sx={{ m: 1, width: "25ch" }}
              name="ongCode"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  name="password"
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
              {ifRegister && (
                <FormControl
                  sx={{
                    m: 1,
                    width: "25ch",
                  }}
                  variant="outlined"
                  color="secondary"
                  required
                >
                  <InputLabel htmlFor="outlined-adornment-password-2">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    name="confirmPassword"
                    autoComplete="off"
                    id="outlined-adornment-password-2"
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
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ButtonConnect title={title} btnType="submit" />
            </Box>
          </Box>
        ) : type === "Donator" ? (
          <ButtonConnect
            title="Connect "
            btnType="button"
            img={metamask}
            handleClick={handleClick}
          />
        ) : (
          <Box>
            {showMessage && (
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontWeight: "bold",
                  fontSize: 18,
                  mt: "3rem",
                  mb: "1rem",
                }}
              >
                Don't have an account? Register{" "}
                <Link href="/register" color="#fff">
                  here.
                </Link>
              </Typography>
            )}
          </Box>
        )}
      </form>
    </Box>
  );
};

export default SelectUserType;