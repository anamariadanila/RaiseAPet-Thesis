"use client";
import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";

const DisplayError = ({ statusCode, error }) => {
  console.log(statusCode, "error");
  return <Box sx={{ width: "100%" }}></Box>;
};

export default DisplayError;
