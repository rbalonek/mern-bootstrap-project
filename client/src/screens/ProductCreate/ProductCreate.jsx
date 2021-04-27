import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products";
import { Form, Button, Card, Jumbotron } from "react-bootstrap";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    alert("New Item Created!");
    return <Redirect to={`/products`} />;
  }
  return (
    <Layout user={props.user}>
      <Jumbotron fluid className="p-1">
        <h1 className="font-weight-light">New Product</h1>
      </Jumbotron>
      <div className="mt-5 mb-5">
        <Card>
          <Card.Body className="mb-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Name"
                  value={product.name}
                  name="name"
                  required
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>

              <img
                style={{ height: "100px" }}
                src={product.imgURL}
                alt={product.name}
              />

              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  value={product.imgURL}
                  name="imgURL"
                  required
                  onChange={handleChange}
                  type="text"
                  placeholder="Ex: https://images.unsplash.com/photo-1576594496020-534bf2437b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={product.description}
                  name="description"
                  required
                  onChange={handleChange}
                  type="string"
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Price"
                  value={product.price}
                  name="price"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
};

export default ProductCreate;

// <img
//         style={{ height: "100px" }}
//         src={product.imgURL}
//         alt={product.name}
//       />
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Name"
// value={product.name}
// name="name"
// required
// autoFocus
// onChange={handleChange}
//         />
//         <input
// placeholder="Price"
// value={product.price}
// name="price"
// required
// onChange={handleChange}
//         />
//         <textarea
//           rows={10}
//           placeholder="Description"
// value={product.description}
// name="description"
// required
// onChange={handleChange}
//         />
//         <input
//           placeholder="Image Link"
// value={product.imgURL}
// name="imgURL"
// required
// onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
