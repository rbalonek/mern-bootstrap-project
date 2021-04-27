import React from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import Layout from "../../components/shared/Layout/Layout";

const Home = (props) => {
  return (
    <Layout
      isLoggedIn={props.isLoggedIn}
      handleChangeLogout={props.handleChangeLogout}
      handleChangeLogin={props.handleChangeLogin}
    >
      <div className="home">
        <ProductCards
          isLoggedIn={props.isLoggedIn}
          handleChangeLogout={props.handleChangeLogout}
          handleChangeLogin={props.handleChangeLogin}
        />
      </div>
    </Layout>
  );
};

export default Home;
