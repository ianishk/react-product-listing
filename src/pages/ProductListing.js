import React from "react";
import { Container, Row } from "react-bootstrap";
import Filters from "../components/Filters";
import Products from "../components/Products";

const ProductGriding = () => {
  return (
    <Container fluid>
      <Row>
        <Filters />
        <Products />
      </Row>
    </Container>
  );
};

export default ProductGriding;
