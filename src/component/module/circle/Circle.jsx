import React from "react";
import "./Circle.css";
export default class Circle extends React.Component {
  makeCircle = (word) => {
    if (word.includes("Orange") || word.includes("San")) {
      return (
        <div className="circleBot">
          <p id="circleTitle">{word}</p>
        </div>
      );
    } else {
      return (
        <div className="circle">
          <p id="circleTitle">{word}</p>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "100px" }}>
          Areas We Service
        </h1>
        <div className="circleContainer">
          {this.makeCircle("Los Angeles County")}
          {this.makeCircle("Orange County")}
          {this.makeCircle("Riverside County")}
          {this.makeCircle("San Bernardino County")}
        </div>
      </div>
    );
  }
}
