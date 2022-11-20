import React, { useContext } from "react";
import { ThaTimContext } from "./context/ThaTimContext";

const ModelXinhDep = () => {
  const { like, model } = useContext(ThaTimContext);
  //   console.log(like);
  return (
    <div>
      <div className="card text-center bg-warning">
        <img
          src={model.img}
          className="card-img-top"
          alt={model.img}
          style={{ width: "230px", height: "200px", margin: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">Tên : {model.name}</h5>
          <p className="card-text">Tuổi: {model.age}</p>
          <p style={{ color: "red" }}>
            Số lượt thích( {model.like} )
            <i className="fa fa-heart" style={{ fontSize: "25px" }}></i>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelXinhDep;
