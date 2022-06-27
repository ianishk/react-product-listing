import { products } from "../data/products";

export const initialState = {
  products,
  gridView: true,
  brandFilter: [],
  priceFilter: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
  ramFilter: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
  memoryFilter: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
};

export const priceCondition = (product, productDetail) => {
  return (
    product.price > productDetail.priceFilter.min &&
    product.price <= productDetail.priceFilter.max
  );
};

export const ramCondition = (product, productDetail) => {
  return (
    product.ram > productDetail.ramFilter.min &&
    product.ram <= productDetail.ramFilter.max
  );
};

export const memoryCondition = (product, productDetail) => {
  return (
    product.memory > productDetail.memoryFilter.min &&
    product.memory <= productDetail.memoryFilter.max
  );
};

export const priceRangeHandler = (ch) => {
  let priceRange = { min: 0, max: Number.MAX_SAFE_INTEGER };
  switch (ch) {
    case "0":
      priceRange.min = 0;
      priceRange.max = Number.MAX_SAFE_INTEGER;
      break;
    case "1":
      priceRange.min = 0;
      priceRange.max = 10000;
      break;
    case "2":
      priceRange.min = 10000;
      priceRange.max = 50000;
      break;
    case "3":
      priceRange.min = 50000;
      priceRange.max = Number.MAX_SAFE_INTEGER;
      break;
    default:
      break;
  }
  return priceRange;
};

export const ramRangeHandler = (ch) => {
  let ramRange = { min: 0, max: Number.MAX_SAFE_INTEGER };
  switch (ch) {
    case "0":
      ramRange.min = 0;
      ramRange.max = Number.MAX_SAFE_INTEGER;
      break;
    case "1":
      ramRange.min = 0;
      ramRange.max = 2;
      break;
    case "2":
      ramRange.min = 2;
      ramRange.max = 4;
      break;
    case "3":
      ramRange.min = 4;
      ramRange.max = Number.MAX_SAFE_INTEGER;
      break;
    default:
      break;
  }
  return ramRange;
};

export const memoryRangeHandler = (ch) => {
  let memoryRange = { min: 0, max: Number.MAX_SAFE_INTEGER };
  switch (ch) {
    case "0":
      memoryRange.min = 0;
      memoryRange.max = Number.MAX_SAFE_INTEGER;
      break;
    case "1":
      memoryRange.min = 0;
      memoryRange.max = 64;
      break;
    case "2":
      memoryRange.min = 64;
      memoryRange.max = 128;
      break;
    case "3":
      memoryRange.min = 128;
      memoryRange.max = Number.MAX_SAFE_INTEGER;
      break;
    default:
      break;
  }
  return memoryRange;
};
