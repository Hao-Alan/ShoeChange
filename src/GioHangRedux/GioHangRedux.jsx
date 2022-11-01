import React, { Component } from "react";

import { useSelector, useDispatch } from "react-redux";
import { GiamSoLuong, TangSoLuong, xoaGioHang } from "../slice/counterSlice";

// export default class GioHangRedux extends Component {
const GioHangRedux = () => {
  // const quantity = useSelector((state) => state.counterSlicex.quantity);

  const addedList = useSelector((state) => state.counterSlicex.ListAddedPhone);

  console.log("added list", addedList);
  const dispatch = useDispatch();

  //   console.log({ co unt });
  const tinhTongTien = () => {
    return addedList
      .reduce((tong, item, index) => {
        return (tong += item.giaBan * item.quantityx);
      }, 0)
      .toLocaleString();
  };
  return (
    <div className="container ">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog w-auto">
          <div
            className="modal-content "
            style={{ maxWidth: "700px", minWidth: "700px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ Hàng Của Bạn
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
                  <tr></tr>
                </thead>
                <tbody>
                  {addedList.map((productxx) => {
                    return (
                      <tr key={productxx.maSP}>
                        <td>{productxx.maSP}</td>
                        <td>{productxx.tenSP}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              dispatch(TangSoLuong(productxx));
                            }}
                          >
                            +
                          </button>
                          <img
                            src={productxx.hinhAnh}
                            alt={productxx.hinhAnh}
                            style={{ width: "50px", height: "50px" }}
                          />
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              dispatch(GiamSoLuong(productxx));
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td>{productxx.giaBan.toLocaleString()}</td>
                        {/* <td>{productxx.rom}</td> */}
                        <td>{productxx.quantityx}</td>
                        <td>
                          {(
                            productxx.quantityx * productxx.giaBan
                          ).toLocaleString()}
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              dispatch(xoaGioHang(productxx));
                            }}
                          >
                            Xoa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <th colSpan={5}></th>
                  <th>Tổng tiền</th>
                  <th>{tinhTongTien()}</th>
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
};

export default GioHangRedux;
