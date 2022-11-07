import React from "react";

const Computer = () => {
  return (
    <div>
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
          src="./img/BaiTapTuXi/computer.png"
          alt="./img/BaiTapTuXi/computer.png"
          style={{ width: 150, height: 215 }}
          className="border border-warning border-5"
        />
      </div>
    </div>
  );
};

export default Computer;
