import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import LoginAndRegisterPage from "../Pages/Login";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import Admin from "../Pages/Admin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginAndRegisterPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:category" element={<ProductPage />} />
    </Routes>
  );
};

export default AllRoutes;
