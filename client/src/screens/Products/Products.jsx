import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import Layout from "../../components/shared/Layout/Layout";

import Search from "../../components/Search/Search";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort/sort.js";
import Sort from "../../components/Sort/Sort";

import { getProducts } from "../../services/products";
import { Jumbotron } from "react-bootstrap";

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(queriedProducts));
        break;
      case "name-descending":
        setQueriedProducts(ZA(queriedProducts));
        break;
      case "price-ascending":
        setQueriedProducts(lowestFirst(queriedProducts));
        break;
      case "price-descending":
        setQueriedProducts(highestFirst(queriedProducts));
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    const newQueriedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedProducts(newQueriedProducts, () => handleSort(sortType));
  };

  const handleSubmit = (event) => event.preventDefault();

  const productsJSX = queriedProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      price={product.price}
      key={index}
    />
  ));

  return (
    <div>
      <Layout>
        <Jumbotron className="p-1">
          <h1 className="font-weight-light">All The Products</h1>
        </Jumbotron>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "100px",
          }}
        >
          {productsJSX}
        </div>
      </Layout>
    </div>
  );
};

export default Products;

// <div>
//       <Layout>
//         <Jumbotron className="p-1">
//           <h1 className="font-weight-light">All The Products</h1>
//         </Jumbotron>
//         <Search onSubmit={handleSubmit} onChange={handleSearch} />
//         <Sort onSubmit={handleSubmit} onChange={handleSort} />
//         <div
//           style={{
//             marginTop: "10px",
//             display: "flex",
//             flexDirection: "row",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             marginBottom: "100px",
//           }}
//         >
//           {productsJSX}
//         </div>
//       </Layout>
//     </div>
