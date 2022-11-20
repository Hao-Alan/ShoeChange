import React, { useContext } from "react";
import { ThaTimContext } from "./context/ThaTimContext";

const NutNhanThaTim = () => {
  const { like, model, tangSoTim, thayModal } = useContext(ThaTimContext);
  console.log(like);
  return (
    <div className="row mt-3">
      {like.map((item, index) => {
        console.log({ item });
        return (
          <div className="col-3" key={index}>
            <div className="card" style={{ width: "200px" }}>
              <img
                src={item.img}
                className="card-img-top"
                alt={item.img}
                style={{ width: "150px", height: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Tên : {item.name}</h5>
                <p className="card-text">Tuổi: {item.age}</p>
                <p style={{ color: "red" }}>
                  Số lượt thích( {item.like} )
                  <i class="fa fa-heart" style={{ fontSize: "25px" }}></i>{" "}
                </p>
                <button
                  className="btn btn-warning ms-4"
                  onClick={() => {
                    tangSoTim(item);
                    thayModal(item);
                  }}
                >
                  thích <i class="fa fa-heart" style={{ fontSize: "25px" }}></i>{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NutNhanThaTim;
