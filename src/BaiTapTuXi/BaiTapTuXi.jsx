import React from "react";
import "./BaiTapTuXi.css";
import Computer from "./Computer";
import Content from "./Content";
import Player from "./Player";
const BaiTapTuXi = () => {
  return (
    <div className="gameTuXi">
      <div className="container ">
        <div className="row mt-4">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <Content />
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapTuXi;
