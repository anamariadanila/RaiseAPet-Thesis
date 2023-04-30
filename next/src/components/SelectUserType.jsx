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
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import metamask from "../assets/metamask.png";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { validationLogin, validationRegister } from "../lib/validation";

const SelectUserType = ({ showMessage, title, ifRegister, messageTitle }) => {
  const [type, setType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (values) => {
    // event.preventDefault();
    // const formElements = event.currentTarget.elements;
    // const ongCode = formElements.ongCode.value;
    // const password = formElements.password.value;
    // const confirmPassword = formElements.confirmPassword.value;
    // console.log(ongCode, password, confirmPassword);
    if (!ifRegister) {
      delete values.confirmPassword;
    }
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      ongCode: "",
      password: "",
      confirmPassword: "",
    },
    validate: ifRegister ? validationRegister : validationLogin,
    onSubmit: handleSubmit,
  });

  const router = useRouter();

  const { address, connectWallet } = useAppContext();
  const handleClick = () => {
    if (address) {
      router.push("/campaigns");
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
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          color="secondary"
        >
          {type !== "ONG" && type !== "Donator" && (
            <Box
              sx={{
                bgcolor: "#3b3247",
                height: "4rem",
                borderRadius: "15px",
                width: "60%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: "2rem",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", fontSize: 23 }}
              >
                {messageTitle}
              </Typography>
            </Box>
          )}
          <Select
            value={type}
            onChange={handleChange}
            displayEmpty
            sx={{ minWidth: "25ch" }}
          >
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                required
                label="ONG Code"
                color="secondary"
                sx={{ m: 1, width: "25ch" }}
                name="ongCode"
                {...formik.getFieldProps("ongCode")}
                autoComplete="off"
              />
              {formik.errors.ongCode && formik.touched.ongCode ? (
                <Typography
                  align="left"
                  sx={{
                    fontSize: 12,
                    color: "error.main",
                    ml: 1,
                    width: "30ch",
                  }}
                >
                  {formik.errors.ongCode}
                </Typography>
              ) : null}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FormControl
                sx={{
                  m: 1,
                  width: "25ch",
                }}
                variant="outlined"
                color="secondary"
                required
                {...formik.getFieldProps("password")}
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
              {formik.errors.password && formik.touched.password ? (
                <Typography
                  variant="h6"
                  align="left"
                  sx={{
                    fontSize: 12,
                    color: "error.main",
                    ml: 1,
                    width: "35ch",
                  }}
                >
                  {formik.errors.password}
                </Typography>
              ) : null}
            </Box>

            {ifRegister && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FormControl
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                  color="secondary"
                  required
                  {...formik.getFieldProps("confirmPassword")}
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
                    type={showConfirmPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm password"
                  />
                </FormControl>
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{
                      fontSize: 12,
                      color: "error.main",
                      ml: 1,
                      width: "35ch",
                    }}
                  >
                    {formik.errors.confirmPassword}
                  </Typography>
                ) : null}
              </Box>
            )}

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
            img={metamask.src}
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
