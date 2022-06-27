import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addProduct } from "../features/product/productSlice";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    _id: uniqid(),
    name: "",
    brand: "",
    description: "",
    ram: "",
    memory: "",
    price: "",
  });
  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    navigate("/");
    alert("added successfully");
  };
  return (
    <Container fluid className="vh-100 d-flex justify-content-center bg-light">
      <div className="w-50 vh-100 bg-white pt-5 px-5 overflow-auto scrollcss">
        <h2 className="text-center pt-4 fw-light">Add Product</h2>
        <Form onSubmit={addHandler}>
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
              value={product.ram}
              onChange={(e) => setProduct({ ...product, ram: e.target.value })}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label type="number">Memory specification</Form.Label>
            <Form.Control
              required
              value={product.memory}
              onChange={(e) =>
                setProduct({ ...product, memory: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label type="number">Price</Form.Label>
            <Form.Control
              required
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </Form.Group>

          <Button className="d-block mx-auto" variant="primary" type="submit">
            Add product
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;
