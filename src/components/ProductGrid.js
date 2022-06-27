import React from "react";
import { Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductGrid = ({ product }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/p/${product._id}/view`);
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6" onClick={navigateHandler}>
      <Card>
        <Card.Img
          variant="top"
          height={150}
          style={{ objectFit: "contain" }}
          src="http://localhost:3000/assets/phone.png"
        />
        <Card.Body className="border-top">
          <Card.Title className="">{product.name}</Card.Title>
          <Card.Text as="div">
            <Stack direction="horizontal" gap={2}>
              <span>{product.ram}GB RAM</span>
              <div className="vr"></div>
              <span>{product.memory}GB Memory</span>
            </Stack>
            <p className="text-danger pt-2 pb-0 mb-0">Rs. {product.price}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductGrid;
