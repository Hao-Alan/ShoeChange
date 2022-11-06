import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  thayTrangThaiTaiXiu,
  playgame,
} from "../slice/counterSliceXucXac";

const ThongTinDaChon = () => {
  const xucXac = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="textContent">
      <h2>
        BẠN CHỌN:{" "}
        <span className="text-primary display-5">
          {xucXac.xucXacStatus ? "TÀI" : "XỈU"}
        </span>
      </h2>
      <h2>
        Số Bàn Thắng: <span className="text-success">{xucXac.banThang}</span>
      </h2>
      <h2>
        Tổng số bàn chơi:{" "}
        <span className="text-danger">{xucXac.soBanChoi}</span>
      </h2>
      <button
        className="btn btn-success p-2"
        onClick={() => {
          dispatch(playgame());
        }}
      >
        Play game
      </button>
    </div>
  );
};

export default ThongTinDaChon;
