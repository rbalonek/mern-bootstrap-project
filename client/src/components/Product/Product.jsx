import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function Product(props) {
  return (
    <div>
      <Card
        border="primary"
        style={{ width: "12rem" }}
        className="shadow p-2 m-2"
      >
        <Card.Img variant="top" src={props.imgURL} />
        <Card.Body className="p-2">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>${props.price}</Card.Text>
          <Button href={`/products/${props._id}`} variant="primary">
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

// <>
// <Link to={`/products/${props._id}`}>
//   <img
//     style={{ height: "100px" }}
//     src={props.imgURL}
//     alt={props.name}
//   />
//   <div>{props.name}</div>
//   <div>{`$${props.price}`}</div>
// </Link>
// </>
