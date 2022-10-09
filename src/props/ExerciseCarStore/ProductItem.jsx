import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { itemDetail } = this.props;
    let { name, img, price } = this.props.itemDetail;
    return (
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{price.toLocaleString()} $</p>
          <button
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              this.props.xemChiTiet(itemDetail);
            }}
          >
            Nhấn vào đây
          </button>
        </div>
      </div>
    );
  }
}
