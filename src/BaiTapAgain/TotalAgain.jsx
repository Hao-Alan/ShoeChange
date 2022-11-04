import React from "react";
import ListAgain from "./ListAgain";
import ModalAgain from "./ModalAgain";
import { useSelector, useDispatch } from "react-redux";

const TotalAgain = () => {
  const updatedList = useSelector((state) => state.counter.gioHang);

  return (
    <div className="container text-center">
      <h2>Danh Sách Sản Phẩm</h2>
      <div className="buttonGioHang text-end text-success">
        <span data-bs-toggle="modal" data-bs-target="#exampleModal3">
          Giỏ hàng ({" "}
          {updatedList.reduce((tong, item, index) => {
            return (tong += item.soLuong);
          }, 0)}{" "}
          ) <i class="fa fa-shopping-basket"></i>
        </span>
      </div>
      <ListAgain />
      <ModalAgain />
    </div>
  );
};

export default TotalAgain;
