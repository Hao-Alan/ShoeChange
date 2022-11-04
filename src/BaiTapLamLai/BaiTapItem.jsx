import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, themGioHang } from "../slice/counterSliceNew";
const BaiTapItem = ({ sanPham }) => {
  //   console.log(sanPham);
  //   const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card pt-3 mt-3">
        <img
          src={sanPham.hinhAnh}
          className="card-img-top"
          alt={sanPham.hinhAnh}
          style={{ width: "200px", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{sanPham.tenSP}</h5>
          <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
          <button
            href="#"
            className="btn btn-primary"
            onClick={() => {
              dispatch(themGioHang(sanPham));
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaiTapItem;
