import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          justifyContent: "space-around",
        }}
      >
        <NavLink to="/">ProductsApp</NavLink>
        <div>
          <NavLink to="/products">Products</NavLink>
          <NavLink style={{ paddingLeft: "40px" }} to="/add-product">
            Add Product
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
