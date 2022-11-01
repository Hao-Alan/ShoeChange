import React from "react";
import BaiTapList from "./BaiTapList";
import ModalBaiTapLamLai from "./ModalBaiTapLamLai";

const BaiTapLamLai = () => {
  return (
    <div className="container text-center">
      <h2>Danh Sách Điện Thoại</h2>
      <div className="gioHangButton text-end">
        <span>
          Giỏ Hàng (0)
          <i class="fa fa-shopping-basket"></i>
        </span>
      </div>
      <BaiTapList />
      <ModalBaiTapLamLai />
    </div>
  );
};

export default BaiTapLamLai;
