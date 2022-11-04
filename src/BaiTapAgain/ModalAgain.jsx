import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  themVaoGio,
  xoaGioHang,
  tangSoLuong,
  giamSoLuong,
} from "../slice/ counterSliceNew1";

const ModalAgain = () => {
  const updatedList = useSelector((state) => state.counter.gioHang);
  const dispatch = useDispatch();
  const renderTableBody = () => {
    return updatedList.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.tenSP}</td>
          <td>{item.maSP}</td>
          <td>
            <img
              src={item.hinhAnh}
              alt={item.hinhAnh}
              style={{ width: "50px", height: "50px" }}
            />
          </td>
          <td>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                dispatch(tangSoLuong(item));
              }}
            >
              +
            </button>
            {item.soLuong}
            <button
              className="btn btn-primary ms-3"
              onClick={() => {
                dispatch(giamSoLuong(item));
              }}
            >
              -
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(xoaGioHang(item));
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
          id="exampleModal3"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " style={{ maxWidth: "700px" }}>
            <div
              className="modal-content text-center"
              style={{ minWidth: "700px" }}
            >
              <div className="modal-header ">
                <h5 className="modal-title" id="exampleModalLabel">
                  Danh Sách Sản Phẩm đã chọn
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Tên SP</th>
                      <th>Mã SP</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Giá bán</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableBody()}</tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={3}></th>
                      <th colSpan={2}>Tổng Tiền </th>
                      <th>
                        {updatedList
                          .reduce((tong, item, index) => {
                            return (tong += item.soLuong * item.giaBan);
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

export default ModalAgain;
