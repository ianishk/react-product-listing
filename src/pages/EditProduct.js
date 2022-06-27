import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../features/product/productSlice";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const storeProduct = useSelector((state) => state.product.products).find(
    (product) => product._id === id
  );

  const [product, setProduct] = useState(storeProduct);

  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editProduct({ product }));
    navigate("/");
    alert("successfully edited");
  };
  return (
    <Container fluid className="vh-100 d-flex justify-content-center bg-light">
      <div className="w-50 vh-100 overflow-auto scrollcss bg-white pt-5 px-5">
        <h2 className="text-center pt-4 fw-light">Edit Product</h2>
        <Form onSubmit={editHandler}>
          <Form.Group className="mb-2">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              required
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              required
              type="text"
              value={product.brand}
              onChange={(e) =>
                setProduct({ ...product, brand: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              required
              type="text"
              as="textarea"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>RAM specification</Form.Label>
            <Form.Control
              required
              type="number"
              value={product.ram}
              onChange={(e) => setProduct({ ...product, ram: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Memory specification</Form.Label>
            <Form.Control
              required
              type="number"
              value={product.memory}
              onChange={(e) =>
                setProduct({ ...product, memory: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </Form.Group>

          <Button className="d-block mx-auto" variant="primary" type="submit">
            Edit changes
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EditProduct;
