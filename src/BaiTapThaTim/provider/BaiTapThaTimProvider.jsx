import React, { useState } from "react";
import { ThaTimContext } from "../context/ThaTimContext";

const BaiTapThaTimProvider = ({ children }) => {
  const [like, setLike] = useState([
    {
      id: 1,
      name: "Anh Hao",
      age: 65,
      img: "./img/NhanVat/hinh1.jpeg",
      like: 0,
    },
    {
      id: 2,
      name: "Anh Hung",
      age: 55,
      img: "./img/NhanVat/hinh2.jpeg",
      like: 0,
    },
    {
      id: 3,
      name: "Thuy Ngan",
      age: 45,
      img: "./img/NhanVat/hinh3.jpeg",
      like: 0,
    },
    {
      id: 4,
      name: "Hoang Loan",
      age: 35,
      img: "./img/NhanVat/hinh4.jpeg",
      like: 0,
    },
  ]);
  const [model, setModel] = useState({
    id: 1,
    name: "Anh Hao",
    age: 65,
    img: "./img/NhanVat/hinh1.jpeg",
    like: 0,
  });

  const tangSoTim = (model) => {
    const likeArray = [...like];
    let index = likeArray.findIndex((item) => item.id === model.id);
    // console.log(index);
    if (index !== -1) {
      likeArray[index].like += 1;
      setLike(likeArray);
    }
    // return setLike;
  };

  const thayModal = (item) => {
    setModel(item);
    // let Array = [...like];
    // let object = Array.find((girl) => girl.id === item.id);
    // setModel(object);
  };
  return (
    <div>
      <ThaTimContext.Provider value={{ like, model, tangSoTim, thayModal }}>
        {children}
      </ThaTimContext.Provider>
    </div>
  );
};

export default BaiTapThaTimProvider;
