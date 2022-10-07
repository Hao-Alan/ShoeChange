import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductList = () => {
    return this.props.arrProduct.map((items, index) => {
      return (
        <div className="col-4 mt-3" key={index}>
          <ProductItem itemList={items} />
        </div>
      );
    });
  };
  render() {
    // console.log("data", this.props.arrProduct);
    return <div className="row">{this.renderProductList()}</div>;
  }
}
