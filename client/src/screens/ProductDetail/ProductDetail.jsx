import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link, useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";

const ProductDetail = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  let loggedIn = props.isLoggedIn;

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

  // console.log(loggedIn);

  return (
    <Layout>
      <div
      // style={{ marginTop: "50px" }}
      >
        <div>
          <div className="d-flex flex-row">
            <Image
              fluid
              rounded
              style={{ height: "150px" }}
              src={product.imgURL}
              alt={product.name}
            />
            <div>{product.name}</div>
            <div>{`$${product.price}`}</div>
          </div>

          <div className="d-flex flex-column">
            <div>{product.description}</div>
            <div>
              {loggedIn ? (
                <>
                  <button className="btn btn-warning">
                    <Link
                      className="edit-link"
                      to={`/products/${product._id}/edit`}
                    >
                      Edit
                    </Link>
                  </button>
                  <button
                    className="btn btn-danger m-3"
                    onClick={() => {
                      deleteProduct(product._id);
                      history.push("/products");
                      alert(`Item ${product.name} Deleted!`);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={props.handleChangeLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-warning disabled">
                    {" "}
                    Purchase{" "}
                  </button>
                  <button
                    className="btn btn-primary m-3"
                    onClick={props.handleChangeLogin}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
