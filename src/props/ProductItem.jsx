import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div
        className="card w3-container w3-center w3-animate-zoom"
        style={{ minHeight: "300px" }}
      >
        <img
          src={this.props.itemList.image}
          className="card-img-top"
          alt={this.props.itemList.image}
          style={{ width: "170px" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ minHeight: "50px" }}>
            {this.props.itemList.name}
          </h5>
          <p className="card-text">
            {this.props.itemList.description.length > 40 ? (
              <p>{this.props.itemList.description.substring(0, 40)}...</p>
            ) : (
              <p>{this.props.itemList.description}</p>
            )}
          </p>
          <a href="#" class="w3-button w3-pink">
            Add to cart <i class="fa fa-cart-arrow-down"></i>
          </a>
        </div>
      </div>
    );
  }
}
