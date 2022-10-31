import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import ProductListRedux from "./ProductListRedux";
import { useSelector, useDispatch } from "react-redux";
import { tongSoLuong } from "../slice/counterSlice";

const BaiTapGioHangRedux = () => {
  const ListPhone = useSelector((state) => state.counterSlicex.ListAddedPhone);
  const tinhTong = () =>
    ListPhone.reduce((tong, item, index) => {
      return (tong += item.quantityx);
    }, 0);

  const dispatch = useDispatch();
  return (
    <div className="container">
      <h3>Danh Sach Sản Phẩm</h3>
      <div className="shoppingCart text-end text-warning p-3">
        <span
          onClick={() => {}}
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa fa-shopping-cart"></i> ({tinhTong()}) shopping Cart
        </span>
      </div>
      <ProductListRedux />
      <GioHangRedux />
    </div>
  );
};

export default BaiTapGioHangRedux;
