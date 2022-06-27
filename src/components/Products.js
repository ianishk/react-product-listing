import React from "react";
import { Col } from "react-bootstrap";
import ProductGrid from "./ProductGrid";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { priceCondition, ramCondition, memoryCondition } from "../utils/utils";

const Products = () => {
  const productDetail = useSelector((state) => state.product);
  let allProducts = productDetail.products.filter(
    (product) =>
      priceCondition(product, productDetail) &&
      ramCondition(product, productDetail) &&
      memoryCondition(product, productDetail)
  );

  if (productDetail.brandFilter.length !== 0) {
    allProducts = allProducts.filter((product) => {
      if (productDetail.brandFilter.indexOf(product.brand) === -1) return false;
      else return true;
    });
  }

  return (
    <Col xs={9} className="vh-100 bg-white py-5 overflow-auto scrollcss">
      <h2 className="py-4 pd-1 text-center fw-light">Product Listing</h2>
      <div className="row g-2">
        {productDetail.gridView
          ? allProducts.map((product) => (
              <ProductGrid key={product._id} product={product} />
            ))
          : allProducts.map((product) => (
              <ProductList key={product._id} product={product} />
            ))}
      </div>
    </Col>
  );
};

export default Products;
