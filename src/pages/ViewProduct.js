import React from "react";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../features/product/productSlice";

const ViewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => state.product.products).find(
    (product) => product._id === id
  );

  const navigateHandler = () => {
    navigate(`/p/${product._id}/edit`);
  };

  const deleteHandler = () => {
    dispatch(deleteProduct({ product }));
    navigate("/");
    alert("deleted successfully");
  };

  return (
    <Container fluid>
      <Row className="bg-light justify-content-center">
        <Col lg={8} className=" bg-white vh-100 pt-5 overflow-auto scrollcss">
          <h2 className="text-center mt-5 fw-light">Product Details</h2>
          <Row className="align-items-center">
            <Col
              lg={5}
              className="d-flex vh-90 align-items-center justify-content-center"
            >
              <img
                src="http://localhost:3000/assets/phone.png"
                className="w-75"
                alt=""
              />
            </Col>
            <Col lg={7} className="border-start ps-5">
              <p className="">
                <b>Product name:</b> {product.name}
              </p>
              <p className="">
                <b>Brand:</b> {product.brand}
              </p>
              <p className="">
                <b>RAM specification:</b> {product.ram}GB
              </p>
              <p className="">
                <b>Memory specification:</b> {product.memory}GB
              </p>
              <p className="">
                <b>Description: </b>
                {product.description}
              </p>
              <p className="">
                <b>Price:</b> Rs. {product.price}
              </p>
              <Stack direction="horizontal" gap={3}>
                <Button onClick={navigateHandler}>Edit</Button>
                <div className="vr opacity-25"></div>
                <Button variant="outline-danger" onClick={deleteHandler}>
                  Delete
                </Button>
              </Stack>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProduct;
