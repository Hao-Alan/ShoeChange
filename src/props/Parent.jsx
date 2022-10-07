import React, { Component } from "react";
import Child from "./Child";
import ChildFunctional from "./ChildFunctional";

export default class Parent extends Component {
  render() {
    let product = {
      name: "hello all of you",
      link: "https://dictionary.cambridge.org/vi/images/thumb/flower_noun_002_14403.jpg?version=5.0.252",
      size: [35, 36, 37, 38],
      desc: "xin chao tat ca cac ban tren the gioi nay",
    };
    let size = [20, 30, 30, 50];
    let showInfo = (content, content2) => {
      alert(`${content} + ${content2} `);
    };
    return (
      <div>
        <Child productItem={product} SizeX={size} showAlert={showInfo} />

        {/* <ChildFunctional productItem={this.product} /> */}
      </div>
    );
  }
}
