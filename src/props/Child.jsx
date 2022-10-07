import React, { Component } from "react";

export default class Child extends Component {
  renderSize = () => {
    let { size } = this.props.productItem;
    return size.map((item, index) => {
      return (
        <button key={index} className="m-1">
          {item}
        </button>
      );
    });
  };
  render() {
    let { name, link, desc, size } = this.props.productItem;
    let { SizeX } = this.props;
    return (
      <div>
        {/* <img src={this.props.hello} alt="" style={{ width: 200 }} /> */}
        <div className="card" style={{ width: "300px" }}>
          <img src={link} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {this.renderSize()}
            <br />
            {SizeX.map((value, index) => {
              return (
                <button key={index} className="btn btn-primary">
                  {value}
                </button>
              );
            })}
            <br />
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <button
              onClick={() => {
                this.props.showAlert(desc, size);
              }}
            >
              DETAIL
            </button>
          </div>
        </div>
      </div>
    );
  }
}
