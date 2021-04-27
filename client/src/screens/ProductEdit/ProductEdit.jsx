import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";
import { Form, Button, Card, Jumbotron } from "react-bootstrap";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    alert("Product Edited!");
    return <Redirect to={`/products/${props.match.params.id}`} />;
  }

  return (
    <Layout user={props.user}>
      <Jumbotron fluid className="p-1">
        <h1 className="font-weight-light">Edit Product</h1>
      </Jumbotron>
      <div className="mt-5">
        <Card>
          <Card.Body>
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

export default ProductEdit;

// <div>
//         <div>
//           <img
//             style={{ height: "100px" }}
//             src={product.imgURL}
//             alt={product.name}
//           />
//           <form onSubmit={handleSubmit}>
//             <input
//               placeholder="Image Link"
//               value={product.imgURL}
//               name="imgURL"
//               required
//               onChange={handleChange}
//             />
//           </form>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <input
//             placeholder="Name"
//             value={product.name}
//             name="name"
//             required
//             autoFocus
//             onChange={handleChange}
//           />
//           <input
//             placeholder="Price"
//             value={product.price}
//             name="price"
//             required
//             onChange={handleChange}
//           />
//           <textarea
//             rows={10}
//             cols={78}
//             placeholder="Description"
//             value={product.description}
//             name="description"
//             required
//             onChange={handleChange}
//           />
//           <button type="submit">Save</button>
//         </form>
//       </div>
