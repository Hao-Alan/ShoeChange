import React from "react";

const Content = () => {
  return (
    <div className="text-center">
      <div className="noiDungText">
        <h2 className="text-warning display-5">bạn thua !!!</h2>
        <h2 className="text-success">
          Số bàn thắng: <span className="text-warning">0</span>
        </h2>
        <h2 className="text-success">
          Tổng số bàn chơi: <span className="text-warning">0</span>
        </h2>
      </div>
      <button className="btn btn-success">Play game</button>
    </div>
  );
};

export default Content;
