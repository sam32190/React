import React, { Component } from "react";
import ProductItem from "./ProductItem";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        // Add more products as needed
      ],
    };
  }
  render() {
    return (
      <>
        <h1>Product List</h1>
        <ul>
          {this.state.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </>
    );
  }
}
export default ProductList;
