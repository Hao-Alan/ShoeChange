import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  thayPlayerAction,
} from "../slice/counterSliceTuXi.js";

const Player = () => {
  const xucXac = useSelector((state) => state.counter.mangPlayer);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <div className="noiDung">
        <img
          src={xucXac.hinhAnh}
          alt={xucXac.hinhAnh}
          style={{ width: 50, transform: "rotate(220deg)" }}
        />
      </div>
      <div className="speech-bubble mb-2"></div>
      <img
        src="./img/BaiTapTuXi/player.png"
        alt="./img/BaiTapTuXi/player.png"
        style={{ width: 150 }}
        className="border border-warning border-5"
      />
      <div className="keobuabao mt-4">
        <div className="row">
          <div className="col-4">
            <button
              className="btn helllllo"
              onClick={() => {
                dispatch(thayPlayerAction("keo"));
              }}
            >
              <img
                src="./img/BaiTapTuXi/keo.png"
                alt="./img/BaiTapTuXi/keo.png"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="col-4">
            <button
              className="btn helllllo"
              onClick={() => {
                dispatch(thayPlayerAction("bua"));
              }}
            >
              <img
                src="./img/BaiTapTuXi/bua.png"
                alt="./img/BaiTapTuXi/bua.png"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="col-4">
            <button
              className="btn helllllo"
              onClick={() => {
                dispatch(thayPlayerAction("bao"));
              }}
            >
              <img
                src="./img/BaiTapTuXi/bao.png"
                alt="./img/BaiTapTuXi/bao.png"
                style={{ width: 50 }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
