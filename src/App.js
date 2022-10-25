import React, { Component } from 'react'
import DemoProps from './props/DemoProps'
import ProductList from './props/ProductList'
import dataJson from "./data/data.json"
import DanhSachSanPham from './props/DanhSachSanPham'
import ExerciseCarStore from './props/ExerciseCarStore/ExerciseCarStore'
import ExerciseCart from './props/ExceriseCart/ExerciseCart'
import Test from './props/ExceriseCart/test'
import BaiTapGioHangRedux from './GioHangRedux/BaiTapGioHangRedux'
// import  Test from './props/ExceriseCart/test'

export default class App extends Component {
  render() {
    return (
      // <ExerciseCarStore />
      // <DanhSachSanPham />
      // <ExerciseCart />
      // <Test />
      <BaiTapGioHangRedux />
    )
  }
}
