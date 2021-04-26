import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div>
      <>
        <Link to={`/products/${props._id}`}>
          <img
            style={{ height: "100px" }}
            src={props.imgURL}
            alt={props.name}
          />
          <div>{props.name}</div>
          <div>{`$${props.price}`}</div>
        </Link>
      </>
    </div>
  );
}
