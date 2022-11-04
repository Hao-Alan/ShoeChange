import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { xoaSanPham, tangSoLuong, giamSoLuong } from "../slice/counterSliceNew";
const ModalBaiTapLamLai = () => {
  const newGioHang = useSelector((state) => state.counterSliceNew.gioHang);
  const dispatch = useDispatch();
  const renderBody = () => {
    return newGioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img
              src={item.hinhAnh}
              alt={item.hinhAnh}
              style={{ width: "50px", height: "50px" }}
            />
          </td>
          <td>{item.giaBan}</td>
          <td>
            <button
              className="btn btn-primary me-1"
              onClick={() => {
                dispatch(tangSoLuong(item));
              }}
            >
              +
            </button>
            {item.quantity}
            <button
              className="btn btn-primary ms-1"
              onClick={() => {
                dispatch(giamSoLuong(item));
              }}
            >
              -
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(xoaSanPham(item));
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div>
        {/* Modal */}
        <div
          className="modal fade "
          id="helloe"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ minWidth: "700px" }}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Danh Sách Sản Phẩm
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
                      <th>Tên SP</th>
                      <th>Hình ảnh</th>
                      <th>Giá Bán</th>
                      <th>Số lượng</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>{renderBody()}</tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={3}></th>
                      <th>Tổng Tiền</th>
                      <th colSpan={2}>
                        {newGioHang
                          .reduce((tong, item, index) => {
                            return (tong += item.quantity * item.giaBan);
                          }, 0)
                          .toLocaleString()}
                      </th>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBaiTapLamLai;
