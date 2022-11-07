import React from "react";

const Player = () => {
  return (
    <div className="text-center">
      <div className="noiDung">
        <img
          src="./img/BaiTapTuXi/keo.png"
          alt="./img/BaiTapTuXi/keo.png"
          style={{ width: 50, transform: "rotate(220deg)" }}
        />
      </div>
      <div className="speech-bubble mb-2"></div>
      <img
        src="./img/BaiTapTuXi/player.png"
        alt="./img/BaiTapTuXi/player.png"
        style={{ width: 150 }}
        className="border border-warning border-5"
      />
      <div className="keobuabao mt-4">
        <div className="row">
          <div className="col-4">
            <button className="btn">
              <img
                src="./img/BaiTapTuXi/keo.png"
                alt="./img/BaiTapTuXi/keo.png"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="col-4">
            <button className="btn">
              <img
                src="./img/BaiTapTuXi/bua.png"
                alt="./img/BaiTapTuXi/bua.png"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="col-4">
            <button className="btn">
              <img
                src="./img/BaiTapTuXi/bao.png"
                alt="./img/BaiTapTuXi/bao.png"
                style={{ width: 50 }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
