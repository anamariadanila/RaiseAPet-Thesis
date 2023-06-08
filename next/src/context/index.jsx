import React, { createContext, useContext, useEffect, useState } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  // const { contract } = useContract(
  //   "0xFd868dE190a58cd6Acf3D6C1cAD05D9aD455a8e9"
  // );
  //contract final cu sepolia OngContractFinal

  const { contract } = useContract(
    "0x5E319C15bBd1B1991e5E0C5ae01363B9507F282A"
  );
  //contract final cu sepolia OngContractFinal2

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const { mutateAsync: createOng } = useContractWrite(contract, "createOng");

  const { mutateAsync: updateCampaign } = useContractWrite(
    contract,
    "updateCampaign"
  );

  const { mutateAsync: updateOng } = useContractWrite(contract, "updateOng");

  const address = useAddress();
  const connect = useMetamask();

  const [totalCampaigns, setTotalCampaigns] = useState(2);
  const [totalOngs, setTotalOngs] = useState(1);
  const [totalDonations, setTotalDonations] = useState(0.02);
  const [totalDonators, setTotalDonators] = useState(1);

  const structureStatistics = (statistics) => ({
    totalCampaigns: statistics.totalCampaigns.toNumber(),
    // totalOngs: statistics.totalOngs.toNumber(),
    totalDonations: parseInt(statistics.totalDonations._hex) / 10 ** 18,
    totalDonatots: statistics.totalDonators.toNumber(),
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

  const structuredOngs = (ongs) => {
    ongs.map((ong) => ({
      id: ong.id.toNumber(),
      owner: ong.owner.toLowerCase(),
      name: ong.name,
      description: ong.description,
      image: ong.image,
      timestamp: new Date(ong.timestamp.toNumber()).getTime(),
      raised: parseInt(ong.raised._hex) / 10 ** 18,
      donations: ong.donations,
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

      setTotalCampaigns(totalCampaigns + 1);
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
      setTotalOngs(totalOngs + 1);
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

  const updateOngHandler = async (form) => {
    try {
      const data = await updateOng({
        args: [form.id, form.name, form.description, form.image],
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

  const deleteOngHandler = async (id) => {
    try {
      // await contract.deleteOng(id);
      await contract.call("deleteOng", id);

      console.log("success", data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getCampaignsStatistics = async () => {
    try {
      // const stats = await contract.statistics();
      const stats = await contract?.call("getStatistics");
      const structStatistics = {
        totalCampaigns: stats?.totalCampaigns,
        // totalOngs: statistics.totalOngs.toNumber(),
        totalDonations: parseInt(stats?.totalDonations._hex) / 10 ** 18,
        totalDonatots: stats?.totalDonators.toNumber(),
      };

      return structStatistics;
    } catch (e) {
      console.log("error", e);
    }
  };

  const getCampaigns = async () => {
    try {
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

      getCampaignsStatistics();

      return parsedCampaings;
    } catch (e) {
      console.log("error", e);
    }
  };

  const getCampaign = async (id) => {
    try {
      const campaign = await contract.call("getCampaign", [id]);
      const structCampaign = structuredCampaigns([campaign])[0];
      return structCampaign;
    } catch (e) {
      console.log("error", e);
      // alert(JSON.stringify(e.message));
      alert("Campaigns not found. Something went wrong");
    }
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const userCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address?.toLowerCase()
    );

    return userCampaigns;
  };

  const getCampaignsByOwner = async (address2) => {
    const allCampaigns = await getCampaigns();

    const campaignsByOwner = allCampaigns.filter(
      (campaign) => campaign.owner === address2?.toLowerCase()
    );

    return campaignsByOwner;
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
      alert("Campaign's donators not found. Something went wrong");
    }
  };

  const getDonatorsOng = async (id) => {
    try {
      const donators = await contract.call("getDonatorsOng", [id]);

      const parsedDonators = donators.map((donator) => [
        donator.owner.toLowerCase(),
        donator.refunding,
        new Date(donator.timestamp.toNumber() * 1000).toJSON(),
        parseInt(donator.amount._hex) / 10 ** 18,
      ]);

      return parsedDonators;
    } catch (e) {
      console.log("error", e);
      alert("ONG's donators not found. Something went wrong");
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
      setTotalDonations(totalDonations + amountDonated);
      setTotalDonators(totalDonators + 1);
      return data;
    } catch (e) {
      console.log("error", e);
      alert("You declined the transaction");
    }
  };

  const donateToOng = async (id, amountDonated) => {
    try {
      const amount = ethers.utils.parseEther(amountDonated);
      const data = await contract.call("donateToOng", id, {
        value: amount._hex,
      });
      setTotalDonations(totalDonations + amountDonated);
      setTotalDonators(totalDonators + 1);
      return data;
    } catch (e) {
      console.log("error", e);
      alert("You declined the transaction");
    }
  };

  const getDonatedCampaigns = async () => {
    const allCampaigns = await getCampaigns();

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
      alert("Campaign can not be paid out. Something went wrong");
    }
  };

  const getOngs = async () => {
    try {
      const ongs = await contract.call("getOngs");
      const parsedOngs = ongs.map((ong) => ({
        id: ong.id.toNumber(),
        owner: ong.owner.toLowerCase(),
        name: ong.name,
        description: ong.description,
        image: ong.image,
        timestamp: new Date(ong.timestamp.toNumber()).getTime(),
        raised: parseInt(ong.raised._hex) / 10 ** 18,
        status: ong.status,
      }));
      return parsedOngs;
    } catch (e) {
      console.log("error", e);
    }
  };

  const getOng = async (id) => {
    try {
      const ong = await contract.call("getOng", [id]);
      const structOng = structuredOngs([ong])[0];
      return structOng;
    } catch (e) {
      console.log("error", e);
      alert("ONG not found. Something went wrong");
    }
  };

  const getOngsByOwner = async (address2) => {
    const allOngs = await getOngs();

    const ongsByOwner = allOngs.filter(
      (ong) => ong.owner === address2?.toLowerCase()
    );

    return ongsByOwner;
  };

  const getOngsByDonator = async (address) => {
    const allOngs = await getOngs();

    const ongsByDonator = [];

    for (let i = 0; i < allOngs.length; i++) {
      const donators = await getDonatorsOng(allOngs[i].id);

      const hasDonated = donators.some(
        (donator) => donator[0].toLowerCase() === address?.toLowerCase()
      );

      if (hasDonated) {
        ongsByDonator.push(allOngs[i]);
      }

      return ongsByDonator;
    }
  };

  useEffect(() => {
    setTotalCampaigns(totalCampaigns);
    setTotalOngs(totalOngs);
    setTotalDonations(totalDonations);
    setTotalDonators(totalDonators);
  }, [totalCampaigns, totalOngs, totalDonations, totalDonators]);

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
        totalCampaigns,
        totalDonations,
        totalDonators,
        getOngs,
        getDonatorsOng,
        deleteOng: deleteOngHandler,
        updateOng: updateOngHandler,
        donateToOng,
        getOng,
        getOngsByOwner,
        getOngsByDonator,
        getCampaignsByOwner,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
