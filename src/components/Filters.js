import React from "react";
import { Col, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../features/product/productSlice";
import {
  changePriceRange,
  changeRamRange,
  changeMemoryRange,
  editBrandFilter,
} from "../features/product/productSlice";

import {
  priceRangeHandler,
  ramRangeHandler,
  memoryRangeHandler,
} from "../utils/utils";

const Filters = () => {
  const dispatch = useDispatch();
  const productsDetail = useSelector((state) => state.product);

  const uniqueBrands = [
    ...new Set(productsDetail.products.map((product) => product.brand)),
  ];

  const checkHandler = (e) => {
    dispatch(
      editBrandFilter({ brand: e.target.value, isChecked: e.target.checked })
    );
  };

  const priceHandler = (e) => {
    dispatch(changePriceRange(priceRangeHandler(e.target.value)));
  };

  const ramHandler = (e) => {
    dispatch(changeRamRange(ramRangeHandler(e.target.value)));
  };

  const memoryHandler = (e) => {
    dispatch(changeMemoryRange(memoryRangeHandler(e.target.value)));
  };

  return (
    <Col
      xs={3}
      className="vh-100 bg-white py-5 border-end overflow-auto scrollcss"
    >
      <h2 className="pt-4 pb-2 text-center fw-light">Filters</h2>
      <Form.Check
        type="switch"
        onChange={(e) => dispatch(toggleView())}
        className="pb-4"
        label="Switch to List view"
        defaultChecked={!productsDetail.gridView}
      />

      <div className="pb-4">
        <h6>Choose brands</h6>
        {uniqueBrands.map((brand) => (
          <Form.Check
            type="checkbox"
            key={brand}
            label={brand}
            value={brand}
            checked={
              productsDetail.brandFilter.indexOf(brand) === -1 ? false : true
            }
            onChange={checkHandler}
          />
        ))}
      </div>

      <div className="pb-4">
        <h6>Choose price range</h6>
        <Form.Select
          className="w-75"
          aria-label="Default select example"
          onChange={priceHandler}
        >
          <option value="0">default</option>
          <option value="1">{"less than 10,000"}</option>
          <option value="2">{"10,000 - 50,000"}</option>
          <option value="3">{"more than 50,000"}</option>
        </Form.Select>
      </div>

      <div className="pb-4">
        <h6>Choose RAM range</h6>
        <Form.Select
          className="w-75"
          aria-label="Default select example"
          onChange={ramHandler}
        >
          <option value="0">default</option>
          <option value="1">{"upto 2GB"}</option>
          <option value="2">{"2GB to 4GB"}</option>
          <option value="3">{"more than 4GB"}</option>
        </Form.Select>
      </div>

      <div className="pb-4">
        <h6>Choose Memory range</h6>
        <Form.Select
          className="w-75"
          aria-label="Default select example"
          onChange={memoryHandler}
        >
          <option value="0">default</option>
          <option value="1">upto 64GB</option>
          <option value="2">64GB to 128GB</option>
          <option value="3">More than 128GB</option>
        </Form.Select>
      </div>
    </Col>
  );
};

export default Filters;
