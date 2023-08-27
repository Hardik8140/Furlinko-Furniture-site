import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import LoginAndRegisterPage from "../Pages/Login";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import Admin from "../Pages/Admin";
import Sales from "../Pages/Sales";
import AdminProducts from "../Pages/AdminProducts";
import AdminUsers from "../Pages/AdminUsers";
import AddAdmin from "../Pages/AddAdmin";
import SingleProductPage from "../Pages/SingleProductPage";
import PrivetRoute from "./PrivetRoute";
import Checkout from "../Pages/Checkout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginAndRegisterPage />} />
      <Route
        path="/wishlist"
        element={
          <PrivetRoute>
            <Wishlist />
          </PrivetRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/products" element={<ProductPage />} />
      {/* <Route path="/products/:category" element={<ProductPage />} /> */}
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="/admin" element={<Admin />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/adminProducts" element={<AdminProducts />} />
      <Route path="/adminUsers" element={<AdminUsers />} />
      <Route path="/addAdmin" element={<AddAdmin />} />
    </Routes>
  );
};

export default AllRoutes;
