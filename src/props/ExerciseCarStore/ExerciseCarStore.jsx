import React, { Component } from "react";
// import ProductList from "../ProductList";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ExerciseCarStore extends Component {
  products = [
    { id: 1, name: "black car", img: "../img/black-car.jpg", price: 1000 },
    { id: 2, name: "red car", img: "../img/red-car.jpg", price: 2000 },
    { id: 3, name: "silver car", img: "../img/silver-car.jpg", price: 3000 },
    { id: 4, name: "steel car", img: "../img/steel-car.jpg", price: 4000 },
  ];

  state = {
    itemDetail: {
      id: 1,
      name: "black car",
      img: "../img/black-car.jpg",
      price: 1000,
    },
  };
  xemChiTiet = (newItem) => {
    this.setState({
      itemDetail: newItem,
    });
  };

  render() {
    return (
      <div>
        <Modal content={this.state.itemDetail} />
        <ProductList productList={this.products} xemChiTiet={this.xemChiTiet} />
      </div>
    );
  }
}
