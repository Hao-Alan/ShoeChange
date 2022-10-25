import React, { Component } from "react";

import { useSelector, useDispatch } from "react-redux";

// export default class GioHangRedux extends Component {
const GioHangRedux = () => {
  const quantity = useSelector((state) => state.counterSlice.quantity);
  const dispatch = useDispatch();

  //   console.log({ count });

  return (
    <div className="container">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
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
                <tbody></tbody>
                <tfoot></tfoot>
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
