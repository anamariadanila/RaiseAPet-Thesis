"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";
import { isJwtExpired, verifyJwtAccessToken } from "../lib/jwt";
import { signOut } from "next-auth/react";
import { useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useAppContext } from "../context/index.jsx";
import { useMetamask } from "@thirdweb-dev/react";

const Auth = ({ children }) => {
  const disconnect = useDisconnect();
  const { address } = useAppContext();
  const router = useRouter();
  const { data: session, status } = useSession();

  return children;
};

export default Auth;
