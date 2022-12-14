import React, { Component } from "react";

// console.log(this.props);
export default class CartModal extends Component {
  renderTable = () => {
    let { defaultss } = this.props;
    console.log(defaultss);
    return defaultss.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              style={{ width: "40px", height: "40px" }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, 1);
              }}
            >
              +
            </button>
            {item.soLuong}
            <button
              className="btn btn-primary ms-3"
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{item.donGia.toLocaleString()}</td>
          <td>{(item.soLuong * item.donGia).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(item.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
    // return <h1>hihi</h1>;
  };
  render() {
    // let { defaultss } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ minWidth: "800px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  GIỎ HÀNG
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTable()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>tổng tiền</td>
                      <td>{this.props.tinhTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
