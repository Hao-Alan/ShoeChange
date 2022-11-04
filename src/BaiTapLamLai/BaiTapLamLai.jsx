import React from "react";
import BaiTapList from "./BaiTapList";
import ModalBaiTapLamLai from "./ModalBaiTapLamLai";
import { useSelector, useDispatch } from "react-redux";

const BaiTapLamLai = () => {
  const newGioHang = useSelector((state) => state.counterSliceNew.gioHang);
  return (
    <div className="container text-center">
      <h2>Danh Sách Điện Thoại</h2>
      <div className="gioHangButton text-end text-primary">
        <span
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal"
          data-bs-target="#helloe"
        >
          Giỏ Hàng (
          {newGioHang.reduce((tong, item, index) => {
            return (tong += item.quantity);
          }, 0)}
          ) <i class="fa fa-shopping-basket"></i>
        </span>
      </div>
      <BaiTapList />
      <ModalBaiTapLamLai />
    </div>
  );
};

export default BaiTapLamLai;
