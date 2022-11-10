// import { set } from "immer/dist/internal.js";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  thayPlayerAction,
  thayComputerAction,
  thayContent,
} from "../slice/counterSliceTuXi.js";
const Content = () => {
  const xucXac = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  //   let hello = () => {
  //     let count = 0;
  //     let xxx = setInterval(() => {
  //       dispatch(thayComputerAction());
  //       count++;
  //       if (count > 5) {
  //         clearInterval(xxx);
  //       }
  //     }, 200);
  //   };

  const hello = () => {
    let count = 0;
    const temp = setInterval(() => {
      count++;
      dispatch(thayComputerAction());
      if (count > 4) {
        clearInterval(temp);
        dispatch(thayContent());
      }
    }, 250);
  };
  return (
    <div className="text-center">
      <div className="noiDungText">
        <h2 className="text-warning display-5">{xucXac.content}</h2>
        <h2 className="text-success">
          Số bàn thắng:{" "}
          <span className="text-warning">{xucXac.soBanThang}</span>
        </h2>
        <h2 className="text-success">
          Tổng số bàn chơi:{" "}
          <span className="text-warning">{xucXac.tongSoBan}</span>
        </h2>
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          hello();
        }}
      >
        Play game
      </button>
    </div>
  );
};

export default Content;
