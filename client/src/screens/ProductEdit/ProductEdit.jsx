import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

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
    return <Redirect to={`/products/${props.match.params.id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div>
        <div>
          <img
            style={{ height: "100px" }}
            src={product.imgURL}
            alt={product.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Image Link"
              value={product.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            rows={10}
            cols={78}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
