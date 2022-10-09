import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderCars = () => {
    return this.props.productList.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem itemDetail={item} xemChiTiet={this.props.xemChiTiet} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderCars()}</div>
      </div>
    );
  }
}
