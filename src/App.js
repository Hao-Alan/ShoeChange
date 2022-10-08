import React, { Component } from 'react'
import DemoProps from './props/DemoProps'
import ProductList from './props/ProductList'
import dataJson from "./data/data.json"
import DanhSachSanPham from './props/DanhSachSanPham'

export default class App extends Component {
  render() {
    return (
      // <div className='container-fluid'>
      //   <div className='row'>
      //     <div className='col-4'>

      //       <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      //         <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
      //         <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Shop</button>

      //       </div>
      //     </div>
      //     <div className='col-8'>
      //       {/* <div className="tab-content" id="home">
      //         <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      //           <ProductList arrProduct={dataJson} />
      //         </div>
      //         <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-profile-tab">Shop</div> */}



      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      //           <ProductList arrProduct={dataJson} />
      //         </div>
      //         <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      //           Shop
      //         </div>

      //       </div>




      //     </div>

      //   </div>
      // </div>
      <DanhSachSanPham />
    )
  }
}
