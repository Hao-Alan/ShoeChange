import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slice/counterSliceXucXac";
const NutXiNgau = () => {
  const xucXac = useSelector((state) => state.counter.xucXac);
  const dispatch = useDispatch();
  const renderXucXac = () => {
    return xucXac.map((xucXac, index) => {
      return (
        <div className="col-4" key={index}>
          <img
            src={xucXac.hinhAnh}
            alt={xucXac.hinhAnh}
            style={{ width: "52px" }}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <div className="row">{renderXucXac()}</div>
    </div>
  );
};

export default NutXiNgau;
