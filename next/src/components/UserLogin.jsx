"useClient";
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
import { validationLogin } from "../lib/validation";
import { signIn } from "next-auth/react";

const UserLogin = ({ title, messageTitle }) => {
  const [type, setType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.log(type, "aixiß");

  const { connect, address } = useAppContext();

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickRegister = () => {
    connect();

    //de vazut daca deja exista un cont cu adresa asta sa apara eroare else se face conectare
  };
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const onSubmit = async (values) => {
    const status = await signIn("credentials", {
      redirect: false,
      ongCode: values.ongCode,
      password: values.password,
      address: address,
      type: type,
      callbackUrl: "/campaigns",
    });

    console.log(status, "status");

    if (status.ok) {
      router.push("/campaigns");
      connect();
    } else {
      connect();
    }
  };

  const onSubmitDonator = async () => {
    const status = await signIn("credentials", {
      redirect: false,
      address: address,
      type: type,
      callbackUrl: "/campaigns",
    });

    console.log(status, "status");
    if (status.ok) {
      router.push("/campaigns");
      connect();
    }
  };

  const formik = useFormik({
    initialValues: {
      ongCode: "",
      password: "",
    },
    validate: validationLogin,
    onSubmit,
  });

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
            handleClick={onSubmitDonator}
          />
        ) : null}
        <Box>
          {type !== "Donator" && type !== "ONG" ? (
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
          ) : null}
        </Box>
      </form>
    </Box>
  );
};

export default UserLogin;
