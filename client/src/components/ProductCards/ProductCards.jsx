import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/products";
import { Jumbotron } from "react-bootstrap";

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
            isLoggedIn={this.props.isLoggedIn}
            handleChangeLogout={this.props.handleChangeLogout}
            handleChangeLogin={this.props.handleChangeLogin}
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
        <Jumbotron className="p-1">
          <h1 className="font-weight-light">LATEST</h1>
        </Jumbotron>

        {CARDS.length ? (
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
        ) : (
          <div
            style={{
              textAlign: "-webkit-center",
              position: "relative",
              top: "10vh",
            }}
          >
            <p>Loading...</p>
            <div className="spinner" />
          </div>
        )}
      </div>
    );
  }
}

export default ProductCards;
