import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { SanPhamChiTiet } = this.props;
    let { hamXemChiTiet } = this.props;

    return (
      <div className="card text-center" style={{ width: "18rem" }}>
        <img
          src={SanPhamChiTiet.hinhAnh}
          className="card-img-top"
          alt={SanPhamChiTiet.hinhAnh}
          style={{ width: "200px", height: "200px", marginLeft: "20px" }}
        />
        <div className="card-body">
          <h3 className="card-title">{SanPhamChiTiet.tenSP}</h3>
          <p className="card-text">
            {SanPhamChiTiet.giaBan.toLocaleString()} VND
          </p>
          <button
            className="btn btn-success"
            onClick={() => {
              hamXemChiTiet(SanPhamChiTiet);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
