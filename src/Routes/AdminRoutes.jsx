import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import Sales from "../Pages/Sales";
import AdminProducts from "../Pages/AdminProducts";
import AdminUsers from "../Pages/AdminUsers";
import AddAdmin from "../Pages/AddAdmin";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/adminProducts" element={<AdminProducts />} />
      <Route path="/adminUsers" element={<AdminUsers />} />
      <Route path="/addAdmin" element={<AddAdmin />} />
    </Routes>
  );
};

export default AdminRoutes;
