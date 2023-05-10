import React from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const userType = () => {
  const [type, setType] = React.useState("ong");
  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <UserContext.Provider value={[type, setType]}>
      <MainLayout />
    </UserContext.Provider>
  );
};
