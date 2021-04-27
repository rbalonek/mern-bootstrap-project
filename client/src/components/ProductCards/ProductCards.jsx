import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/products";

class ProductCards extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products });
  }

  render() {
    const CARDS = this.state.products
      .reverse()
      .map((product, index) =>
        index < 8 ? (
          <ProductCard
            _id={product._id}
            name={product.name}
            imgURL={product.imgURL}
            key={index}
            price={product.price}
          />
        ) : null
      );

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "100px",
        }}
      >
        <div className="latest">LATEST</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          className="cards"
        >
          {CARDS}
        </div>
      </div>
    );
  }
}

export default ProductCards;
