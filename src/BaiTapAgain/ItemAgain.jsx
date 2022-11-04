import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, themVaoGio } from "../slice/ counterSliceNew1";

const ItemAgain = ({ product }) => {
  //   const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="mt-3">
      <div className="card text-center pt-2">
        <img
          src={product.hinhAnh}
          className="card-img-top"
          alt={product.hinhAnh}
          style={{ width: "200px", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.tenSP}</h5>
          <p className="card-text">{product.giaBan.toLocaleString()}</p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => {
              dispatch(themVaoGio(product));
            }}
          >
            Thêm vào giỏ
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemAgain;
