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
  xoaGioHang = (SP) => {
    console.log(SP);
    let index = this.state.currentPhone.findIndex(
      (quanque) => quanque.maSP === SP
    );
    if (index !== -1) {
      this.state.currentPhone.splice(index, 1);
    }
    this.setState({
      currentPhone: this.state.currentPhone,
    });
  };
  tangGiamSoLuong = (maSP, number) => {
    let gioHang = [...this.state.currentPhone];

    let index = gioHang.findIndex((sanPham) => sanPham.maSP === maSP);
    if (index !== -1) {
      if (gioHang[index].soLuong <= 1 && number === -1) {
        alert("so luong nho nhat phai la 1");
        return;
      }
      gioHang[index].soLuong += number;
    }
    this.setState({
      currentPhone: gioHang,
    });
  };

  // tinhTongSoLuong = () => {
  //   let tongSoLuong = 0;
  //   for (let index = 0; index < this.state.currentPhone.length; index++) {
  //     let SP = this.state.currentPhone[index];
  //     tongSoLuong += SP.soLuong;
  //   }
  //   return tongSoLuong;
  // };
  tinhTongSoLuong = () => {
    return this.state.currentPhone.reduce((tong, item, index) => {
      return (tong += item.soLuong);
    }, 0);
    // return tongSoLuong;
  };
  tinhTongTien = () => {
    let { currentPhone } = this.state;
    return currentPhone
      .reduce((tong, item, index) => {
        return (tong += item.soLuong * item.donGia);
      }, 0)
      .toLocaleString();
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
              ({this.tinhTongSoLuong()}) Giỏ Hàng{" "}
            </b>
          </span>
        </div>
        <CartModal
          xoaGioHang={this.xoaGioHang}
          defaultss={this.state.currentPhone}
          tangGiamSoLuong={this.tangGiamSoLuong}
          tinhTongTien={this.tinhTongTien}
        />
        <ProductListEXC themVaoGio={this.themVaoGio} />
      </div>
    );
  }
}
