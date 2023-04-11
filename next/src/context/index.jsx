import React, { createContext, useContext } from "react";
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
    // "0x22723a365b1fa71E7fD331A59cC4Fa1798Cc7D7E"
    "0x0ac3f1fA80a3Abcc68907178727f15eBec396aA8"
  );
  const address = useAddress();
  const connectWallet = useMetamask();

  const { mutateAsync: createCause } = useContractWrite(
    contract,
    "createCause"
  );

  const showCause = async (formData) => {
    try {
      const data = await createCause([
        address,
        formData.title,
        formData.description,
        formData.goal,
        new Date(formData.deadline).getTime(),
        formData.image,
        formData.category,
        formData.ownerName,
        formData.ONGDescription,
      ]);
      console.log("succes", data);
    } catch (err) {
      console.log("eroare", err);
    }
  };

  return (
    <Context.Provider
      value={{
        address,
        contract,
        createCause: showCause,
        connectWallet,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
