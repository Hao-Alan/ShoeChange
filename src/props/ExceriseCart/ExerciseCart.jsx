import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductListEXC from "./ProductListEXC";

export default class ExerciseCart extends Component {
  state = {
    currentPhone: [
      { maSP: 1, hinhAnh: "", tenSP: "Tên mặc định", soLuong: 1, donGia: 2000 },
    ],
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Danh Sách Sản Phẩm</h2>
        <div className=" m-3 text-end">
          <span
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ cursor: "pointer" }}
          >
            <b>
              <i
                className="fa fa-cart-arrow-down"
                style={{ fontSize: "20px", color: "purple" }}
              ></i>{" "}
              (0) Giỏ Hàng{" "}
            </b>
          </span>
        </div>
        <CartModal defaultss={this.state.currentPhone} />
        <ProductListEXC />
      </div>
    );
  }
}
