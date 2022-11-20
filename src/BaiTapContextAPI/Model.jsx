import React, { useContext } from "react";
import { AppContext } from "./Context/ModalContext";

const Model = () => {
  const { users, xxx } = useContext(AppContext);

  return (
    <div>
      <div className="card" style={{ width: "220px" }}>
        <img
          src="https://image.thanhnien.vn/w1024/Uploaded/2022/ycivopcg/2022_01_13/cau-trang-tien-2144.jpg"
          className="card-img-top"
          alt="123"
          style={{ width: "200px", height: "280px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            Số lượt thích ({users}) <i className="fa fa-heart text-danger"></i>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Model;
