import React, { useState } from "react";
import { AppContext } from "../Context/ModalContext";

const ModalStateProvider = ({ children }) => {
  // const [ users, setusers ] = useState(0);
  const [users, setUsers] = useState(0);

  const xxx = () => {
    setUsers(users + 1);
  };
  return (
    <AppContext.Provider value={{ users, xxx }}>{children}</AppContext.Provider>
  );
};

export default ModalStateProvider;
