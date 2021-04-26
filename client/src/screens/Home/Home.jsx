import React from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <h1>Home</h1>
        <ProductCards />
      </div>
    </Layout>
  );
};

export default Home;
