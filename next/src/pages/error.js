"use client";
import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";

const ErrorPage = ({ statusCode, error, reset }) => {
  console.log(statusCode, "error");
  return <div>{statusCode}</div>;
};

export default ErrorPage;
