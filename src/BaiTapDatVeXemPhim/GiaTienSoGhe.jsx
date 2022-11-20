import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  themGheDangDat,
  xoaGheDangDat,
} from "../slice/counterSliceVeXemPhim.js";

const GiaTienSoGhe = () => {
  const gheDangDat = useSelector((state) => state.counter.gheDangDat);

  const dispatch = useDispatch();

  return gheDangDat.map((item, index) => {
    return (
      <tr key={index} className="text-warning">
        <td>
          Ghế <span>{item.soGhe}</span>
        </td>
        <td>
          Giá <span>{item.gia.toLocaleString()}</span>
        </td>
        <td>
          <span
            className="text-danger"
            onClick={() => {
              dispatch(xoaGheDangDat(item));
            }}
            style={{ cursor: "pointer" }}
          >
            Xóa
          </span>
        </td>
      </tr>
    );
  });
};

export default GiaTienSoGhe;
