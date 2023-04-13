import React from "react";
import { ConnectWallet, useSDK, useAddress } from "@thirdweb-dev/react";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { signInWithCustomToken } from "firebase/auth";
import initializeFirebaseClient from "../lib/initFirebase";
import Box from "@mui/material/Box";

const LoginWithETH = () => {
  const address = useAddress();
  const sdk = useSDK();
  const { auth, db } = initializeFirebaseClient();
  const signIn = async () => {
    const payload = await sdk?.auth?.login("crowdfundingong.com");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const { token } = await res.json();

    signInWithCustomToken(auth, token).then((userCredential) => {
      const user = userCredential.user;

      const newUser = doc(db, "users", user.uid);

      if (!newUser) {
        setDoc(
          newUser,
          {
            createdAt: serverTimestamp(),
          },
          { merge: true }
        );
      }
    });

    return (
      <Box>
        {address ? (
          <ButtonConnect handleClick={() => signIn()} title={"Login"} />
        ) : (
          <ConnectWallet />
        )}
      </Box>
    );
  };
};

export default LoginWithETH;
