import React from "react";
import Head from "next/head";
import HomePage from "../layouts/HomePage";
import { getSession } from "next-auth/react";

const Home = () => {
  return (
    <>
      <Head>
        <title>RaiseAPet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    // return {
    //   redirect: {
    //     destination: "/",
    //     permanent: false,
    //   },
    // };
  }

  return {
    props: {
      session,
    },
  };
};
