import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useAuth } from "@thirdweb-dev/react";
import { getDoc } from "firebase/firestore";

import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { signInWithCustomToken } from "firebase/auth";
import initializeFirebaseClient from "../lib/initFirebase";
import Box from "@mui/material/Box";
import ButtonConnect from "../components/ButtonConnect";

const LoginWithETH = () => {
  const address = useAddress();
  const authentication = useAuth();
  const { auth, db } = initializeFirebaseClient();

  const signIn = async () => {
    const payload = await authentication?.login("crowdfundingong.com");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    });

    const { token } = await res.json();

    signInWithCustomToken(auth, token)
      .then((userCredential) => {
        const user = userCredential.user;

        const newUser = doc(db, "users", user.uid);
        getDoc(newUser)
          .then((doc) => {
            if (!doc.exists()) {
              setDoc(
                newUser,
                {
                  createdAt: serverTimestamp(),
                },
                { merge: true }
              );
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <Box sx={{ width: "full", height: "full" }}>
      {address ? (
        <ButtonConnect handleClick={() => signIn()} title={"Login"} />
      ) : (
        <ConnectWallet />
      )}
    </Box>
  );
};

export default LoginWithETH;
