import React, { createContext, useContext, useEffect } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xEaC8142d37eF97F7a091CA483070EBd156A68832"
  );

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const { mutateAsync: createOng } = useContractWrite(contract, "createOng");

  const { mutateAsync: updateCampaign } = useContractWrite(
    contract,
    "updateCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();
  console.log("address", address);

  const structureStatistics = (statistics) => ({
    totalCampaigns: statistics.totalCampaigns.toNumber(),
    totalOngs: statistics.totalOngs.toNumber(),
    totalDonations: parseInt(statistics.totalDonations._hex) / 10 ** 18,
    totalDonatots: statistics.totalDonatots.toNumber(),
  });

  const structuredCampaigns = (campaigns) => {
    campaigns.map((campaign) => ({
      id: campaign.id.toNumber(),
      owner: campaign.owner.toLowerCase(),
      title: campaign.title,
      description: campaign.description,
      timestamp: new Date(campaign.timestamp.toNumber()).getTime(),
      deadline: new Date(campaign.deadline.toNumber()).getTime(),
      date: toDate(campaign.timestamp.toNumber() * 1000),
      image: campaign.image,
      raised: parseInt(campaign.raised._hex) / 10 ** 18,
      cost: parseInt(campaign.cost._hex) / 10 ** 18,
      donations: campaign.donations,
      status: campaign.status,
    }));
  };

  const structuredDonators = (donators) => {
    donators.map((donator) => ({
      owner: donator.owner.toLowerCase(),
      refunding: donator.refunding,
      timestamp: new Date(donator.timestamp.toNumber() * 1000).toJSON(),
      amount: parseInt(donator.amount._hex) / 10 ** 18,
    }));
  };

  const toDate = (timestamp) => {
    const date = new Date(timestamp);
    const dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const mm =
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const createCampaignHandler = async (form) => {
    try {
      const data = await createCampaign({
        args: [
          form.title,
          form.description,
          form.image,
          form.cost,
          new Date(form.deadline).getTime(),
        ],
      });
      console.log("success", data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const createOngHandler = async (form) => {
    try {
      const data = await createOng({
        args: [form.name, form.description, form.image],
      });
      console.log("success", data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const updateCampaignHandler = async (form) => {
    try {
      const data = await updateCampaign({
        args: [
          form.id,
          form.title,
          form.description,
          form.image,
          new Date(form.deadline).getTime(),
        ],
      });
      console.log("success", data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const deleteCampaignHandler = async (id) => {
    try {
      // await contract.deleteCampaign(id);
      await contract.call("deleteCampaign", id);

      console.log("success", data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getCampaigns = async () => {
    try {
      //-------------------
      // const campaigns = await contract.call("getCampaigns");
      // const structCampaigns = structuredCampaigns(campaigns);
      // console.log("structCampaigns", structCampaigns);
      // return structCampaigns;
      //-------------------
      const campaigns = await contract.call("getCampaigns");
      const parsedCampaings = campaigns.map((campaign, i) => ({
        id: campaign.id.toNumber(),
        owner: campaign.owner.toLowerCase(),
        title: campaign.title,
        description: campaign.description,
        timestamp: new Date(campaign.timestamp.toNumber()).getTime(),
        deadline: new Date(campaign.deadline.toNumber()).getTime(),
        date: toDate(campaign.timestamp.toNumber() * 1000),
        image: campaign.image,
        raised: parseInt(campaign.raised._hex) / 10 ** 18,
        cost: parseInt(campaign.cost._hex) / 10 ** 18,
        donations: campaign.donations?.toNumber(),
        status: campaign.status,
      }));

      return parsedCampaings;
    } catch (e) {
      console.log("error", e);
    }
  };

  const getCampaignsStatistics = async () => {
    try {
      // const statistics = await contract.statistics();
      const statistics = await contract.call("statistics");
      const structStatistics = structureStatistics(statistics);

      return structStatistics;
    } catch (e) {
      console.log("error", e);
    }
  };

  const getCampaign = async (id) => {
    try {
      // const campaign = await contract.getCampaign(id);
      const campaign = await contract.call("getCampaign", [id]);
      const structCampaign = structuredCampaigns([campaign])[0];
      return structCampaign;
    } catch (e) {
      console.log("error", e);
      alert(JSON.stringify(e.message));
    }
  };

  const getUserCampaigns = async () => {
    console.log("adresa aici", address);
    const allCampaigns = await getCampaigns();

    const userCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address?.toLowerCase()
    );

    return userCampaigns;
  };

  const getDonators = async (id) => {
    try {
      const donators = await contract.call("getDonators", [id]);

      const parsedDonators = donators.map((donator) => [
        donator.owner.toLowerCase(),
        donator.refunding,
        new Date(donator.timestamp.toNumber() * 1000).toJSON(),
        parseInt(donator.amount._hex) / 10 ** 18,
      ]);
      return parsedDonators;
    } catch (e) {
      console.log("error", e);
      alert(JSON.stringify(e.message));
    }
  };

  const getCampaignsByDonator = async (address) => {
    const allCampaigns = await getCampaigns();

    const campaignsByDonator = [];

    for (let i = 0; i < allCampaigns.length; i++) {
      const donators = await getDonators(allCampaigns[i].id);

      const hasDonated = donators.some(
        (donator) => donator[0].toLowerCase() === address?.toLowerCase()
      );

      if (hasDonated) {
        campaignsByDonator.push(allCampaigns[i]);
      }
    }
    return campaignsByDonator;
  };

  const donateToCampaign = async (id, amountDonated) => {
    try {
      const amount = ethers.utils.parseEther(amountDonated);
      const data = await contract.call("donateToCampaign", id, {
        value: amount._hex,
      });

      return data;
    } catch (e) {
      console.log("error", e);
      alert(JSON.stringify(e.message));
    }
  };

  const getDonatedCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const donators = JSON.parse(localStorage.getItem("donators"));

    const donatedCampaigns = allCampaigns.filter((campaign) =>
      // idsDonatedTo?.includes(campaign.id) ? campaign : null
      donators[0] === address?.toLowerCase() ? campaign : null
    );

    return donatedCampaigns;
  };

  const payoutCampaign = async (id) => {
    try {
      const data = await contract.call("payoutCampaign", id);
      await getDonators(id);
      return data;
    } catch (e) {
      console.log("error", e);
      alert(JSON.stringify(e.message));
    }
  };

  //TODO: pt ong de facut getOngs, getOng si statisticsOng

  return (
    <Context.Provider
      value={{
        address,
        connect,
        contract,
        createCampaign: createCampaignHandler,
        createOng: createOngHandler,
        updateCampaign: updateCampaignHandler,
        deleteCampaign: deleteCampaignHandler,
        getCampaigns,
        getCampaignsStatistics,
        getCampaign,
        donateToCampaign,
        getDonators,
        payoutCampaign,
        getUserCampaigns,
        getDonatedCampaigns,
        getCampaignsByDonator,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
