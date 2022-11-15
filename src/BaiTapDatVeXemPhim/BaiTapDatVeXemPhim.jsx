import React from "react";
import "./BaiTapDatVeXemPhim.css";
// import GheNgoi from "./GheNgoi";
import GiaTienSoGhe from "./GiaTienSoGhe";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slice/counterSliceVeXemPhim.js";
import danhSachList from "../data/danhSachGhe.json";
import GheNgoi from "./GheNgoi";
const BaiTapDatVeXemPhim = () => {
  //   const duLieu = useSelector((state) => state.counter.mangDuLieu);
  const dispatch = useDispatch();

  const gheNgoiLayout = () => {
    return danhSachList.map((ghe, index) => {
      const renderGhe = () => {
        return ghe.danhSachGhe.map((gheNgoi, index) => {
          let cssGheDaDat = "";
          let disable = false;
          if (gheNgoi.daDat) {
            cssGheDaDat = "gheDaDat";
            disable = true;
          }
          return (
            <button
              disabled={disable}
              key={index}
              className={`gheChuaDat ${cssGheDaDat}`}
              onClick={() => {
                alert("hello all");
              }}
            >
              {gheNgoi.soGhe}
              {/* <GheNgoi gheNgoi={gheNgoi} /> */}
            </button>
          );
        });
      };

      const renderTong = () => {
        if (index === 0) {
          return ghe.danhSachGhe.map((gheNgoi, index) => {
            return (
              <span className="gheDaDatxx text-center" key={index}>
                {gheNgoi.soGhe}
              </span>
            );
          });
        } else {
          return <div>{renderGhe()}</div>;
        }
      };

      return (
        <div key={index} className="text-light">
          <div className="m-0">
            <span className=" textGhe align-items-center me-3 mb-1">
              {ghe.hang}
            </span>
            <button className="btn textGhe mb-0">{renderTong()}</button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="text-center datVeXemPhim">
      <div className="cover container-fluid">
        <div className="row">
          <div className="col-8">
            <h2 className="text-warning mt-2">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
            <div className="h5 text-light">Màn hình</div>
            <div className="monitor ms-5"></div>
            <div className="gheNgoi">{gheNgoiLayout()}</div>
          </div>
          <div className="col-4">
            <h5 className="text-light mt-2">DANH SÁCH GHẾ BẠN CHỌN</h5>
            <div className="text-start">
              <div className="text-light">
                <button className="btn btn-warning p-3 me-2 "></button>ghế đã
                đặt
              </div>
              <br />
              <div className="text-light">
                <button className="btn btn-primary border-warning  p-3 me-2"></button>
                ghế đang đặt
              </div>
              <br />
              <div className="text-light">
                <button className="btn btn-light border-warning  p-3 me-2"></button>
                ghế chưa đặt
              </div>
              <div className="table">
                <thead>
                  <tr>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <GiaTienSoGhe />
                </tbody>
                <tfoot></tfoot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapDatVeXemPhim;
