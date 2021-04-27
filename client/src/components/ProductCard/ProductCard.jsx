import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  return (
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
  );
};

export default ProductCard;

// <div style={{ width: "150px" }}>
//       <Link to={`/products/${props._id}`}>
//         <img
//           style={{ height: "100px", width: "100px" }}
//           src={props.imgURL}
//           alt={props.name}
//         />
//         <div>View</div>
//       </Link>
//     </div>
