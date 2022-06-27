import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ProductListing from "./pages/ProductListing";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="p/:id/view" element={<ViewProduct />} />
        <Route path="p/:id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default App;
