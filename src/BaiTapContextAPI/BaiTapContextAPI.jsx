import React, { useContext } from "react";
import { useState } from "react";
import Model from "./Model";
import { AppContext } from "./Context/ModalContext";
import ThaTim from "./ThaTim";

const BaiTapContextAPI = () => {
  const { users, xxx } = useContext(AppContext);
  console.log(users);
  //   console.log(mangalo);

  return (
    <div className="container text-center justify-content-cennter ">
      <Model />
      <ThaTim />
    </div>
  );
};

export default BaiTapContextAPI;
