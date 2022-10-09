import React, { Component } from 'react'
import DemoProps from './props/DemoProps'
import ProductList from './props/ProductList'
import dataJson from "./data/data.json"
import DanhSachSanPham from './props/DanhSachSanPham'
import ExerciseCarStore from './props/ExerciseCarStore/ExerciseCarStore'
import ExerciseCart from './props/ExceriseCart/ExerciseCart'

export default class App extends Component {
  render() {
    return (
      // <ExerciseCarStore />
      // <DanhSachSanPham />
      <ExerciseCart />
    )
  }
}
