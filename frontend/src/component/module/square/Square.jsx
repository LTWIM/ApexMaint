import React from "react";
import "./square.css";

export default class Square extends React.Component {
  makeSquare = (word) => {
    return (
      <div className="square">
        <p id="title">{word}</p>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div>
          <h1 className="service">Our Services</h1>
        </div>
        <div className="squareContainer">
          {this.makeSquare("JANITORIAL SERVICE")}
          {this.makeSquare("CARPET CLEANING")}
          {this.makeSquare("CEILING")}
          {this.makeSquare("FLOOR STRIPING, SEALING AND WAXING")}
          {this.makeSquare("WINDOW CLEANING")}
          {this.makeSquare("SUPPLIES DELIVERY")}
        </div>
      </div>
    );
  }
}
