import React from "react";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ProductList = ({ product }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/p/${product._id}/view`);
  };
  return (
    <div
      className="col-12 d-flex border rounded-1 bg-white align-items-center"
      onClick={navigateHandler}
    >
      <img
        height={150}
        width={150}
        style={{ objectFit: "contain" }}
        src="http://localhost:3000/assets/phone.png"
        alt=""
      />
      <div className="border-start ps-4">
        <h5>{product.name}</h5>
        <Stack direction="horizontal" gap={2}>
          <span>{product.ram}GB RAM</span>
          <div className="vr"></div>
          <span>{product.memory}GB Memory</span>
        </Stack>
        <p className="text-danger pt-2 pb-0 mb-0">Rs. {product.price}</p>
      </div>
    </div>
  );
};

export default ProductList;
