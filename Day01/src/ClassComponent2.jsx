import React from "react";

class Bike extends React.Component {
  constructor() {
    super();
    this.state = { color: "green" };
  }
  render() {
    return <h2> This is a {this.state.color} Bike! </h2>;
  }
}

export default Bike;
