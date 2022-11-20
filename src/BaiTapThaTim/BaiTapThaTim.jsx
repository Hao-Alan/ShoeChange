import React from "react";
import ModelXinhDep from "./ModelXinhDep";
import NutNhanThaTim from "./NutNhanThaTim";

const BaiTapThaTim = () => {
  return (
    <div className="container">
      <ModelXinhDep />
      <NutNhanThaTim className="row " />
    </div>
  );
};

export default BaiTapThaTim;
