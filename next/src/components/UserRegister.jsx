import * as React from "react";
import { useState, useEffect } from "react";
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
import metamask from "../assets/metamask.png";
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { validationRegister } from "../lib/validation";

const UserRegister = ({ title, messageTitle }) => {
  const [type, setType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { connect, address } = useAppContext();

  console.log(type);

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  console.log(address);

  //for Donator
  const handleClick = async () => {
    const newVal = { address, type };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVal),
    };
    await fetch("http://localhost:3000/api/registerDonator", options)
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          router.push("/login");
        }
      });
  };

  //for ONG
  const onSubmit = async (values) => {
    const newVal = { ...values, address, type };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVal),
    };
    await fetch("http://localhost:3000/api/registerOng", options)
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          router.push("/login");
        }
      });
  };

  const formik = useFormik({
    initialValues: {
      ongCode: "",
      password: "",
      confirmPassword: "",
      address: "",
    },
    validate: validationRegister,
    onSubmit,
  });

  return (
    <>
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
                  bgcolor: "textBg.main",
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ButtonConnect
                  title={title}
                  btnType="submit"
                  // handleClick={handleClickRegister}
                />
              </Box>
            </Box>
          ) : type === "Donator" ? (
            <ButtonConnect
              title="Connect "
              btnType="button"
              img={metamask.src}
              handleClick={handleClick}
            />
          ) : null}
        </form>
      </Box>
    </>
  );
};

export default UserRegister;
