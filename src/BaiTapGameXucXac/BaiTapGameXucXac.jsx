import React from "react";
import "./BaiTapGameXucXac.css";
import NutXiNgau from "./NutXiNgau";
import ThongTinDaChon from "./ThongTinDaChon";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  thayTrangThaiTaiXiu,
} from "../slice/counterSliceXucXac";

// import logo from "./assets/bgGame.png";
const BaiTapGameXucXac = () => {
  const xucXac = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="gameDoXucXac text-center">
      <div className="content container mt-3 ">
        <h2 className="display-4">GAME ĐỔ XÚC XẮC</h2>
        <div className="row taiXiu mt-2">
          <div className="col-4">
            <button
              className="  p-5 fs-3 nutNhanTaiXiu"
              onClick={() => {
                dispatch(thayTrangThaiTaiXiu(true));
              }}
            >
              TÀI
            </button>
          </div>
          <div className="col-3 mt-3">
            <NutXiNgau />
          </div>
          <div className="col-4 ">
            <button
              className="p-5 fs-3 nutNhanTaiXiu"
              onClick={() => {
                dispatch(thayTrangThaiTaiXiu(false));
              }}
            >
              XỈU
            </button>
          </div>
          <div className="row mt-4">
            <ThongTinDaChon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapGameXucXac;
