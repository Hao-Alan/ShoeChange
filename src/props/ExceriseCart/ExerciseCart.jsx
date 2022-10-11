import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductListEXC from "./ProductListEXC";

export default class ExerciseCart extends Component {
  state = {
    currentPhone: [],
  };
  themVaoGio = (sanPham) => {
    // console.log(sanPham);
    let spGioHang = {
      maSP: sanPham.maSP,
      hinhAnh: sanPham.hinhAnh,
      tenSP: sanPham.tenSP,
      soLuong: 1,
      donGia: sanPham.giaBan,
    };
    // this.state.currentPhone.push(spGioHang);
    let index = this.state.currentPhone.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );

    if (index != -1) {
      this.state.currentPhone[index].soLuong += 1;
    } else {
      this.state.currentPhone.push(spGioHang);
    }
    // let gioHangCapNhat = [...this.state.currentPhone, spGioHang];
    this.setState({
      currentPhone: this.state.currentPhone,
    });
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
        <ProductListEXC themVaoGio={this.themVaoGio} />
      </div>
    );
  }
}
