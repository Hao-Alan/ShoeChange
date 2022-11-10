import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  thayPlayerAction,
  thayComputerAction,
} from "../slice/counterSliceTuXi.js";
const Computer = () => {
  const xucXac = useSelector((state) => state.counter.mangComputer);
  const dispatch = useDispatch();
  return (
    <div>
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
          src="./img/BaiTapTuXi/computer.png"
          alt="/img/BaiTapTuXi/bao.png./img/BaiTapTuXi/computer.png"
          style={{ width: 150, height: 215 }}
          className="border border-warning border-5"
        />
      </div>
    </div>
  );
};

export default Computer;
