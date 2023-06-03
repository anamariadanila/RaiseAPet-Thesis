import * as React from "react";
import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
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
import { useAppContext } from "../context";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { validationForgotPassword } from "../lib/validation";

const ForgetPassword = ({ title, messageTitle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { connect, address } = useAppContext();

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickRegister = () => {
    connect();
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    connect();
  }, [address]);

  const onSubmit = async (values) => {
    connect();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    await fetch("http://localhost:3000/api/changePassword", options)
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          router.push("/login");
        }
        if (data.error) {
          window.alert(data.error);
          router.push("/register");
        }
      });
  };

  const formik = useFormik({
    initialValues: {
      ongCode: "",
      password: "",
      confirmPassword: "",
    },
    validate: validationForgotPassword,
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
                  New password
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
                  label="New password"
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
                  Confirm new password
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
                  label="Confirm new password"
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
        </form>
      </Box>
    </>
  );
};

export default ForgetPassword;
