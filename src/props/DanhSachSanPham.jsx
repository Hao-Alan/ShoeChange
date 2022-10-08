import React, { Component } from "react";

export default class DanhSachSanPham extends Component {
  mangDienThoai = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    currentProduct: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  xemChiTiet = (sanPhamChon) => {
    this.setState({
      currentProduct: sanPhamChon,
    });
  };
  renderSanPham = () => {
    return this.mangDienThoai.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src={item.hinhAnh}
              className="card-img-top"
              alt={item.hinhAnh}
              style={{ width: "200px", height: "200px", marginLeft: "20px" }}
            />
            <div className="card-body">
              <h3 className="card-title">{item.tenSP}</h3>
              <p className="card-text">{item.giaBan}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.xemChiTiet(item);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Danh Sách Sản Phẩm</h2>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-4">
            <h3>VinSmart Live</h3>
            <img
              src={this.state.currentProduct.hinhAnh}
              alt={this.state.currentProduct.hinhAnh}
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{this.state.currentProduct.manHinh}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{this.state.currentProduct.heDieuHanh}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Camera trước</th>
                  <td>{this.state.currentProduct.cameraTruoc}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Camera sau</th>
                  <td>{this.state.currentProduct.cameraSau}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Ram</th>
                  <td>{this.state.currentProduct.ram}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Rom</th>
                  <td>{this.state.currentProduct.rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
