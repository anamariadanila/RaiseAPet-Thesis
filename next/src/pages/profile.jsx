import React, { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import { useAppContext } from "../context";
import DisplayCampaigns from "../components/DisplayCampaigns";
import { useSession } from "next-auth/react";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { data: session, status } = useSession();
  console.log(session?.user.user.type, status);

  const { address, contract, getUserCampaigns, getCampaignsByDonator } =
    useAppContext();

  const fetchCampaigns = async () => {
    if (session?.user.user.type === "ONG") {
      setLoading(true);
      const data = await getUserCampaigns();
      setCampaigns(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const fetchDonators = async () => {
    if (session?.user.user.type === "Donator") {
      setLoading(true);
      const data = await getCampaignsByDonator(address?.toLowerCase());
      setCampaigns(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <DisplayCampaigns
          title={
            session?.user.user.type === "ONG"
              ? "My campaigns"
              : "Campaigns I donated"
          }
          loading={loading}
          campaigns={campaigns}
        />
      </MainLayout>
    </>
  );
};

Profile.auth = true;

export default Profile;
