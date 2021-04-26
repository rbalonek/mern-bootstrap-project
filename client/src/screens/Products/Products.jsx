import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/products";

export default function Products(props) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      //setQueriedProducts(products)
    };
    fetchProducts();
  }, []);
  //console.log(allProducts);

  const productsJSX = allProducts.map((product, index) => (
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
        <div>{productsJSX}</div>
      </Layout>
    </div>
  );
}
