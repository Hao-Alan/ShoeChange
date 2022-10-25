import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";
const ProductItemRedux = (props) => {
  let { product } = props;

  const quantity = useSelector((state) => state.counterSlice.quantity);
  const dispatch = useDispatch();
  console.log("quantiy as blala", quantity);

  return (
    <div>
      <div className="card">
        <img
          src={product.hinhAnh}
          className="card-img-top pt-2"
          style={{ maxHeight: "200px", width: "200px" }}
          alt={product.hinhAnh}
        />
        <div className="card-body">
          <h5 className="card-title">{product.tenSP}</h5>
          <p className="card-text">{product.giaBan.toLocaleString()}</p>
          <button
            href="#"
            className="btn btn-primary"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemRedux;
