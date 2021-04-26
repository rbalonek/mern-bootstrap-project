import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div style={{ width: "150px" }}>
      <Link to={`/products/${props._id}`}>
        <img
          style={{ height: "100px", width: "100px" }}
          src={props.imgURL}
          alt={props.name}
        />
        <div>View</div>
      </Link>
    </div>
  );
};

export default ProductCard;
