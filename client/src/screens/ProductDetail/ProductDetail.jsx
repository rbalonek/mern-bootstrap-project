import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link, useHistory } from "react-router-dom";

const ProductDetail = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div style={{ marginTop: "50px" }}>
        <img
          style={{ height: "100px" }}
          src={product.imgURL}
          alt={product.name}
        />
        <div>
          <div>{product.name}</div>
          <div>{`$${product.price}`}</div>
          <div>{product.description}</div>
          <div>
            <button>
              <Link className="edit-link" to={`/products/${product._id}/edit`}>
                Edit
              </Link>
            </button>
            <button
              onClick={() => {
                deleteProduct(product._id);
                history.push("/products");
                alert(`Item ${product.name} Deleted!`);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
