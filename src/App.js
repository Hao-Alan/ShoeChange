import React, { Component } from "react";
import DemoProps from "./props/DemoProps";
import ProductList from "./props/ProductList";
import dataJson from "./data/data.json";
import DanhSachSanPham from "./props/DanhSachSanPham";
import ExerciseCarStore from "./props/ExerciseCarStore/ExerciseCarStore";
import ExerciseCart from "./props/ExceriseCart/ExerciseCart";
import Test from "./props/ExceriseCart/test";
import BaiTapGioHangRedux from "./GioHangRedux/BaiTapGioHangRedux";
import BaiTapLamLai from "./BaiTapLamLai/BaiTapLamLai";
import TotalAgain from "./BaiTapAgain/TotalAgain";
import BaiTapGameXucXac from "./BaiTapGameXucXac/BaiTapGameXucXac";
import BaiTapXuXi from "./BaiTapTuXi/BaiTapTuXi";
import BaiTapTuXi from "./BaiTapTuXi/BaiTapTuXi";
import BaiTapDatVeXemPhim from "./BaiTapDatVeXemPhim/BaiTapDatVeXemPhim";
import BaiTapContextAPI from "./BaiTapContextAPI/BaiTapContextAPI";
import ModalStateProvider, {
  AppContext,
} from "./BaiTapContextAPI/Provider/ModalStateProvider";
import BaiTapThaTim from "./BaiTapThaTim/BaiTapThaTim";
import BaiTapThaTimProvider from "./BaiTapThaTim/provider/BaiTapThaTimProvider";
// import  Test from './props/ExceriseCart/test'

export default class App extends Component {
  render() {
    return (
      // <ExerciseCarStore />
      // <DanhSachSanPham />
      // <ExerciseCart />
      // <Test />
      // <BaiTapLamLai />
      // <TotalAgain />
      // <BaiTapGameXucXac />
      // <BaiTapTuXi />

      <div>
        <BaiTapThaTimProvider>
          <BaiTapThaTim />
        </BaiTapThaTimProvider>
      </div>
    );
  }
}
