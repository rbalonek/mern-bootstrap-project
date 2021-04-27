import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  //console.log(props.isLoggedIn);
  return (
    <Card
      border="danger bg-dark"
      style={{ width: "12rem" }}
      className="shadow p-2 m-2"
    >
      <Card.Img variant="top" src={props.imgURL} />
      <Card.Body className="p-2">
        <Card.Title className="font-weight-bold text-light">
          {props.name}
        </Card.Title>
        <Card.Text className="font-italic text-success ">
          ${props.price}
        </Card.Text>
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
