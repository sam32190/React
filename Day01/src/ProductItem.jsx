import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <li>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={() => this.props.addToCart(product)}>
          Add to Cart{" "}
        </button>
      </li>
    );
  }
}

export default ProductItem;
