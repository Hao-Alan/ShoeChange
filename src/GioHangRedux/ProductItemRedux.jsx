import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, addProduct } from "../slice/counterSlice";
const ProductItemRedux = ({ product }) => {
  // console.log(propsx);
  // let { product } = propsx;
  const addedList = useSelector((state) => state.counterSlice.ListAddedPhone);
  console.log("added list", addedList);
  const dispatch = useDispatch();
  // console.log("quantiy as blala", quantity);

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
              dispatch(addProduct(product));
            }}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

// export default ProductItemRedux;
export default ProductItemRedux;
