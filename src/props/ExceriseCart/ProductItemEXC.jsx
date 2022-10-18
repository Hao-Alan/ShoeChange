// import React, { Component } from "react";

// export default class ProductItemEXC extends Component {
import React, { Component } from "react";
export default class ProductItemEXC extends Component {
  render() {
    let { SanPhamChiTiet } = this.props;

    return (
      <div>
        <div className="card text-center">
          <img
            src={SanPhamChiTiet.hinhAnh}
            className="card-img-top"
            alt={SanPhamChiTiet.hinhAnh}
            style={{ width: "200px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{SanPhamChiTiet.tenSP}</h5>
            <p className="card-text">
              {SanPhamChiTiet.giaBan.toLocaleString()}
            </p>
            <button
              href="#"
              className="btn btn-primary"
              onClick={() => {
                this.props.themVaoGio(SanPhamChiTiet);
              }}
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    );
  }
}
